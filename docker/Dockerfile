FROM node:12.18.0

RUN apt-get update && apt-get install -y --no-install-recommends \
  mysql-client=5.5.9999+default \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY docker/entrypoint.sh /tmp/entrypoint.sh
RUN chmod +x /tmp/entrypoint.sh

ENTRYPOINT ["/tmp/entrypoint.sh"]

COPY docker/run.sh /tmp/run.sh
RUN chmod +x /tmp/run.sh

CMD ["/tmp/run.sh"]
