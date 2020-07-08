import React, { Fragment } from "react";
import Header from "./components/elements/Header";
import Home from "./components/Home";

import { GlobalStyle } from "./components/styles/GlobalStyle";

function App() {
  return (
    <Fragment>
      <Header />
      <Home />
      <GlobalStyle />
    </Fragment>
  );
}
export default App;
