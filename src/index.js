import React from "react";

import { render } from "react-dom";

import App from "./App";

window.MyApp = function MyApp(divId) {
  const target = document.querySelector(divId);
  return render(<App />, target);
};
