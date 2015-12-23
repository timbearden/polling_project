var React = require('react');
var ReactDOM = require('react-dom');

// Dummy data to see if we can get shit populating.
// To be replaced by an ajax call hitting the surveys API and receiving the results of a Cypher query run by Flask
var data = {game1: {team1: "Golden State Warriors",
                    team2: "Los Angeles Clippers",
                    winner: ""}
                }

// Container element for the actual survey..
var SurveyBox = React.createClass({
  getInitialState: function() {
    return { data: [] };
  },
  loadSurveyQuestions: function() {
    this.setState({data: data})
      .bind(this);
  },
  componentDidMount: function() {
    this.loadSurveyQuestions();
  },

  handleSurveyResponse: function() {

  },

  render: function() {
    return (
      <div>
        <Survey data=data/>
      </div>
    )
  }
});

// container for the question list.. rename to 'QuestionList'?
var Survey = React.createClass({
  handleSubmit: function() {

  },

  render: function() {
    var gamesArray = this.props.data.map(function {
      return (
        <Question team1={this.team1} team2={this.team2} />
      );
    });

    return (
      <form>
        gamesArray
        <button>Submit Picks</button>
      </form>

    );
  }
});

// Most atomic component in the group.
var Question = React.createClass({

  render: function() {
      return (
        <div>
          <input type="option" value={this.props.team1} /> <i>vs</i> <input type="option" value={this.props.team2} />
        </div>
      )
  }
});


ReactDOM.render(<SurveyBox />, window.getElementById("poll"));
