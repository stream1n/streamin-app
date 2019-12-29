FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
RUN npm install @angular/cli -g

ENV PORT=8080

FROM nginx:latest
COPY --from=node /app/dist/streamin-app/ /usr/share/nginx/html/
CMD ng serve --host 0.0.0.0 --port $PORT
