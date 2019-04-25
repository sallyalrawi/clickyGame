import React from "react";
import Message from "../Message/Message";
import "./style.css";

// Component for the Navbar

function Nav(props) {
  return (
    <nav className="navbar">
      <ul>
        <li className="brand">
          <a href="/">Clicky Game</a>
        </li>
        <Message score={props.score} topScore={props.topScore} />
        <li>
          Score: {props.score} | Top Score: {props.topScore}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;