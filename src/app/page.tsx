import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>Header</div>
        <div className={styles.intro}>
          <h1>To get started, edit the page.tsx file.</h1>
          <p>Looking for a starting point or more instructions?</p>
        </div>
        <div className={styles.footer}>Footer</div>
      </main>
    </div>
  )
}
