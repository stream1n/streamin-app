FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY --from=node /app/dist/streamin-app /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
