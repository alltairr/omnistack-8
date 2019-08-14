import React from "react";
import { YellowBox } from "react-native";

import Routes from "./routes";

YellowBox.ignoreWarnings([
  "Unrecognized WebSocket",
  "Debugger and device times",
  "Can't perform a React"
]);

function App() {
  return <Routes />;
}

export default App;
