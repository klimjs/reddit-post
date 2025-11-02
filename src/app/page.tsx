import styles from './page.module.css'
import { Callout } from '@radix-ui/themes'
import { StackIcon } from '@radix-ui/react-icons'
import { GraphqlTest } from '@/components/graphql-test'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Callout.Root>
          <Callout.Icon>
            <StackIcon />
          </Callout.Icon>
          <Callout.Text>
            react • apollo graphql • mongodb • radix ui
          </Callout.Text>
        </Callout.Root>

        <div className={styles.intro}>
          <h1>Reddit Post App</h1>
          <p>
            POC covering the main functionality of allowing users to post on
            Reddit into a specific community.
          </p>
          <GraphqlTest />
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
