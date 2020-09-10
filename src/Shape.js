import React, { useCallback } from "react";

import { SHAPE_TYPES } from "./constants";
import { useShapes } from "./state";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

export function Shape({ shape }) {
  const isSelectedSelector = useCallback(
    (state) => state.selected === shape.id,
    [shape]
  );
  const isSelected = useShapes(isSelectedSelector);

  if (shape.type === SHAPE_TYPES.RECT) {
    return <Rectangle {...shape} isSelected={isSelected} />;
  } else if (shape.type === SHAPE_TYPES.CIRCLE) {
    return <Circle {...shape} isSelected={isSelected} />;
  }

  return null;
}
