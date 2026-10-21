Ptf
===

Yuu Eguci の[ポートフォリオサイト](https://portfolio.hitoren.net/) のソース。
Angular の SPA を GitHub Pages で公開。

- Docker: 対応!
- Node.js: 12!
- Angular: 8.2!
- Linter: TSLint!
- Test: Karma + Jasmine (Chromium headless)!

Node.js 12 と Angular 8 はサポート終了済み。 `npm audit` で依存の脆弱性が報告される。

## パッと実行してみたい

```bash
# 開発用イメージ (Node 12 + Chromium) を作る
docker build -t ptf-dev .

# 依存を入れる
docker run --rm -v "$PWD":/app ptf-dev npm ci

# ローカルで開く (http://localhost:4200/)
docker run --rm -it -p 4200:4200 -v "$PWD":/app ptf-dev npx ng serve --host 0.0.0.0

# テストと lint
docker run --rm -v "$PWD":/app ptf-dev npm run test:ci
docker run --rm -v "$PWD":/app ptf-dev npm run lint

# 本番 build (dist/ptf に出力)
docker run --rm -v "$PWD":/app ptf-dev npx ng build --prod
```

## ページ構成

| URL | 内容 |
| --- | --- |
| `/` | トップ。各ページへのカードと作者情報 |
| `/engineering` | スキル、開発の進め方、プロジェクト一覧 |
| `/artworks` | イラストや制作物のギャラリー |
| `/journey` | 野宿旅の写真ギャラリー |

## 公開の流れ

- master への push で、 GitHub Actions (`.github/workflows/ci.yml`) が lint 、 test 、本番 build のあと GitHub Pages へ公開。
- Actions 画面の `Run workflow` (workflow_dispatch) からも公開できる。
- build 後に `index.html` を `404.html` にもコピー。 `/engineering` などへの直接アクセスにも対応。
- カスタムドメイン `portfolio.hitoren.net` は GitHub Pages の設定側で持つ。

## CI

- GitHub Actions (`.github/workflows/ci.yml`) で push と PR ごとに lint 、 test 、本番 build を実行。公開は master への push と手動実行のときだけ。
