import { useState } from 'react'

// ─────────────────────────────────────
// 以下は編集不要（state なし → +1 を押しても青枠が付かない）
// ─────────────────────────────────────

function Page({ children }) {
  return <div style={styles.page}>{children}</div>
}

function Card({ children }) {
  return <div style={styles.card}>{children}</div>
}

function Title() {
  return <h1 style={styles.title}>カウンター</h1>
}

function TopNote() {
  return (
    <p style={styles.note}>
      この説明文は state を持っていません。
      +1 を押してもここは動かず、DevTools で青く囲まれません。
    </p>
  )
}

function BottomNote() {
  return (
    <p style={styles.note}>
      DevTools の青枠は「関数が再実行された」印です。
      Counter に state を置くと、+1 で Counter だけ光り、数字だけ変わります。
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

// ─────────────────────────────────────
// ★ ここから編集（useState + onClick）
// ─────────────────────────────────────

function Counter() {
  //演習1:このconst countをuseStateを使って書き換えてくださいただし初期値は0で,countとuseCountを使ってください
  const count = 0

  return (
    <div style={styles.counterRow}>
      
      {/*演習2:ここのPlusButton内にonClickの関数を追加しuseStateの機能を使ってcountを+1させてください*/}
      <PlusButton/>
        

      
      <CountDisplay count={count} />
    </div>
  )
}

export default function Exercise() {
  return (
    <Page>
      <Card>
        <Title />
        <TopNote />
        <Counter />
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
    background: '#eff6ff',
    borderRadius: 12,
    border: '2px solid #bfdbfe',
  },
  button: {
    fontSize: '1rem',
    fontWeight: 600,
    padding: '0.625rem 1.5rem',
    cursor: 'pointer',
    background: '#2563eb',
    color: '#fff',
    border: 'none',
    borderRadius: 10,
    boxShadow: '0 2px 8px rgba(37, 99, 235, 0.35)',
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
