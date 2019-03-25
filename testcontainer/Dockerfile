FROM centos:7
MAINTAINER "yuki"


RUN yum update -y && yum clean all
RUN yum install -y epel-release
RUN yum install -y iperf iproute tcpdump && yum clean all

# Start init daemon
CMD ["/sbin/init"]
