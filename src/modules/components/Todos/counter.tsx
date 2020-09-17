import "./index.scss";
import React, { useState } from "react";
import TodoContent from "./TodoContent";
import store from "./store";

const Counter = () => {
  return (
    <div className="ItemsOpenCounter">
      <button value="count">counter</button>
    </div>
  );
};
export default Counter;
