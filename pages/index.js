import Head from 'next/head'
import Banner from '../components/banner'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Card from '../components/card'

export default function Home() {
  const handleOnBannerBtnClick = () => {
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
        <div className='absolute top-4.5 right-4'>
          <Image src="/static/coffee.png" width={400} height={200} />
        </div>
        <div className='flex items-center flex-row mt-20 justify-between w-full'>
          <Card name='dark coffee ' imgUrl={"/static/coffee.png"} href="/coffee-store/dark-coffee" />
          <Card name='dark coffee ' imgUrl={"/static/coffee.png"} href="/coffee-store/dark-coffee" />
          <Card name='dark coffee ' imgUrl={"/static/coffee.png"} href="/coffee-store/dark-coffee" />
        </div>

      </main>

    </div>
  )
}
