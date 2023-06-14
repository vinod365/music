import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
import Home from "./pages/home";
import { useState } from "react";
import songsArr from "./mock/songs.js";

import "./App.css";
import List from "./pages/list";
function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentVolume, setCurrentVolume] = useState(1);
  let audioObject = new Audio(songsArr[currentIndex].url);

  console.log(currentIndex);
  console.log(songsArr[currentIndex]);
  return (
    <div className="app">
      <Home
        song={songsArr[currentIndex]}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        currentVolume={currentVolume}
        setCurrentVolume={setCurrentVolume}
        audioObject={audioObject}
      />
      <List setCurrentIndex={setCurrentIndex} songsArr={songsArr} />
    </div>
  );
}

export default App;
