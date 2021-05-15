import * as React from "react";
import "./Timer.css";

type ITimerProps = {
  paused: boolean;
  minutes: number;
  seconds: number;
  name: string;
  showBreak: boolean;
};

const Timer: React.FC<ITimerProps> = ({
  paused,
  name,
  minutes,
  seconds,
  showBreak,
}) => {
  const Seconds = seconds.toString().padStart(2, "0");
  const Minutes = minutes.toString().padStart(2, "0");

  return (
    <div className="card shadow">
      <div
        className={`card-header bg-dark bi ${
          showBreak ? "bi-cup" : "bi-kanban"
        }`}
      >
        <h3 id="timer-label" className="card-title text-center">
          {name}
        </h3>
      </div>
      <div
        className={`card-body ${paused ? "bg-info" : "bg-dark"}  ${
          paused ? "bi-pause-circle" : "bi-play-circle"
        }`}
      >
        <h4
          className={`card-text text-center ${
            paused ? "text-active" : "text-info font-weight-bold"
          }`}
        >
          <span id="time-left">
            {Minutes}:{Seconds}
          </span>{" "}
          {paused ? " paused" : ""}
        </h4>
      </div>
    </div>
  );
};

export default Timer;
