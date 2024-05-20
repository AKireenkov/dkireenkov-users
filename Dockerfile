FROM node:lts-slim

WORKDIR /app

COPY *.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["sh", "-c", "npm run start:prod"]