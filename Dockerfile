# Angular 22 の build / test / lint を動かすための開発用イメージです。
# テストは Vitest + jsdom で動くので、ブラウザは不要です。
FROM node:24-bookworm-slim

WORKDIR /app
