var React = require('react');

var data = [{team1: "Golden State Warriors",
              team2: "Cleveland Cavaliers",
              winner: ""
            },
            { team1: "Los Angeles Lakers",
              team2: "Los Angeles Clippers",
              winner: ""
            }]

var SurveyBox = React.createClass({
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
      <div>
        <Survey data={this.state.data}/>
      </div>
    )
  }
});


var Survey = React.createClass({
  // handleSubmit: function() {
  //
  // },

  render: function() {
    var games = this.props.data;
    var questionsArray = games.map(function(game, idx) {
      return (
        <Question key={ idx } team1={ game.team1 } team2={ game.team2 } />
        );
      })

    return (
      <form>
        {questionsArray}
        <button>Submit Picks</button>
      </form>

    );
  }
});

var Question = React.createClass({

  render: function() {
      return (
        <div>
          <input type="radio" name={this.props.team1} value={this.props.team1}>{this.props.team1}</input>
           <p><i>vs</i></p>
           <input type="radio" name={this.props.team1} value={this.props.team2}>{this.props.team2}</input>
        </div>
      );
  }
});

var elements = [{text: "Sign In",
  url: ""},
 {text: "Categories",
  url: "",
  submenu: [{text: "Sports",
      url: ""},
      {text: "Politics",
      url: ""},
      {text: "Weather",
      url: ""}]}]

var NavBar = React.createClass({
  generateElement: function(element) {
    return <NavBarElement text={element.text} url={element.url} submenu={element.submenu} />
  },

  render: function() {
    var NavBarElementArray = this.props.elements.map(this.generateElement);
    return(
      <ul className="menu">
        {NavBarElementArray}
      </ul>
    );
  }
})

var NavBarElement = React.createClass({
  generateLink: function() {
    return <NavBarLink link={this.props.url} text={this.props.text} />;
  },

  generateContent: function() {
    var content = [this.generateLink()];
    if(this.props.submenu){
      content.push(this.generateSubmenu());
    }
    return content;
  },

  generateSubmenu: function() {
    return <NavBar elements={this.props.submenu} />
  },

  render: function() {
    var content = this.generateContent();
    return(
      <li>{content}</li>
    );
  }
})

var NavBarLink = React.createClass({
  render: function() {
    return(
      <a href={this.props.url}>{this.props.text}</a>
    )
  }
})


React.render(
  <NavBar elements={elements} />,
  document.getElementById('header_nav')
);
React.render(<SurveyBox />, document.getElementById("poll"));
