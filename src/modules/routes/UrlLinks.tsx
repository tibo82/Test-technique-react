import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { getRoutes } from "./getRoutes";

const UrlLinks = () => {
  const handleClick: React.MouseEventHandler<Element> = (e) => {
    const target = e.target as HTMLInputElement;

    console.log(target);
  };
  const linkComponents = getRoutes.map(({ path, name, component }, key) =>
    name ? (
      <li key={key}>
        <a href={path} onClick={handleClick}>
          {name}
        </a>
      </li>
    ) : null
  );

  return (
    <Router>
      <div>
        <ul>{linkComponents}</ul>
      </div>
    </Router>
  );
};

export default UrlLinks;
