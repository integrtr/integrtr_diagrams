import React from "react";

import { Palette } from "./Palette";
import { Canvas } from "./Canvas";
import { PropertiesPanel } from "./PropertiesPanel";

function App() {
  return (
    <div className="app">
      <Palette />
      <Canvas />
      <PropertiesPanel />
    </div>
  );
}

export default App;
