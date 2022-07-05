FROM nginx
MAINTAINER wuyuexin
COPY default.conf /etc/nginx/conf.d/
COPY dist/  /usr/share/nginx/html/
RUN echo 'echo init ok!!'
