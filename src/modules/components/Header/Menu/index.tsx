import "./index.scss";
import React from "react";
import classnames from "classnames";

import UrlLinks from "../../../routes/UrlLinks";

type Props = {
  className?: string;
};

const Menu = ({ className }: Props): JSX.Element => {
  const pageClassNames = classnames("MenuHeader", className);
  return (
    <div className={pageClassNames}>
      <UrlLinks />
    </div>
  );
};

export default Menu;
