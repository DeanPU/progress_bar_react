import { useState } from "react";
import ProgressBar from "./ProgressBar.jsx";
import "./App.css";

export default function App() {
  const [progress, setProgress] = useState(0);

  const updateProgress = () => {
    setProgress(() => progress + 10);
  };

  const resetProgress = () => {
    setProgress(0);
  };

  return (
    <div className="container">
      <ProgressBar progress={progress} />
      <button
        className="increaseBtn"
        type="button"
        disabled={progress === 100}
        onClick={updateProgress}
      >
        Increase Progress
      </button>

      {progress === 100 && (
        <button className="resetBtn" type="button" onClick={resetProgress}>
          Reset
        </button>
      )}
    </div>
  );
}
