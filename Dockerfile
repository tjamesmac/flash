# Using this version because some of my deps can't handle -v 15 yet
FROM node:13-alpine

ENV port=3006

# working directoy of the app
WORKDIR /usr/src/app
# copies package json to ^
COPY package.json .
# removed node_modules from .dockerignore to speed this part up
RUN yarn install
# port that i want to work off of
EXPOSE ${port}
# copy only the code files
COPY src /usr/src/app/src


CMD [ "yarn", "docker-build"]