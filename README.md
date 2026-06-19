# useState 演習テンプレート

**useState** と `onClick` の連動、および **再レンダリング** を学ぶテンプレートです。  
再レンダリングの確認は **React DevTools** で行います。

## 演習一覧

| フォルダ | 内容 | 生徒が書くところ |
|---|---|---|
| `02-react-counter` | `useState` + `onClick`（カウンター） | `Counter` 内の `useState` + `onClick` |
| `02b-react-counter-whole` | カウンター（親に state・比較用） | なし（DevTools で 02 と見比べる） |

## 編集するファイル

| 演習 | ファイル |
|---|---|
| 02 | `templates/02-react-counter/src/Exercise.jsx` |
| 02b | 編集不要 |

## ローカルで動かす

```bash
npm run setup    # 初回のみ
npm run dev:02   # カウンター（Counter に state）
npm run dev:02b  # カウンター（親に state・比較用）
```

## 02 と 02b の見比べ方

どちらも同じコンポーネント構成です（DevTools の Components タブで確認）。

```text
Exercise
├── Page
│   └── Card
│       ├── Title
│       ├── TopNote
│       ├── Counter
│       │   ├── PlusButton
│       │   └── CountDisplay
│       └── BottomNote
```

| | state の場所 | +1 を押したとき光るコンポーネント |
|---|---|---|
| **02** | `Counter` の中 | `Counter` だけ |
| **02b** | 親 `Exercise` の中 | `Card` 以下すべて |

## 02 の TODO（ヒント）

- `Counter` 内: `useState` で `count` / `setCount`（初期値 0）
- `onClick`: +1 した値を state に反映

## React DevTools（ローカル）

1. [React Developer Tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) をインストール
2. `http://localhost:3000` を開く
3. F12 → **Components** タブ
4. ⚙️ → **Highlight updates when components render** を ON

## ディレクトリ構造

```text
React_part2/
├── package.json
├── README.md
└── templates/
    ├── 02-react-counter/
    │   ├── package.json
    │   ├── public/index.html
    │   └── src/
    │       ├── index.js
    │       ├── index.jsx
    │       └── Exercise.jsx
    └── 02b-react-counter-whole/
```
# reactpart2
