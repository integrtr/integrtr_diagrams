import React, { useCallback } from "react";

import { SHAPE_TYPES } from "./constants";
import { useShapes } from "./state";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

export function Shape(props) {
  const shapeSelector = useCallback((state) => state.shapes[props.id], [
    props.id,
  ]);
  const shape = useShapes(shapeSelector);

  const isSelectedSelector = useCallback(
    (state) => state.selected === props.id,
    [props.id]
  );
  const isSelected = useShapes(isSelectedSelector);

  if (shape.type === SHAPE_TYPES.RECT) {
    return <Rectangle {...shape} id={props.id} isSelected={isSelected} />;
  } else if (shape.type === SHAPE_TYPES.CIRCLE) {
    return <Circle {...shape} id={props.id} isSelected={isSelected} />;
  }

  return null;
}
