import "./style.css";
import Controllers from "../../components/controllers";
import AlbumArt from "../../components/images";
import Info from "../../components/info";
import Header from "../../components/header";
import ProgressBar from "../../components/progress";

import songsArr from "../../mock/songs.js";
import { useState } from "react";

const Home = ({
  song,
  currentIndex,
  setCurrentIndex,
  currentVolume,
  setCurrentVolume,
  audioObject,
}) => {
  return (
    <div className="home">
      <Header />
      <AlbumArt song={song} />
      <Info song={song} />
      <ProgressBar currentVolume={currentVolume} />
      <Controllers
        currentVolume={currentVolume}
        setCurrentVolume={setCurrentVolume}
        audioObject={audioObject}
        setCurrentIndex={setCurrentIndex}
        song={songsArr[currentIndex]}
      />
    </div>
  );
};

export default Home;
