import * as React from "react";
import "./CounterSetter.css";
//use reducer tools

type ICounterSetterProps = {
  name: string;
  value: number;
  onUpdate(val: number): void;
};
const CounterSetter: React.FC<ICounterSetterProps> = ({
  name,
  value,
  onUpdate,
}) => {
  return (
    <div className="row">
      <div
        id={`${name}-label`}
        className="col-10 offset-1 text-info text-center"
      >
        {name}
      </div>
      <div className="col-4 offset-1">
        <button
          id={`${name}-increment`}
          className="btn bi bi-arrow-up-square btn-secondary"
          onClick={() => onUpdate(value + 60)}
        />
        <h5 id={`${name}-length`} className="text-center text-info">
          {Math.floor(value / 60)
            .toString()
            .padStart(2, "0")}
        </h5>
        <button
          id={`${name}-decrement`}
          className="btn bi bi-arrow-down-square btn-secondary"
          onClick={() => onUpdate(value - 60)}
        />
      </div>
      <div className="col-4 offset-2">
        <button
          id={`${name}-increment-seconds`}
          className="row btn bi bi-arrow-up-square btn-secondary"
          onClick={() => onUpdate(value + 1)}
        />
        <div className="row">
          <h5
            id={`${name}-length-seconds`}
            className="col text-center text-info"
          >
            {(value - Math.floor(value / 60) * 60).toString().padStart(2, "0")}
          </h5>
        </div>
        <button
          id={`${name}-decrement-seconds`}
          className="row btn bi bi-arrow-down-square btn-secondary"
          onClick={() => onUpdate(value - 1)}
        />
      </div>
    </div>
  );
};
export default CounterSetter;
