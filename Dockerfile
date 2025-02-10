# Pull base image.
FROM node:14-alpine

# Upgrade npm
RUN npm i npm@6.14.18 -g
ENV NO_UPDATE_NOTIFIER 1

# Create app directory
ENV APPDIR /app
RUN mkdir -p $APPDIR
WORKDIR $APPDIR

# Install git
RUN apk add -U --no-cache git

# Clone the open-easyrtc repo
RUN git clone https://github.com/open-easyrtc/open-easyrtc.git
WORKDIR $APPDIR/open-easyrtc

RUN npm install

WORKDIR $APPDIR/open-easyrtc/server_example

RUN npm install --no-bin-links

VOLUME $APPDIR/open-easyrtc/demos

EXPOSE 8080

CMD ["node","/app/open-easyrtc/server_example/server.js"]
