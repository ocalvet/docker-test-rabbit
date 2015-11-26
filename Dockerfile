FROM node:5.1.0

MAINTAINER Ovidio Calvet <ovidio@scoutlit.com>

RUN npm install -g sails grunt-cli

RUN mkdir /src

WORKDIR /src

EXPOSE 1337

CMD ["sails","lift"]
