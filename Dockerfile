FROM node:5.1.0

MAINTAINER Ovidio Calvet <ovidio@scoutlit.com>

RUN mkdir /src

WORKDIR /src

EXPOSE 8082

CMD ["node","index.js"]
