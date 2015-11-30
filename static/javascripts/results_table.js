var ResultsTable = React.createClass({
  render: function() {
    return(
      <div className="resultsTable">
        This is the results table.
      </div>
    );
  }
});

ReactDOM.render(
  <ResultsTable />,
  document.getElementById('results-table')
);