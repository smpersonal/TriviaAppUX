// import React from "react";
// Changed above line to below to access 'Component'
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

// dependencies
import axios from "axios";

//css and images
import "./css/normalize.css";
import "./css/skeleton.css";
import "./css/index.css";
import "./custom.scss";
import "./css/custom.css";
import logo from "./logo.svg";
import "./App.css";

// set baseURL
let baseURL = process.env.REACT_APP_BASEURL;
if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
} else {
  baseURL = "https://fathomless-sierra-68956.herokuapp.com";
}

// changed App function to class instead
class App extends Component {
  // states

  // quizInPlay=0, isSetupDone=0, currentScore=0, questionCounter=0, numQuestions=0, difficultyLevel="", quizType="" (boolean, multiple), validUser=0, startGame=0
  constructor(props) {
    super(props);
    this.state = {
      quizInPlay: 0,
      isSetupDone: 0,
      currentScore: 0,
      questionCounter: 0,
      numQuestions: 0,
      difficultyLevel: "",
      quizType: "",
      validUser: 0,
      startGame: 1,
      gamesPlayed: 0,
      questionsArray: []
    };
  }

  addQuestionsToArray(response) {
    response.array.forEach(element => {});
  }

  // render
  render() {
    return (
      <div className="App">
        {/* Don't code above this */}
        {/*  */}
        {/*  */}
        {/* Header  + Login/Signup */}

        <Row>
          {/* <div className="quizrow"> */}
          {/* Header */}
          <Col lg={8} md={8} sm={8} xs={12}>
            <div className="tr_header">
              <span className="tr_header_span">TRIVIA APP HEADER</span>
            </div>
          </Col>
          <Col lg={4} md={4} sm={4} xs={12}>
            {/* Login / Signup */}
            <div className="tr_header">Login/Signup here </div>
            {/* {validUser===0? <LoginSignUpPrompt /> : <HelloUser> } */}
          </Col>
        </Row>
        {/*  */}
        {/*  */}

        {/* Quiz + Leaderboard */}
        <Row>
          {/* Quiz */}
          <Col lg={8} md={8} sm={8} xs={12}>
            Quiz components here
            {this.state.quizInPlay === 0 &&
              this.state.isSetupDone === 0 &&
              this.state.startGame === 0 && <div> "QuizStart" </div>}
            {/*  */}
            {this.state.quizInPlay === 0 &&
              this.state.isSetupDone === 0 &&
              this.state.startGame === 1 && <div>"Quiz Setup"</div>}
            {/*  */}
            {this.state.isSetupDone === 1 &&
              this.state.quizInPlay === 1 &&
              this.state.questionCounter < this.state.numQuestions && (
                <div>
                  <div>"Quiz New Game Button"</div>
                  <div>"Session Score" </div>
                  <div> "Quiz QA" </div>
                </div>
              )}
            {/*  */}
            {this.state.questionCounter === this.state.numQuestions &&
              this.state.gamesPlayed > 0 && <div>"EOQ" </div>}
            {/*  */}
          </Col>

          {/* Leaderboard */}
          <Col lg={4} md={4} sm={4} xs={12}>
            Leaderboard
          </Col>
        </Row>
        {/* Don't code below this */}
      </div>
    );
  }
}

export default App;
