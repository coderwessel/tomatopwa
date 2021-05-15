import * as React from "react";
import "./ResetButton.css";

type IResetButtonProps = {
  //use handeler function if desired
  handler(): void;
};
const ResetButton: React.FC<IResetButtonProps> = ({ handler }) => {
  return (
    <button
      id="reset"
      onClick={handler}
      className="btn col-12 bi bi-arrow-repeat btn-secondary"
    ></button>
  );
};
export default ResetButton;
