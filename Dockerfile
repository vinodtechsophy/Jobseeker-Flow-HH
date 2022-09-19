FROM nginx:1.20.1-alpine
RUN mkdir -p /usr/share/nginx/html/webapp
COPY build/. /usr/share/nginx/html/webapp
RUN chown -R nginx:nginx /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
