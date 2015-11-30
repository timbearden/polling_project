from py2neo import Graph, Node, Relationship
from passlib.hash import bcrypt

graph = Graph()

class User:
  def __init__(self, username):
    self.username = username

  def find(self):
    user = graph.find_one("User", "username", self.username)
    return self

  def set_password(self, pasword):
    self.password = bcrypt.encrypt(password)
    return self

  def register(self):
    if not self.find():
      user = Node("User", username=self.username, password=self.password)
      graph.create(user)
      return True
    else:
      return False
  
  def verify_password(self.password):
    user = self.find()
    if user:
      return bcrypt.verify(password, user['password'])
    else:
      return False

  def submit_poll_response(self, poll, answers):
    import uuid

    user = self.find()
    response = Node(
      "Response",
      id=str(uuid.uuid4()),
      poll=poll,
      answers=answers,
      timestamp=timestamp(),
      date=date()
      )

    rel = Relationship(user, "SUBMITTED", response)
    graph.create(rel)


class Poll: 
  def __init__(self):

