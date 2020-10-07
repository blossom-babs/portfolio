import React, { useState } from "react";
import "./styles/app.scss";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Vanillaprojects from "./components/Vanillaprojects";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState(true);

  function state(e) {
    setTheme(!e);
  }

  const darkTheme = {
    backgroundColor: `#1E202B`,
    color: `#fff`,
    backgroundImage: `url("https://www.transparenttextures.com/patterns/asfalt-light.png")`,
  };

  const lightTheme = {
    backgroundColor: `#fff`,
    color: `#262936`,
    backgroundImage: `url("https://www.transparenttextures.com/patterns/asfalt-dark.png")`,
  };

  const lightColor = {
    color: "#fff",
  };

  const darkColor = {
    color: "#262936",
  };

  return (
    <div style={theme ? darkTheme : lightTheme}>
      <Nav getState={state} />
      <Header />
      <Vanillaprojects />
      <div style={theme ? lightTheme : darkTheme}>
        <Footer linkStyle={theme ? darkColor : lightColor} />
      </div>
    </div>
  );
}

export default App;
