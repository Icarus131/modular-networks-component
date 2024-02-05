import React from "react";
import TabbedButtons from "./TabbedButtons";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Switching Chains</h1>
            <div className="divider divider-error">Select chain to view</div>
            <TabbedButtons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
