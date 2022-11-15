import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Cards from '../components/Cards'
import NFTs from '../components/NFTs'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
        <Navbar />
        <Hero />
        <Cards />
        <NFTs />
        <Footer />
    </>
  )
}

export default Home