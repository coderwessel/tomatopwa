import * as React from "react";
// import useScript from "../hooks/useScript";
import Alarm from "./Alarm";
import "./App.css";
import CounterSetter from "./CounterSetter";
import PausePlayButton from "./PausePlayButton";
import ResetButton from "./ResetButton";
import Timer from "./Timer";
import Title from "./Title";

enum TimerMode {
  Session,
  Break,
}

const App: React.FC = (): JSX.Element => {
  // useScript("https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js");
  //use local state
  const initialState = {
    activeTimer: {
      mode: TimerMode.Session,
      paused: true,
      minutes: 25,
      seconds: 0,
    },
    breakLength: 300,
    sessionLength: 25 * 60,
    // alarm: { active: false, started: false },
  };

  //   const everySecondFunction = () => {
  //     console.log("piep");
  //   };

  const [activeTimer, updateActiveTimer] = React.useState(
    initialState.activeTimer
  );

  const newAudioRef: React.RefObject<HTMLAudioElement> = React.createRef();
  const [audioRef, updateAudioRef] = React.useState(newAudioRef);

  const [breakLength, updateBreakLength] = React.useState(
    initialState.breakLength
  );

  const [sessionLength, updateSessionLength] = React.useState(
    initialState.sessionLength
  );

  //   const [alarm, updateAlarm] = React.useState(initialState.alarm);

  const resetHandler = () => {
    updateSessionLength(initialState.sessionLength);
    updateBreakLength(initialState.breakLength);
    updateActiveTimer({
      paused: true,
      mode: TimerMode.Session,
      minutes: Math.floor(initialState.sessionLength / 60),
      seconds: initialState.sessionLength % 60,
    });
    stopAudio();
  };

  const pausePlayHandler = () => {
    const toggle = activeTimer.paused ? false : true;
    updateActiveTimer({ ...activeTimer, paused: toggle });
    stopAudio();
  };

  const handlerBreakLength = (value: number) => {
    if (value < 1 || value > 3600) return;
    updateBreakLength(value);
    if (activeTimer.paused && activeTimer.mode === TimerMode.Break)
      updateActiveTimer({
        ...activeTimer,
        minutes: Math.floor(value / 60),
        seconds: value % 60,
      });
  };

  const handlerSessionLength = (value: number) => {
    if (value < 1 || value > 3600) return;
    updateSessionLength(value);
    if (activeTimer.paused && activeTimer.mode === TimerMode.Session)
      updateActiveTimer({
        ...activeTimer,
        minutes: Math.floor(value / 60),
        seconds: value % 60,
      });
  };

  const updateTimerFunction = () => {
    if (activeTimer.paused) {
      console.log("paused");
    } else {
      console.log("not paused");
      const newMin =
        activeTimer.seconds === 0
          ? activeTimer.minutes - 1
          : activeTimer.minutes;
      const newSec = activeTimer.seconds === 0 ? 59 : activeTimer.seconds - 1;
      updateActiveTimer({ ...activeTimer, minutes: newMin, seconds: newSec });
    }
    if (activeTimer.seconds <= 0 && activeTimer.minutes <= 0) {
      //   updateAlarm({ active: true, started: false });
      updateActiveTimer({ ...activeTimer, paused: true });
      try {
        playAudio();
      } finally {
        try {
          pauseForTest();
        } finally {
          const toggleTimerMode =
            activeTimer.mode === TimerMode.Session
              ? TimerMode.Break
              : TimerMode.Session;
          const toggleMinutes =
            toggleTimerMode === TimerMode.Break
              ? Math.floor(breakLength / 60)
              : Math.floor(sessionLength / 60);

          const toggleSeconds =
            toggleTimerMode === TimerMode.Break
              ? breakLength % 60
              : sessionLength % 60;

          updateActiveTimer({
            ...activeTimer,
            minutes: toggleMinutes,
            seconds: toggleSeconds,
            mode: toggleTimerMode,
            paused: false,
          });
        }
      }
    }
  };

  const pauseForTest = async () => {
    setTimeout(() => {
      return "succes";
    }, 60000);
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      updateTimerFunction();
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  // use effect to run on startup
  //   React.useEffect(() => {

  //}, []);
  //acces local state
  // blabla = myStateVar
  //change local state
  //setState(888)
  //read state from redux store
  //const somereduxstoreslice = useAppSelector((state) => state.somereduxstoreslice);
  //write to redux store
  //const dispatch = useAppDispatch();
  //dispatch(update({ textcontent: e.currentTarget.value }));
  //   const updateTimer = (min: number, sec: number) => {
  //     updateActiveTimer({ ...activeTimer, minutes: min, seconds: sec });
  //   };
  //   const handleAlarmEnd = () => {
  //     updateAlarm({ active: false, started: false });
  //   };

  //   const handleAlarmStart = () => {
  //     updateAlarm({ ...alarm, started: true });
  //   };

  const playAudio = async () => {
    const loadedAudio = audioRef.current;
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

  const stopAudio = () => {
    const loadedAudio = audioRef.current;
    if (loadedAudio) {
      loadedAudio.pause();
      loadedAudio.currentTime = 0;
    }
  };

  return (
    <div>
      <div className="row-center">
        <Title title="Pomodoro Timer" />
      </div>
      <div className="row">
        <div className="col-3 offset-3">
          <CounterSetter
            name="break"
            value={breakLength}
            onUpdate={handlerBreakLength}
          />
        </div>
        <div className="col-3">
          <CounterSetter
            name="session"
            value={sessionLength}
            onUpdate={handlerSessionLength}
          />
        </div>
      </div>
      <div className="row-center w-40 mt-1">
        <div className="col-6 offset-3">
          <Timer
            paused={activeTimer.paused}
            name={activeTimer.mode === TimerMode.Session ? "Session" : "Break"}
            minutes={activeTimer.minutes}
            seconds={activeTimer.seconds}
            showBreak={activeTimer.mode === TimerMode.Break}
          />
        </div>
        <Alarm
          audioRef={audioRef}
          //   active={alarm.active}
          //   handleEnd={handleAlarmEnd}
          //   handleStart={handleAlarmStart}
        />
      </div>
      <div className="row">
        <div className="col-3 offset-3 mt-1">
          <PausePlayButton handler={pausePlayHandler} />
        </div>
        <div className="col-3 mt-1">
          <ResetButton handler={resetHandler} />
        </div>
      </div>
    </div>
  );
};

export default App;
