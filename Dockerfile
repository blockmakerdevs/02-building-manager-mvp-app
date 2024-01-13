# pull base image
FROM node:16.20.2-buster-slim
# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# default to port 19006 for node, and 19001 and 19002 (tests) for debug
ARG PORT=19006
ENV PORT $PORT
EXPOSE $PORT 19001 19002

# install global packages
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH /home/node/.npm-global/bin:$PATH
RUN npm i --unsafe-perm -g yarn
RUN yarn global add expo-cli@latest

# switch to 'node' user
USER node

# create application directory
RUN mkdir /home/node/app
WORKDIR /home/node/app

# install application dependencies
COPY --chown=node:node ./package.json ./
COPY --chown=node:node ./yarn.lock ./
RUN yarn install || cat /root/.npm/_logs/*-debug.log

# copy in our source code
COPY --chown=node:node . .

CMD ["npm", "run", "web"]