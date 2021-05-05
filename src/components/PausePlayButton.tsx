import * as React from "react";
import "./PausePlayButton.css";
//use reducer tools

type IPausePlayButtonProps = {
  //use handeler function if desired
  handler(): void;
};
const PausePlayButton: React.FC<IPausePlayButtonProps> = ({ handler }) => {
  return (
    <button id="start_stop" className="col-12" onClick={handler}>
      <i className="bi bi-play-circle-fill" />
      <i className="bi bi-pause-circle-fill" />
    </button>
  );
};
export default PausePlayButton;
