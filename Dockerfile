FROM node:12-alpine3.14
WORKDIR /app
COPY package.json /app
RUN npm install && npm cache clean --force
COPY . /app

CMD npm run test

EXPOSE 8080
