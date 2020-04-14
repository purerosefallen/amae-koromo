FROM node:buster-slim
RUN apt update && apt -y install cron && rm -rf /var/lib/apt/lists/*
WORKDIR /usr/src/app
COPY ./package*.json ./
RUN npm ci
COPY . ./

RUN echo '0 * * * * bash -c "cd /usr/src/app && npm run build"' > /etc/cron.d/paipu-cron && \
    crontab /etc/cron.d/paipu-cron

ENTRYPOINT [ "bash" ]
CMD npm run build && cron -f 
