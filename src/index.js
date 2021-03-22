import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const name = "Laurie Lim Sam";
const first_page = 2018;

const Demo = () => {
  return (
    <div>
      <h1>Hello, I'm {name}.</h1>
      <p>
        I have {2021 - first_page} years of experience in building webpages.
      </p>
      <App />
    </div>
  );
};

ReactDOM.render(<Demo />, document.getElementById("root"));
