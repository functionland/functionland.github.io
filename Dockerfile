FROM node:latest

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

COPY . .

RUN npm run build

FROM node:latest

WORKDIR /app
COPY --from=0 /app .
COPY . .

EXPOSE 3000
CMD ["node","./build"]
