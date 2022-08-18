FROM nginx:stable-alpine
COPY dist/ /usr/share/nginx/html/xiabook-client
#这里改成将nginx配置模板复制过去
COPY nginx.template /etc/nginx/conf.d
EXPOSE 9000
WORKDIR /etc/nginx/conf.d
#添加环境变量的写入
ENTRYPOINT envsubst '$XIABOOK_SERVER_HOST $XIABOOK_SERVER_PORT' < nginx.template > default.conf && cat default.conf && nginx -g 'daemon off;'