import "./index.scss";
import React from "react";
import IconSmiley from "../../assets/IconSmiley";
import IconGoBack from "../../assets/GoBack";
import PageWrapper from "../PageWrapper";

declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    custom?: string;
  }
}
const NotFoundPage = () => (
  <PageWrapper>
    <div className="Page404">
      <div className="Text">
        <h2>404 - NotFound</h2>
        <h3>
          Ouuups sorry we couldn't find the requested page. Please choose one of these options:
          <ul>
            <li>Enter a valid url path</li>
            <li>Choose a link in the header menu</li>
            <li>Clik on the link below to go back to homePage</li>
          </ul>
        </h3>
      </div>
      <IconSmiley />
    </div>
    <div className="IconGoBack">
      <a href="/">
        <IconGoBack />
      </a>
    </div>
  </PageWrapper>
);

export default NotFoundPage;
