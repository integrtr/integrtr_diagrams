import React, { useRef, useCallback } from "react";
import { Layer, Stage } from "react-konva";

import {
  useShapes,
  clearSelection,
  createCircle,
  createRectangle,
  saveDiagram,
  reset,
} from "./state";
import { DRAG_DATA_KEY, SHAPE_TYPES } from "./constants";
import { Shape } from "./Shape";

const handleDragOver = (event) => event.preventDefault();

export function Canvas() {
  const shapes = useShapes((state) => Object.entries(state.shapes));

  const stageRef = useRef();

  const handleDrop = useCallback((event) => {
    const draggedData = event.nativeEvent.dataTransfer.getData(DRAG_DATA_KEY);

    if (draggedData) {
      const { offsetX, offsetY, type, clientHeight, clientWidth } = JSON.parse(
        draggedData
      );

      stageRef.current.setPointersPositions(event);

      const coords = stageRef.current.getPointerPosition();

      if (type === SHAPE_TYPES.RECT) {
        // rectangle x, y is at the top,left corner
        createRectangle({
          x: coords.x - offsetX,
          y: coords.y - offsetY,
        });
      } else if (type === SHAPE_TYPES.CIRCLE) {
        // circle x, y is at the center of the circle
        createCircle({
          x: coords.x - (offsetX - clientWidth / 2),
          y: coords.y - (offsetY - clientHeight / 2),
        });
      }
    }
  }, []);

  return (
    <main className="canvas" onDrop={handleDrop} onDragOver={handleDragOver}>
      <div className="buttons">
        <button onClick={saveDiagram}>Save</button>
        <button onClick={reset}>Reset</button>
      </div>
      <Stage
        ref={stageRef}
        width={window.innerWidth - 400}
        height={window.innerHeight}
        onClick={clearSelection}
      >
        <Layer>
          {shapes.map(([key, shape]) => (
            <Shape key={key} shape={{ ...shape, id: key }} />
          ))}
        </Layer>
      </Stage>
    </main>
  );
}
