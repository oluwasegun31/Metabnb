import React from 'react'
import HeroImgs__desktop from '../images/HeroImgs__desktop.svg'
import mbToken from '../images/Mb Token Logo.svg'
import metaMask from '../images/MetaMask Logo.svg'
import openSea from '../images/OpenSea Logo.svg'
 
function Hero() {
  return (
    <section id='hero'>
        <div className="container">
            <div className="row align-items-center pt-md-5 pt-2 mt-4 mt-md-0 mt-lg-4">
                <div className="col-12 col-md-7">
                    <h1 className='hero__heading'>
                        Rent a <span>Place</span> away from <span>Home</span> in the <span>Metaverse</span>
                    </h1>
                    <p className='hero__text pb-md-5 pb-3 ms-0'>
                        we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone
                    </p>
                    <div className="hero__searchBar mb-3 mb-md-0 ms-0">
                        <span>Search for location</span>
                        <span>Search</span>
                    </div>
                </div>
                <div className="col-12 col-md-5 text-center">
                    <img src={HeroImgs__desktop} alt="" className='float-lg-end mt-4 mt-lg-0 mb-md-2 img-fluid' />
                </div>
            </div>
        </div>
        <div className='hero__footer d-flex align-items-center justify-content-between mt-5 px-2 px-md-5'>
            <img src={mbToken} alt="Mb Token Logo" />
            <img src={metaMask} alt="MetaMask Logo" />
            <img src={openSea} alt="OpenSea Logo" />
        </div>
    </section>
  )
}

export default Hero