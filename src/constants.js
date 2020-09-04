export const SHAPE_TYPES = {
  RECT: "rect",
  CIRCLE: "circle",
};

export const DEFAULTS = {
  RECT: {
    STROKE: "black",
    FILL: "white",
    WIDTH: 150,
    HEIGHT: 100,
  },
  CIRCLE: {
    STROKE: "black",
    FILL: "white",
    RADIUS: 50,
  },
};

export const LIMITS = {
  RECT: {
    MAX: 1000,
    MIN: 10,
  },
  CIRCLE: {
    MAX: 500,
    MIN: 5,
  },
};

export const DRAG_DATA_KEY = "TYPE";
