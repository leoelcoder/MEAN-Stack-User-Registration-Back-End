FROM node:14

WORKDIR /usr/src/app

COPY ../Project/package*.json ./

RUN npm install --production

COPY ../Project .

EXPOSE 3000

CMD ["npm", "start"]
