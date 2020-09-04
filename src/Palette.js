import React from "react";

import { DRAG_DATA_KEY, SHAPE_TYPES } from "./constants";

const handleDragStart = (event) => {
  const dragKey = event.target.dataset.shape;

  if (dragKey) {
    event.nativeEvent.dataTransfer.setData(DRAG_DATA_KEY, dragKey);
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
