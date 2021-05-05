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
      <div id={`${name}-label`} className="col-10 offset-1">
        {name} length
      </div>
      <button
        id={`${name}-increment`}
        className="col-10 offset-1 bi bi-arrow-up-square-fill"
        onClick={() => onUpdate(value + 1)}
      />
      <h2 id={`${name}-length`} className="col-10 offset-1 text-center">
        {value}
      </h2>
      <button
        id={`${name}-decrement`}
        className="col-10 offset-1 bi bi-arrow-down-square-fill"
        onClick={() => onUpdate(value - 1)}
      />
    </div>
  );
};
export default CounterSetter;
