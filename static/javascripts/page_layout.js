var PageLayout = React.createClass({
  render: function() {
    return(
      <div className="pageLayout">
        <h1>Overall Page Layout</h1>
        <SelectionBox />
        <ResultsTable />
      </div>
    );
  }
});

ReactDOM.render(
<PageLayout />,
document.getElementById('content')
);