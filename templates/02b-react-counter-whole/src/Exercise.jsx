import { useState } from 'react'

// ─────────────────────────────────────
// 比較用テンプレート（編集不要）
// useState を親（Exercise）に置いた例
// 02-react-counter と DevTools で見比べてください
// ─────────────────────────────────────

function Page({ children }) {
  return <div style={styles.page}>{children}</div>
}

function Card({ children }) {
  return <div style={styles.card}>{children}</div>
}

function Title() {
  return <h1 style={styles.title}>カウンター（親に state）</h1>
}

function TopNote() {
  return (
    <p style={styles.note}>
      この説明文は state を持っていませんが、
      親に state があると +1 のたびにこの関数も再実行されます。
    </p>
  )
}

function BottomNote() {
  return (
    <p style={styles.noteWarn}>
      +1 で DevTools では<strong>カード内が全部</strong>青く光ります（関数の再実行）。
      でも画面は数字だけ変わります（DOM は変化した部分だけ更新）。
      02 では Counter だけが光ります。
    </p>
  )
}

function PlusButton({ onClick }) {
  return (
    <button style={styles.button} onClick={onClick}>
      +1
    </button>
  )
}

function CountDisplay({ count }) {
  return (
    <div style={styles.countBox}>
      <span style={styles.countLabel}>カウント</span>
      <span style={styles.countValue}>{count}</span>
    </div>
  )
}

function Counter({ count, onIncrement }) {
  return (
    <div style={styles.counterRow}>
      <PlusButton onClick={onIncrement} />
      <CountDisplay count={count} />
    </div>
  )
}

export default function Exercise() {
  const [count, setCount] = useState(0)

  return (
    <Page>
      <Card>
        <Title />
        <TopNote />
        <Counter count={count} onIncrement={() => setCount(c => c + 1)} />
        <BottomNote />
      </Card>
    </Page>
  )
}

const styles = {
  page: {
    fontFamily: 'system-ui, sans-serif',
    minHeight: '100vh',
    background: '#f1f5f9',
    padding: '2rem',
    boxSizing: 'border-box',
  },
  card: {
    maxWidth: 440,
    margin: '0 auto',
    background: '#fff',
    borderRadius: 16,
    padding: '1.75rem',
    boxShadow: '0 4px 24px rgba(15, 23, 42, 0.08)',
    border: '1px solid #e2e8f0',
  },
  title: {
    margin: '0 0 1rem',
    fontSize: '1.25rem',
    fontWeight: 700,
    color: '#0f172a',
  },
  note: {
    margin: '0 0 1rem',
    fontSize: '0.8rem',
    color: '#64748b',
    lineHeight: 1.7,
    padding: '0.75rem 1rem',
    background: '#f8fafc',
    borderRadius: 8,
    border: '1px solid #e2e8f0',
  },
  noteWarn: {
    margin: '0 0 1rem',
    fontSize: '0.8rem',
    color: '#b45309',
    lineHeight: 1.7,
    padding: '0.75rem 1rem',
    background: '#fffbeb',
    borderRadius: 8,
    border: '1px solid #fcd34d',
  },
  countLabel: {
    fontSize: '0.875rem',
    color: '#64748b',
  },
  counterRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.25rem',
    margin: '0.25rem 0 1rem',
    padding: '1.25rem',
    background: '#fef3c7',
    borderRadius: 12,
    border: '2px solid #fcd34d',
  },
  button: {
    fontSize: '1rem',
    fontWeight: 600,
    padding: '0.625rem 1.5rem',
    cursor: 'pointer',
    background: '#d97706',
    color: '#fff',
    border: 'none',
    borderRadius: 10,
    boxShadow: '0 2px 8px rgba(217, 119, 6, 0.35)',
  },
  countBox: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '0.5rem',
  },
  countValue: {
    fontSize: '2.5rem',
    fontWeight: 700,
    fontFamily: 'monospace',
    color: '#0f172a',
    lineHeight: 1,
  },
}
