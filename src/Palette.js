import React from "react";

import { DRAG_DATA_KEY, SHAPE_TYPES } from "./constants";

const handleDragStart = (event) => {
  const type = event.target.dataset.shape;

  if (type) {
    // x,y coordinates of the mouse pointer relative to the position of the padding edge of the target node
    const offsetX = event.nativeEvent.offsetX;
    const offsetY = event.nativeEvent.offsetY;

    // dimensions of the node on the browser
    const clientWidth = event.target.clientWidth;
    const clientHeight = event.target.clientHeight;

    const dragPayload = JSON.stringify({
      type,
      offsetX,
      offsetY,
      clientWidth,
      clientHeight,
    });

    event.nativeEvent.dataTransfer.setData(DRAG_DATA_KEY, dragPayload);
  }
};

export function Palette() {
  return (
    <aside className="palette">
      <h2>Shapes</h2>
      <div
        className="shape rectangle"
        data-shape={SHAPE_TYPES.RECT}
        draggable
        onDragStart={handleDragStart}
      />
      <div
        className="shape circle"
        data-shape={SHAPE_TYPES.CIRCLE}
        draggable
        onDragStart={handleDragStart}
      />
    </aside>
  );
}
