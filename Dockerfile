FROM nginx

COPY ray-grant-web-c/dist /usr/share/nginx/html

RUN npm install

expose 80

CMD ["node server.js"]
