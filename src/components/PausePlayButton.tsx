import * as React from "react";
import "./PausePlayButton.css";
import PausePlaySound from "../assets/play-pause.mp3";
//use reducer tools

type IPausePlayButtonProps = {
  //use handeler function if desired
  handler(): void;
};
const PausePlayButton: React.FC<IPausePlayButtonProps> = ({ handler }) => {
  const pausePlayAudioRef: React.RefObject<HTMLAudioElement> =
    React.createRef();

  const playAudio = async () => {
    const loadedAudio = pausePlayAudioRef.current;
    if (loadedAudio) {
      loadedAudio.loop = false;
      //loadedAudio.addEventListener("ended", handleAlarmEnd);
      try {
        loadedAudio.play();
      } catch (Err) {
        alert("audio broken");
      } finally {
        return;
      }
    }
  };

  const pausePlayHandler = () => {
    playAudio();
    handler();
  };

  return (
    <div>
      <button
        id="start_stop"
        className="btn col-12 btn-primary"
        onClick={() => pausePlayHandler()}
      >
        <i className="bi bi-play-circle-fill" />
        <i className="bi bi-pause-circle-fill" />
      </button>
      <audio id="pauseplaysound" ref={pausePlayAudioRef} src={PausePlaySound} />
      ;
    </div>
  );
};
export default PausePlayButton;
