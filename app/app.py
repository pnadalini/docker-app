from flask import Flask, request
import os
import redis

app = Flask(__name__)

r = redis.Redis()

redis_host = os.environ.get('REDIS_HOST')
redis_port = os.environ.get('REDIS_PORT')

r = redis.Redis(host=redis_host, port=redis_port, decode_responses=True)

@app.route("/")
def landing():

  if request.args.get("name"):
    r.set('key', request.args.get("name"))

  name = r.get('key')
  message = "You can save a new name with a param like ?name=your_name"

  if name:
    return "Your name is: " + str(name) + "<br />" + message
  else:
    return message

if __name__ == "__main__":
  app.run(host='0.0.0.0')
