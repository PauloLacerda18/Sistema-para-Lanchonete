FROM node:22.2.0-alpine

COPY . /app

WORKDIR /app

RUN npm install

CMD ["echo", "teste"]