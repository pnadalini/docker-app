# docker-app
An app made with docker-compose with flask, redis and nginx containers

This is the diagram of what this repository will be able to start when you run the docker-compose using the command
    
    docker-compose up

![Containers Diagram](diagram.png?raw=true "Diagram")

In this repository you will find the following structure
```bash
├── app
│   ├── ** // flask app that connects with redis to save the name you put on the param
│   └── Dockerfile
├── static/
│   ├── ** // static website from the repo https://github.com/pnadalini/HTML5_Test.git
│   └── Dockerfile
├── docker-compose.yml
├── Dockerfile
└── nginx.conf
```

The docker-compose file will start the flask app and the static app with their Dockerfiles that you can run individually, after that, it will start a reverse proxy with the configuration from `nginx.conf`. It will make the traffic from localhost/app/ go to the flask app and traffic from localhost/static/ go to the static app, like the diagram.
