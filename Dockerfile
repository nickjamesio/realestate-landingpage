FROM node:8-alpine

RUN mkdir /app
RUN chown node:node /app

WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .

EXPOSE 8080

USER node
CMD ["npm", "run", "start"]
