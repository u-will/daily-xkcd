import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>XKCD</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          XKCD
        </h1>
        <XkcdCount count = {props.count} />
        <XkcdList />
        <Footer message='this is my story' />
      </main>
    </div>
  )
}

export async function getStaticProps() {

  // why are we using the {} instead of () on the return??
  return {
    props: {
      count: 34,
    }
  }
}

function XkcdCount(props) {
  return <h2> Count: {props.count} </h2>
}

function XkcdList() {
  return <h2> List </h2>
}
function Footer(props) {
  return <small> {props.message}</small>
}
