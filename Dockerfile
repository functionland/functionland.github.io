FROM keymetrics/pm2:latest-slim

WORKDIR /usr/src/app

RUN chown -R node:node /usr/src/app
COPY --chown=node ./dist /usr/src/app
COPY --chown=node ./ecosystem.config.js /usr/src/app
RUN npm install

USER node
ENV NODE_ENV production

EXPOSE 3000
CMD [ "ls /usr/src/app"]
CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]
