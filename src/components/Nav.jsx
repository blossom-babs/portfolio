import React, { useState } from "react";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import Brightness3Icon from "@material-ui/icons/Brightness3";

function Nav({ getState }) {
  const [toggle, setToggle] = useState(true);

  function handleClick() {
    setToggle(!toggle);
    getState(toggle);
  }
  return (
    <nav className="nav">
      <div
        style={{ color: toggle ? "#fff" : "#262936" }}
        onClick={handleClick}
        className="nav__icon"
      >
        {toggle ? <Brightness5Icon /> : <Brightness3Icon />}
      </div>
      <div>
        <input
          className="nav__search-bar"
          type="text"
          placeholder="Search..."
        />
      </div>
    </nav>
  );
}

export default Nav;
