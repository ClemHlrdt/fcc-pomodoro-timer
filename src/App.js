import React from "react";
import "./App.scss";
import Pomodoro from "./components/Pomodoro/Pomodoro";
import { TimeProvider } from "./TimeContext";

function App() {
  return (
    <TimeProvider>
      <div className="App">
        <Pomodoro />
      </div>
    </TimeProvider>
  );
}

export default App;
