
import { Inter } from '@next/font/google'
import Head from 'next/head'
import Herosection, {  } from "../components/Herosection";
import Footer from "../components/Footer";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>PCCOE ACM Student Chapter</title>
        <meta name='descripti' content="Gnerated by create next app"/>
        <link rel="icon" href="/acm.ico" />
      </Head>
      <Herosection />
      <Footer />
    </div>
  )
}
