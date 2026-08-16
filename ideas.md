# Language Behavior Debugging Article Lab — Design Direction

## Three Directions

### Theme Name: Editorial Instrument
Very Brief Intro: 編集者の机と開発者のデバッグコンソールを掛け合わせた、紙面感のある分析ツール。読む・疑う・直すの流れを静かに支える。
Probability: 0.07

### Theme Name: Signal Garden
Very Brief Intro: 言葉を信号として扱い、色の粒子と柔らかな空間で挙動を探索するインタラクティブなラボ。直感的で少し詩的。
Probability: 0.03

### Theme Name: Command Ledger
Very Brief Intro: 研究ノートとCLIの緊張感を合わせた、暗色の操作パネル中心の設計。高密度な情報を素早く扱う専門家向け。
Probability: 0.08

## Chosen Direction: Editorial Instrument

### Design Movement
Neo-editorial software: 1970年代の技術誌・校正紙の構造を、現代の高密度な分析UIに翻訳する。

### Core Principles
- 文章を主役にし、分析結果は本文から視線が自然に流れる位置に置く。
- 罫線・赤鉛筆・欄外注記を、装飾ではなく状態伝達に使う。
- 左右非対称のワークスペースで「原稿」と「診断」を明確に分ける。
- 色数を絞り、判断に必要な差分だけを暖色で強調する。

### Color Philosophy
黒に近いインク色を基調に、紙のような温白色と、校正用の朱色を組み合わせる。朱色は警告だけでなく「次に読む場所」を示す能動的なアクセント。薄い青灰色は機械的なメタデータに使い、本文の人間味と対比させる。Signature brand color: `#E85B42`。

### Layout Paradigm
左に固定された細いインデックスレール、中央に大きな原稿キャンバス、右に折りたたみ可能な診断レールを置く。カードを均等に並べず、新聞の欄外・段組み・余白を使って情報の優先順位を表現する。

### Signature Elements
- 朱色の校正マーカーと、本文に重なるインラインの指摘ピル。
- 大きな章番号と、細いモノスペースの状態ラベル。
- 罫線のリズム、紙の粒子、ページ上端の小さなランニングヘッド。

### Interaction Philosophy
操作は「編集者の手つき」のように即時で、選択すると本文と診断が同時に同期する。クリックで説明を開き、ホバーでは短い注記だけを見せる。キーボード操作を想定し、状態変更はわずかな色・線・位置の変化で明確にする。

### Animation
初回表示は章番号・原稿・診断レールを30–70msずつずらして淡く表示する。タブやフィルターは横幅を変えず、opacityとtranslateXだけで切り替える。注記が選択されたときは朱色の線が左から伸びる。prefers-reduced-motionではすべての遷移を短いopacity変化に置き換える。

### Typography System
Display: `DM Serif Display` for article title, chapter numbers, and editorial emphasis. Body: `Newsreader` for prose and explanatory copy. UI/metadata: `IBM Plex Mono` for labels, counts, and code-like diagnostics. Headline is 56–72px desktop, body 18px/1.65, UI labels 11–12px with 0.12em tracking.

### Brand Essence
言語挙動を、編集者とエンジニアが一緒に読み解くための、原稿中心のデバッグラボ。人格: observant / exacting / humane。

### Brand Voice
ヘッドラインは断定的だが冷たくしない。CTAは次の編集行動を具体的に示す。マイクロコピーは短く、検証可能な言葉を使う。
- “Read the behavior, not just the sentence.”
- “Mark the signal you want to inspect.”

### Wordmark & Logo
「LBD」の3文字を、朱色の校正括弧と縦罫線で囲むモノグラム。本文の行間に入り込む小さな校正記号の形状を、ヘッダーのブランドマークとfaviconに展開する。

### Signature Brand Color
`#E85B42` — 編集上の判断を示す「校正の朱」。

## Implementation Notes
- TypeScript + React。画面内にデモ原稿と診断データを持ち、入力・タブ・行選択・再解析をフロントエンドだけで体験できるようにする。
- 画面最上部のheroでは、タイトル・ステータス・スコアを一目で把握できるようにし、下段に原稿とdiagnosticsの二段組みを配置する。
- すべてのCSS/コンポーネントには、Editorial Instrumentのルールを反映するコメントを冒頭に残す。
