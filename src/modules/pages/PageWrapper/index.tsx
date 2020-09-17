import "./index.scss";
import React from "react";
import classnames from "classnames";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const PageWrapper = ({ className, children }: Props): JSX.Element => {
  const pageClassNames = classnames("Page", className);

  return <div className={pageClassNames}>{children}</div>;
};

export default PageWrapper;
