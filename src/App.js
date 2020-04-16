import React from "react";
import "./App.css";
import Header from "./component/header/index";
import Headline from "./component/headline";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <section className="main">
        <Headline header="Posts" desc="Click the button to render posts" />
      </section>
    </div>
  );
}

export default App;
