import Head from 'next/head'
import Banner from '../components/banner'
import styles from '../styles/Home.module.css'

export default function Home() {
 const handleOnBannerBtnClick=()=>{
console.log('hi btn')
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <meta name="description" content="Search Coffee" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       
        <Banner buttonText='View stores nearby' handleOnclick={handleOnBannerBtnClick} />
      </main>

    </div>
  )
}
