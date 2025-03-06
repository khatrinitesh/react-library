import { useState } from "react";
import { AnimateOnChange } from "react-animation";
import "./App.css";

function App() {

  return (
    <>
      <section className="sectionContent">
        <AnimateOnChange>Awesome</AnimateOnChange>
      </section>
      <section className="sectionContent">
        <AnimateOnChange durationOut="2000">👌</AnimateOnChange>
      </section>
      <section className="sectionContent">
        <AnimateOnChange
          animationIn="bounceIn"
          animationOut="bounceOut"
          durationOut={500}
        >
          Handy
        </AnimateOnChange>
      </section>
    </>
  );
}

export default App;
