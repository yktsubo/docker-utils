FROM centos:7
MAINTAINER "ytsuboi"

RUN yum update -y && yum clean all
RUN touch /etc/yum.repos.d/mongodb-org-3.6.repo
RUN echo '[mongodb-org-3.6]' >> /etc/yum.repos.d/mongodb-org-3.6.repo
RUN echo 'name=MongoDB Repository' >> /etc/yum.repos.d/mongodb-org-3.6.repo
RUN echo 'baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/3.6/x86_64/' >> /etc/yum.repos.d/mongodb-org-3.6.repo
RUN echo 'gpgcheck=1' >> /etc/yum.repos.d/mongodb-org-3.6.repo
RUN echo 'enabled=1' >> /etc/yum.repos.d/mongodb-org-3.6.repo
RUN echo 'gpgkey=https://www.mongodb.org/static/pgp/server-3.6.asc' >> /etc/yum.repos.d/mongodb-org-3.6.repo
RUN yum install -y mongodb-org && yum clean all

# Enable Mongodb
RUN systemctl enable mongod

# Start init daemon
CMD ["/sbin/init"]
