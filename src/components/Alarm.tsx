import * as React from "react";
import "./Alarm.css";
import AudioBeepSound from "../assets/audio-beep-sound.mp3";

type IAlarmProps = {
  audioRef: React.RefObject<HTMLAudioElement>;
  //use handeler function if desired
};

const Alarm: React.FC<IAlarmProps> = ({ audioRef }) => {
  return <audio id="beep" ref={audioRef} src={AudioBeepSound} />;
};

export default Alarm;
