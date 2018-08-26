FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf
#COPY static-html-directory /usr/share/nginx/html
EXPOSE 80
#sed -i 's/user nginx/user www-data/' /etc/nginx/nginx.conf #修改nginx用户，使之匹配php-fpm
CMD ["nginx", "-g", "daemon off;"]
