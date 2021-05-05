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

// type IAlarmProps = {
//   active: boolean;
//   handleEnd(): void;
//   handleStart(): void;
//   //use handeler function if desired
// };

// const Alarm: React.FC<IAlarmProps> = ({ active, handleEnd, handleStart }) => {
//   const audioRef: React.RefObject<HTMLAudioElement> = React.createRef();
//   const playAudio = () => {
//     const loadedAudio = audioRef.current;
//     if (active && loadedAudio) {
//       loadedAudio.loop = false;
//       loadedAudio.addEventListener("ended", handleEnd);
//       try {
//         loadedAudio.play();
//       } catch (Err) {
//         alert("audio broken");
//       } finally {
//         return;
//       }
//     } else if (loadedAudio) {
//       loadedAudio.pause();
//     }
//   };
//   React.useEffect(() => playAudio());
//   return (
//     <audio
//       id="beep"
//       ref={audioRef}
//       src={process.env.PUBLIC_URL + "./AudioBeepSound.wav"}
//     />
//   );
// };

export default Alarm;
