import * as React from "react";
import "./Timer.css";

type ITimerProps = {
  paused: boolean;
  minutes: number;
  seconds: number;
  name: string;
};

const Timer: React.FC<ITimerProps> = ({ paused, name, minutes, seconds }) => {
  const Seconds = seconds.toString().padStart(2, "0");
  const Minutes = minutes.toString().padStart(2, "0");

  return (
    <div className="card shadow">
      <div className="card-body">
        <h5 id="timer-label" className="card-title text-center">
          {name}
        </h5>
        <p className="card-text text-large text-center">
          <span id="time-left">
            {Minutes}:{Seconds}
          </span>{" "}
          {paused ? " paused" : ""}
        </p>
      </div>
    </div>
  );
};

export default Timer;
