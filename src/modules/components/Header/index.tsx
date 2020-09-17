import "./index.scss";
import React from "react";
import Menu from "./Menu";

type Props = {
  children: React.ReactElement;
};

const Header = () => (
  <div className="Layout">
    <header className="Layout__header">
      <h1>Test technique React.js</h1>
      <Menu />
    </header>
  </div>
);

export default Header;
