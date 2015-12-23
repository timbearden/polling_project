# polling_project
Website for polling competitions

- Commands to build:
  - cd into root directory
  - pip install -r requirements.txt
  - npm install
  - bower install
  - sh run.sh
  - gulp
- You will now have:
  - a python server running the Flask app (python projects/app.py is the command from run.sh)
  - gulp running default tasks and watching for updates
- open up localhost:5000 in browser and you will see the compiled javascript rendering a (currently) inert survey form.


Index.html should also incorporate a navbar and all the general template components we would want to see on all pages. Going to need to do more research to control where components get rendered (react router is the dependency that should handle this). Currently this component is hard coded into main.js from the jsx folder in the static/scripts directory. From there it is automatically compiled into vanilla javascript in the statics/scripts/js folder.

The selection box is the first thing users will see. We need to design it to be dynamically rendering based on values pulled from the database. These surveys will lend themselves to the graph designs in the neo4j database.
  - I want to be able to reuse this component for surveys with different response types, so it’s really highlighting how the nodes will behave in order to facilitate this kind of versatility in the component.
  - Example: we will choose a form based on some various factors (surveys we have prepared with available data, user    selection, genre, date/time/location etc)
  - How questions are rendered will depend on properties on the linking survey node.
    - These properties will determine which kinds of props are passed to the child react components within the greater survey component.
    - Rendered question nodes will be ignorant of the way they are rendered. They’ll simply possess properties pertaining to the data they need (team1, team2) that will be used differently depending on the type of survey that calls them and gives them to the corresponding DOM elements as html props.


File structure:
  - Root Directory
    - project
      - static
        - scripts
        - styles
      - templates

Back-end:
  - py2neo imported in models.py and app.py files.
    - models will use to define methods on nodes that are brought into memory from the db
    - app.py used
  - data
    - found and saved a csv of the nba schedule data. It's saved in the data folder in the root directory. We will use it to load all nodes, relationships, and properties into the db.

Immediate next steps:

  - finish up all model requirements and load NBA schedule data into neo4j
  - Set up an end point in the Flask routes to use the neo4j connection for running cypher queries and passing data back to the ajax calls received from the front end.
    - replace dummy data in the SurveyBox component with data from the neo4j
  - Better figure out build behavior so as to avoid hard-coding SurveyBox into main.js
    - is react router the correct tool?
  - Create a navbar component and style appropriately
    - Read into inline styling
    - Styling issue: radio inputs are very difficult to style, which is why the survey questions look so lame. Tried importing a module to style them but looks like it has a deprecated dependency or something that could be a little too high maintenance to worry about right now. Open to all solutions here. The node module is called 'react-radio'.



A few resources:
  http://neo4j.com/blog/building-python-web-application-using-flask-neo4j/
  http://multithreaded.stitchfix.com/blog/2015/07/16/pyxley/ (for react integration and rendering of survey results in chart form)
