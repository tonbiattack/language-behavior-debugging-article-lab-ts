# Language Behavior Debugging Article Lab

文章の中にある「読者の次の行動を変える信号」を、原稿と診断パネルを同期させながら観察するTypeScript/React製のフロントエンド・ラボです。

## Design direction

The interface follows an **Editorial Instrument** direction: warm paper, ink-black hierarchy, mono metadata, and proofreading red for active signals. The manuscript remains the primary surface; diagnostics stay adjacent as an explanation layer rather than a generic dashboard.

## Included interactions

原稿の行を選択すると関連する診断へ移動し、Findings／Outline切替、Tone／Signal／Promiseフィルター、選択インサイト、分析実行状態を画面内で体験できます。外部APIやデータベースは使わず、静的フロントエンドとして動作します。

## Development

```bash
pnpm install
pnpm dev
pnpm check
pnpm build
```

## Project structure

```text
client/src/pages/Home.tsx       # manuscript-first lab UI
client/src/index.css            # Editorial Instrument design system
client/src/lib/                 # behavior-selection logic and tests
ideas.md                        # design direction and implementation decisions
```

## Article companion

このリポジトリは、Qiita下書き「Reactの診断フィルターで選択中の項目が画面外に残るバグを、状態の不変条件から直す」の再現プロジェクトです。記事では、表示中の集合と選択中IDの不変条件、失敗するテスト、最小修正、回帰テストを順に扱います。
