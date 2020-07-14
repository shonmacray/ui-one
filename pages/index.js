import Head from 'next/head'
import Header from '../components/header'
import Body from '../components/body'

export default function Home() {
  return (
    <div>
      <Head>
        <title>ui one</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous"></link>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" crossOrigin="anonymous"></link>
      </Head>
      <div className="blur">
       <Header/>
       <Body/>
      </div>
    </div>
  )
}
