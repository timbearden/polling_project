var React = require('react');
var ReactDOM = require('react-dom');


var elements = [
 {
  text: "Sign In",
  url: ""
 },
 {
  text: "Survey Categories",
  url: "",
  submenu: [
      {
      text: "Sports",
      url: ""
      },
      {
      text: "Politics",
      url: ""
      },
      {
      text: "Weather",
      url: ""
      }
  ]
 }
]

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
      {content}
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
  <NavBar elements=elements />,
  document.getElementById('header_nav')
);
