FROM node:current-slim

WORKDIR /usr/src/app

COPY package.json .
COPY tsconfig.json .
COPY nodemon.json .

RUN yarn install

EXPOSE 3005

COPY . .


CMD [ "yarn", "build"]