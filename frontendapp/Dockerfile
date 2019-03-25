FROM centos:7
MAINTAINER "yuki"

RUN yum update -y && yum clean all
RUN touch /etc/yum.repos.d/nginx.repo
RUN echo '[nginx]' >> /etc/yum.repos.d/nginx.repo
RUN echo 'name=nginx repo' >> /etc/yum.repos.d/nginx.repo
RUN echo 'baseurl=http://nginx.org/packages/centos/$releasever/$basearch/' >> /etc/yum.repos.d/nginx.repo
RUN echo 'gpgcheck=0' >> /etc/yum.repos.d/nginx.repo
RUN echo 'enabled=1' >> /etc/yum.repos.d/nginx.repo
RUN yum install -y nginx && yum clean all

RUN mkdir /var/www/
COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY ./frontend/build/ /var/www/frontend

# Enable nginx
RUN systemctl enable nginx

# Start init daemon
CMD ["/sbin/init"]
