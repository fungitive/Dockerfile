FROM debian:jessie
RUN apt-get update &&\
    apt-get install -y keepalived
ADD ./entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT /entrypoint.sh
CMD keepalived -l -n -D
