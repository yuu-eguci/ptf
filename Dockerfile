# Angular 8 の build と test を動かすための開発用イメージです。
FROM node:12-bullseye

# bullseye はサポートが終わり archive.debian.org へ移ったため、取得先を切り替えます。
RUN echo "deb http://archive.debian.org/debian bullseye main" > /etc/apt/sources.list \
    && echo "deb http://archive.debian.org/debian-security bullseye-security main" >> /etc/apt/sources.list \
    && apt-get update \
    && apt-get install -y --no-install-recommends chromium \
    && rm -rf /var/lib/apt/lists/*

ENV CHROME_BIN=/usr/bin/chromium

WORKDIR /app
