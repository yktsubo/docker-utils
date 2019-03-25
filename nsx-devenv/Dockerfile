FROM centos:7
MAINTAINER "yuki"

ENV OVFTOOL_FILENAME=VMware-ovftool-4.2.0-5965791-lin.x86_64.bundle

ADD $OVFTOOL_FILENAME /tmp/

WORKDIR /root

RUN yum update -y && yum clean all
RUN yum -y groupinstall "Development Tools"
RUN yum -y install which
RUN yum -y install epel-release
RUN yum -y install python-pip 
RUN yum -y install unar
RUN yum -y install ansible

RUN pip install pip --upgrade
RUN pip install requests
RUN pip install pyvmomi
RUN pip install bravado
RUN pip install tabulate

RUN curl https://packages.microsoft.com/config/rhel/7/prod.repo | tee /etc/yum.repos.d/microsoft.repo
RUN yum -y install powershell
RUN pwsh -command "& {Install-Module -Force VMware.PowerCLI}"

RUN /bin/sh /tmp/$OVFTOOL_FILENAME --console --required --eulas-agreed && \
    rm -f /tmp/$OVFTOOL_FILENAME

RUN mknod /dev/loop2 -m0660 b 7 2



# Start init daemon
CMD ["/sbin/init"]
