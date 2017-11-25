FROM nginx

COPY ray-grant-web-c/dist /usr/share/nginx/html

expose 80