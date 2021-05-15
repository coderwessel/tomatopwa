import * as React from "react";
import "./Title.css";
import minitomato from "../assets/mini-tomato.svg";
//use reducer tools

type ITitleProps = {
  title: string;
  //use handeler function if desired
};
const Title: React.FC<ITitleProps> = ({ title }) => {
  //use local state
  return (
    <h1 className="text-center text-danger">
      {title}
      <img src={minitomato} height="75em" alt="" />
    </h1>
  );
};
export default Title;
