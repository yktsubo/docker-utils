FROM ubuntu:16.04

RUN apt-get update && apt-get install -y software-properties-common 
RUN add-apt-repository ppa:dns-oarc/dnsperf
RUN apt-get update && apt-get install -y \
    iproute2 \
    net-tools \
    telnet \
    tcpdump \
    iputils-ping \
    iperf \
    python \
    wget \
    curl \
    dnsutils \
    netcat \
    dnsperf \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

# Start init daemon
WORKDIR /root
ENTRYPOINT ["/bin/sh", "-c", "while true; do echo hello world; sleep 60; done"]
