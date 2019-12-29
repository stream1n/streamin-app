FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

ENV PORT=8080

FROM nginx:latest
COPY --from=node /app/dist/streamin-app/* /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
