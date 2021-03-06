FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

ENV PORT=8080

FROM nginx:alpine
COPY --from=node /app/dist/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
