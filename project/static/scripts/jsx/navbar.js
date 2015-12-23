var React = require('react');
var ReactDOM = require('react-dom');

var data = {game1: {team1: "Golden State Warriors",
                    team2: "Los Angeles Clippers",
                    winner: ""}
                }

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
