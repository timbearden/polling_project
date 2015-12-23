var NavBar = React.createClass({
  render: function() {
    return(
      <div className="navBar">
        This is the Nav Bar.
      </div>
    );
  }
});

ReactDOM.render(
  <NavBar />,
  document.getElementById('header_nav')
);
