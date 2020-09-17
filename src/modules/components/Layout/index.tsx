import "./index.scss";
import React from "react";

type Props = {
  children: React.ReactElement;
};

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <div className="Layout">
      <main>{children}</main>
    </div>
  );
};

export default Layout;
