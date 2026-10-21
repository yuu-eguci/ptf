引き継ぎ版の採点 (a842b7c)
===

- 対象 commit: `a842b7c303d4a3dd499c77f4d6ed7602d8604ebd` (master, 2026-10-21 公開版)
- 採点日: 2026-10-21 (移行作業の前に、[本番サイト](https://portfolio.hitoren.net/) を計測)
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

- `npm audit` は本番依存 (`--omit=dev`) も全体も 0 件
- 移行直後は開発依存に 2 件 (vite 8.3.0 経由の launch-editor: GHSA-698v-4r3x-3vcv、GHSA-r825-w8mm-5pxw、GHSA-587h-7wmj-h5pm) が残っていた
    - 経路: `@angular/build@22.2.3 > vite@8.3.0`。vite は launch-editor を同梱していて、修正版は vite 8.3.3 以上
    - `@angular/build` 22.2.3 が vite 8.3.0 を固定しているため、package.json の `overrides` で `@angular/build` 配下の vite だけを 8.3.4 (同じ 8.3 系の最新) に揃えた
    - 影響範囲は `ng serve` の開発サーバーが Windows 上でエディタを開く機能で、本番バンドルには含まれない。override 後も build の出力は同一 (ファイル名のハッシュが一致)
    - `@angular/build` が vite 8.3.3 以上に更新されたら、この override は外せる
- 公開後の確認で、Dependabot の open アラートは 159 件から 0 件になった

## 公式の確認先

- [Angular のサポート方針](https://angular.dev/reference/releases)
- [Angular・Node.js・TypeScript の互換表](https://angular.dev/reference/versions)
- [Node.js のリリース一覧](https://nodejs.org/en/about/previous-releases)
- [Angular のビルドシステム移行](https://angular.dev/tools/cli/build-system-migration)

## 公開と検証

[PR #88](https://github.com/yuu-eguci/ptf/pull/88) を squash merge し、`1b2f158` で移行を公開済み。
[公開 CI](https://github.com/yuu-eguci/ptf/actions/runs/39542196452) は build・deploy とも成功。
公開後の PC・モバイルで、4 ページ、メニュー、ライトボックス、キーボード操作を確認した。
本番の HTML と各バンドルは公開 artifact と一致した。
既存のコントラスト不足・見出し構造・直接アクセス時の HTTP 404 は、この移行の対象外として残る。
