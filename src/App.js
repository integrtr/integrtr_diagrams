import React from "react";

import { Palette } from "./Palette";
import { Canvas } from "./Canvas";
import { Inspector } from "./Inspector";

function App() {
  return (
    <div className="app">
      <Palette />
      <Canvas />
      <Inspector />
    </div>
  );
}

export default App;
