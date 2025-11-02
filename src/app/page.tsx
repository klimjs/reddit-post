import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>react • apollo graphql • mongodb • radix ui • css modules</div>
        <div className={styles.intro}>
          <h1>Reddit Post App</h1>
          <p>
            POC covering the main functionality of allowing users to post on
            Reddit into a specific community.
          </p>
        </div>
        <div className={styles.footer}>
          <a
            className={styles.secondary}
            href="https://github.com/klimjs/reddit-post"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </main>
    </div>
  )
}
