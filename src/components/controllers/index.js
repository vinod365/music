import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";

import VolumeDownRoundedIcon from "@mui/icons-material/VolumeDownRounded";
import VolumeUpRoundedIcon from "@mui/icons-material/VolumeUpRounded";

import { useState } from "react";
import "./style.css";

const Controllers = ({
  currentVolume,
  setCurrentVolume,
  audioObject,
  song,
  setCurrentIndex,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  function handleOnClick() {
    setIsPlaying(!isPlaying);
    document.title = "music";
  }

  function handleOnVolumeClick(e) {
    if (e == "up") {
      setCurrentVolume((current) => {
        if (current >= 0.9999) return current;
        else return current + 0.1;
      });
      audioObject.volume = currentVolume;
    } else {
      setCurrentVolume((current) => {
        if (current <= 0) return current;
        else return current - 0.1;
      });
    }
  }

  function handleOnNextClick() {
    setCurrentIndex((current) => current + 1);
    audioObject.pause();
  }
  function handleOnPrevClick() {
    setCurrentIndex((current) => {
      if (current == 0) return current;
      else {
        return current - 1;
      }
    });
    audioObject.pause();
  }

  if (isPlaying) {
    console.log(audioObject);
    audioObject.play();
    document.title = "Playing.. " + song.name;
  } else {
    audioObject.pause();
    document.title = "Play Tune";
  }
  return (
    <div className="controllers">
      <VolumeDownRoundedIcon
        onClick={() => handleOnVolumeClick("down")}
        className="hidden icon"
      />

      <div>
        <div onClick={handleOnPrevClick} className="prev">
          <SkipPreviousRoundedIcon className="icon" />
        </div>
        <div onClick={handleOnClick} className="play__pause">
          {isPlaying ? (
            <PauseRoundedIcon className="icon " />
          ) : (
            <PlayArrowRoundedIcon className="icon " />
          )}
        </div>
        <div onClick={handleOnNextClick} className="next">
          <SkipNextRoundedIcon className="icon" />
        </div>
      </div>
      <VolumeUpRoundedIcon
        onClick={() => handleOnVolumeClick("up")}
        className="hidden icon"
      />
    </div>
  );
};

export default Controllers;
