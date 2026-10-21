引き継ぎ版の採点 (a842b7c)
===

- 対象 commit: `a842b7c303d4a3dd499c77f4d6ed7602d8604ebd` (master, 2026-10-21 公開版)
- 採点日: 2026-10-21 (移行作業の前に、本番 https://portfolio.hitoren.net/ を計測)
- 計測手段: Playwright (iPhone 13 エミュレーション / 1440px デスクトップ)、axe-core、Lighthouse (mobile)
- これは改善後の引き継ぎ版の採点であり、初期のオリジナル版の採点ではない

## 総合: 74 / 100

| 項目 | 点 | 根拠 |
| --- | --- | --- |
| デスクトップのデザイン | 8 / 10 | ヒーロー、カード、石積みギャラリー、Poppins の組版が一貫している。テンプレート (Colorlib) 由来だが破綻はない |
| モバイルのデザイン | 7.5 / 10 | 4 ページとも横スクロールなし (scrollWidth 390 = clientWidth)。ハンバーガーは 320px のドロワーで開き、Esc で閉じる。ドロワーの下半分が空白、Engineering は 1 列 20 枚のカードでとても長い |
| UX / ナビゲーション | 7.5 / 10 | 最初の Tab でスキップリンク、aria-current、パンくず。ライトボックスはクリック / キーボードで開き、→ で送り (2 of 56)、Esc で閉じ、フォーカスが元のタイルへ戻る。問題: `document.title` が全ページ同じで、SPA 遷移後も変わらない |
| アクセシビリティ | 7.5 / 10 | Lighthouse accessibility 94。axe: フッターのリンク色 #fc6060 / 白 = 3.0:1、Engineering のスキル見出し #8a8a94 = 3.41:1 (8 箇所)、著者カードの見出しが h2 → h5 に飛ぶ。alt、noopener、ランドマーク、prefers-reduced-motion は対応済み |
| 機能 | 8 / 10 | すべて動作する。`/engineering` などへの直接アクセスは SPA を表示するが HTTP ステータスは 404 (GitHub Pages の 404.html フォールバックの仕様)。Lighthouse は 404 のページを計測できず、ブラウザのコンソールにも 404 が出る |
| パフォーマンス | 6 / 10 | Lighthouse mobile (`/`): performance 66、FCP 4.3s、LCP 6.9s、CLS 0.002、TBT 0ms、合計 1,097 KiB。Google Fonts の CSS と 392KB の styles.css がレンダリングをブロック。hero2.jpg が 481KB。Engineering の画像 6 枚に width / height がない。ES5 用バンドルも配信している |

## 良い点

- 4 ページ、13 コンポーネントの構成が小さく、サービスやフォーム、HTTP を持たないので移行しやすい
- キーボード操作 (スキップリンク、メニュー、ライトボックスのフォーカス復帰) が本番で確認できる
- すべての画像に alt、外部リンクに `rel="noopener noreferrer"`、ランドマーク (header / nav / main / footer) がある
- master への push で GitHub Actions が lint / test / build のあと Pages へ公開する流れが動いている (deployment 7215910572 が success)
- 29 件のテストがコンポーネントごとにあり、マークアップの約束 (alt、aria、href) を固定している

## 問題点

- Node 12 (2022-04 サポート終了) と Angular 8.2 (サポート終了) で動いていて、本番依存の脆弱性に修正版がない
- title が全ページ同じ (SEO / タブの識別に不利)
- コントラスト不足 2 種と見出しレベルの飛び
- 直接アクセスが HTTP 404 になる
- 初期表示が遅い (LCP 6.9s)。巨大な styles.css と非圧縮の hero 画像が主因
- package.json に使っていない依存 (counterup、isotope-layout、jquery-waypoints、wowjs、jquery-countdown、jquery.easing、imagesloaded、popper.js、jarallax、classy-nav、@angular/animations、@angular/forms) が残っていた。これらは `src/assets/js/alime.bundle.js` に同梱の版が使われるか、まったく参照されていない

## 脆弱性 (変更前)

| 集計元 | 合計 | critical | high | medium / moderate | low |
| --- | --- | --- | --- | --- | --- |
| GitHub Dependabot (open) | 159 | 14 | 71 | 54 | 20 |
| うち runtime scope | 25 | 0 | 15 | 9 | 1 |
| npm 10 audit 全体 (lockfile v1) | 127 | 19 | 64 | 34 | 10 |
| npm 10 audit 本番のみ (`--omit=dev`) | 5 | 0 | 4 | 0 | 1 |

- 本番依存の 4 件は `@angular/common` / `compiler` / `core` / `router` 8.2.14 そのもの (i18n / SVG 属性の XSS、HttpTransferCache、SSR の DoS など)。8.x に修正版はなく、メジャー移行でしか解消できない
- 残り 1 件は `min-document` (low) で、経路は `jarallax > global > min-document`。jarallax は package.json にあるが未使用
- 開発依存の 134 件は Angular 8 のビルドチェーン (`@angular-devkit` 経由の node-forge / tar、karma、webpack-dev-server など) に集中している

## 移行後の確認 (Angular 22 / Node 24 ブランチ)

- 本番依存: `npm audit --omit=dev` は 0 件
- 開発依存: `npm audit` は 2 件 (high 1 / moderate 1) が残る
    - 経路: `@angular/build@22.2.3 > vite@8.3.x > launch-editor` (GHSA-698v-4r3x-3vcv、GHSA-r825-w8mm-5pxw、GHSA-587h-7wmj-h5pm)
    - 影響: `ng serve` の開発サーバーが Windows 上でエディタを開く機能に関するもの。本番バンドルには含まれず、CI と公開物にも影響しない
    - 理由: `@angular/build` の最新 22.2.3 がこの vite の範囲に依存していて、上流の修正待ち。`npm audit fix --force` は @angular/build を 22.1.9 へ下げる提案なので採用しない
- Dependabot の既存アラート 159 件は、Angular 8 のビルドチェーンを lockfile から取り除いたことで、次回のスキャンで閉じる見込み
