import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import axios from 'axios'
import Link from 'next/link'
export default function Home(props) {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Daily XKCD</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Daily XKCD
        </h1>
          <h2>{props.comic.safe_title}</h2>
          <img src={props.comic.img} alt={props.comic.alt} />
          <XkcdCount count={props.count} />
          <Footer comicNum={props.comic.num} />
        </main>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {

  const response = axios.get("https://xkcd.com/info.0.json")
  // why are we using the {} instead of () on the return??
  return {
    props: {
      comic: (await response).data
    }
  }
}

function XkcdCount(props) {
  return <h2> previous: 10 </h2>
}

function Footer(props) {
  let nums = [];
  for (let num = props.comicNum; num > props.comicNum - 10; num--) {
    nums.push(num);
  }
  return (
    <>
      <ul>
        {nums.map(num =>(
            <li>
              <Link href="/num/[id].js" as={`/num/${num}`}><a>#{num}</a></Link>
            </li>
        ))}
      </ul>
    </>

  )
}
