import React, { useCallback } from "react";

import { useShapes, updateAttribute } from "./state";

const shapeSelector = (state) => state.shapes[state.selected];

export function PropertiesPanel() {
  const selectedShape = useShapes(shapeSelector);

  const updateAttr = useCallback((event) => {
    const attr = event.target.name;

    updateAttribute(attr, event.target.value);
  }, []);

  return (
    <aside className="panel">
      <h2>Properties</h2>
      <div className="properties">
        {selectedShape ? (
          <>
            <div className="key">
              Type <span className="value">{selectedShape.type}</span>
            </div>

            <div className="key">
              Stroke{" "}
              <input
                className="value"
                name="stroke"
                type="color"
                value={selectedShape.stroke}
                onChange={updateAttr}
              />
            </div>

            <div className="key">
              Fill{" "}
              <input
                className="value"
                name="fill"
                type="color"
                value={selectedShape.fill}
                onChange={updateAttr}
              />
            </div>
          </>
        ) : (
          <div className="no-data">Nothing is selected</div>
        )}
      </div>
    </aside>
  );
}
