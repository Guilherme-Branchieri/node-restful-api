FROM node:alpine

WORKDIR /usr/api-rest

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]