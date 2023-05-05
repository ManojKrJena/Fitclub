import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero.jsx";
import Program from "./components/Hero/Programs/Program";
import Reason from "./components/Hero/Reasons/Reason";
import Join from "./components/Join/Join";
import Plans from "./components/Plans/Plans";
import Testimonials from "./components/Testimonials/Testimonials";

const App = () => {
  return (
    <div className="App">
      <Hero />
      <Program></Program>
      <Reason />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
};

export default App;
