var SelectionBox = React.createClass({
  render: function() {
    return(
      <div className="selectionBox">
        This is the selection box.
      </div>
    );
  }
});

ReactDOM.render(
  <SelectionBox />,
  document.getElementById('selection-box')
);