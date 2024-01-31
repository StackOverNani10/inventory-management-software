FROM node:alpine AS builder

WORKDIR '/app'

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM ngnix

CMD --from=builder /app/build /usr/share/ngnix