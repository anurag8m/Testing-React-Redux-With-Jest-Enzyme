import React from "react";
import "./App.css";
import Header from "./component/header/index";
import Headline from "./component/headline";

const tempArr = [
  {
    fName: "Anurag",
    lName: "Mishra",
    email: "anurag8m@gmail.com",
    age: 26,
    status: true
  }
];

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <section className="main">
        <Headline
          header="Posts"
          desc="Click the button to render posts"
          tempArr={tempArr}
        />
      </section>
    </div>
  );
}

export default App;
