(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// var React = require('react');
// var ReactDOM = require('reactify');

var data = [{team1: "Golden State Warriors",
              team2: "Cleveland Cavaliers",
              winner: ""
            },
            { team1: "Los Angeles Lakers",
              team2: "Los Angeles Clippers",
              winner: ""
            }]

var SurveyBox = React.createClass({displayName: "SurveyBox",
  getInitialState: function() {
    return { data: data }
  },

  // loadSurveyQuestions: function() {
  //   this.setState({data: data})
  //     .bind(this);
  // },
  // componentDidMount: function() {
  //   this.loadSurveyQuestions();
  // },

  // handleSurveyResponse: function() {
  //
  // },

  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement(Survey, {data: this.state.data})
      )
    )
  }
});


var Survey = React.createClass({displayName: "Survey",
  // handleSubmit: function() {
  //
  // },

  render: function() {
    var games = this.props.data;
    var questionsArray = games.map(function(game, idx) {
      return (
        React.createElement(Question, {key:  idx, team1:  game.team1, team2:  game.team2})
        );
      })

    return (
      React.createElement("form", null, 
        questionsArray, 
        React.createElement("button", null, "Submit Picks")
      )

    );
  }
});

var Question = React.createClass({displayName: "Question",

  render: function() {
      return (
        React.createElement("div", null, 
          React.createElement("input", {type: "radio", name: this.props.team1, value: this.props.team1}, this.props.team1), 
           React.createElement("p", null, React.createElement("i", null, "vs")), 
           React.createElement("input", {type: "radio", name: this.props.team1, value: this.props.team2}, this.props.team2)
        )
      );
  }
});


React.render(
  React.createElement(SurveyBox, null),
  document.getElementById("poll")
);


},{}]},{},[1])