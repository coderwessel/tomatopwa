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
      <div id={`${name}-label`} className="col-10 offset-1 text-info">
        {name} length
      </div>
      <button
        id={`${name}-increment`}
        className="btn col-4 offset-1 bi bi-arrow-up-square btn-secondary"
        onClick={() => onUpdate(value + 60)}
      />
      <button
        id={`${name}-increment-seconds`}
        className="btn col-4 offset-2 bi bi-arrow-up-square btn-secondary"
        onClick={() => onUpdate(value + 1)}
      />
      <h5
        id={`${name}-length`}
        className="col-10 offset-1 text-center text-info"
      >
        {Math.floor(value / 60)
          .toString()
          .padStart(2, "0")}{" "}
        : {(value - Math.floor(value / 60) * 60).toString().padStart(2, "0")}
      </h5>
      <button
        id={`${name}-decrement`}
        className="btn col-4 offset-1 bi bi-arrow-down-square btn-secondary"
        onClick={() => onUpdate(value - 60)}
      />
      <button
        id={`${name}-decrement-seconds`}
        className="btn col-4 offset-2 bi bi-arrow-down-square btn-secondary"
        onClick={() => onUpdate(value - 1)}
      />
    </div>
  );
};
export default CounterSetter;
