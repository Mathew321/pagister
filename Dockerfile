FROM node:12 as build

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install
RUN npm run build

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
