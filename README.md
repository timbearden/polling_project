# polling_project
Website for polling competitions 

Currently app.py runs the index page which loads all the build javascripts using index.html. I don't know enough about front end build systems to do this better. 

Index.html should also incorporate a navbar and all the general template components we would want to see on all pages. We will extend index.html into other html files to avoid repeating code.



The selection box is the first thing users will see. We need to design it to be dynamically rendering based on values pulled from the database. Eventually we'll want to add a feature that allows us to set the poll inputs manually/automatically using admin priveleges. 

We may want this to render alternative components upon submission, and we may not always want it contained in index.html. We'll have to see as we go. 

File structure:
  - Root Directory
    - app.py
    - static folder
      - javascript files
      - css files
    - templates folder
      - html files


Immediate next steps:
  - Create a graph database connection 
  - Use the neo4j connection to pass objects to the front end so as to render a few basic data points in the selection box.
  - Create a navbar component and style appropriately
  - Scrape the web (espn.com or nba.com) for remainder of the NBA schedule
  - Load the scraped data into neo4j
    - Requires mapping the NBA schedule graph
      - Nodes: 
        - Teams
          - Properties:
            - City
        - Games
      - Relationships:
        - Plays


Going to use these resources to make it happen:
  http://neo4j.com/blog/building-python-web-application-using-flask-neo4j/
  http://multithreaded.stitchfix.com/blog/2015/07/16/pyxley/ (for react integration and rendering of survey results in chart form)