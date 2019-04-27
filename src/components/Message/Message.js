import React, { Component } from "react";
import "./style.css";

// NavMessage renders an li tag containing an message for the user

class Message extends Component {
    state = {
      message: "",
      animating: false
    };

componentDidUpdate ({ score, topScore }){

    const newState = {animating:true};

    if (score === 0 && topScore === 0){
        newState.message = "";
    }
    else if (score === 0 && topScore > 0){
        newState.message = "incorrect";
    }
    else {
        newState.message = "correct";
      }
      if (score !== this.props.score || this.state.message !== newState.message) {
        this.setState(newState);
      }
    }
      renderMessage = () => {
          switch (this.state.message){
              case "correct":
               return "You Gussed Correctly!";
              case "incorrect":
               return "You Gussed Incorrectly!";
              default:
               return "Click An Image To Begin!"; 
          }
      };

      render() {
        return (
          <li
            className={this.state.animating ? this.state.message : ""}
            onAnimationEnd={() => this.setState({ animating: false })}
          >
            {this.renderMessage()}
          </li>
        );
      }
    }

    export default Message;