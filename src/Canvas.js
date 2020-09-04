import React, { useRef, useCallback } from "react";
import { Layer, Stage } from "react-konva";

import { useShapes, setState, createCircle, createRectangle } from "./state";
import { DRAG_DATA_KEY, SHAPE_TYPES } from "./constants";
import { Shape } from "./Shape";

const handleDragOver = (event) => event.preventDefault();

const clearSelection = () => {
  setState((state) => {
    state.selected = null;
  });
};

export function Canvas() {
  const shapeKeys = useShapes((state) => Object.keys(state.shapes));

  const stageRef = useRef();

  const handleDrop = useCallback((event) => {
    const type = event.nativeEvent.dataTransfer.getData(DRAG_DATA_KEY);

    if (type) {
      stageRef.current.setPointersPositions(event);

      if (type === SHAPE_TYPES.RECT) {
        createRectangle(stageRef.current.getPointerPosition());
      } else if (type === SHAPE_TYPES.CIRCLE) {
        createCircle(stageRef.current.getPointerPosition());
      }
    }
  }, []);

  return (
    <main className="canvas" onDrop={handleDrop} onDragOver={handleDragOver}>
      <Stage
        ref={stageRef}
        width={window.innerWidth - 400}
        height={window.innerHeight}
        onClick={clearSelection}
      >
        <Layer>
          {shapeKeys.map((key) => (
            <Shape key={key} id={key} />
          ))}
        </Layer>
      </Stage>
    </main>
  );
}
