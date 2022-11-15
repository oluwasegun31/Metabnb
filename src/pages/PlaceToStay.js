import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PlaceToStayData from '../data/PlaceToStayData'
import stars from '../images/stars.svg'
import settings__icon from '../images/setting-5.svg'


function PlaceToStay() {
    const cardFile = PlaceToStayData.map( data => {
        return  <div className="card mb-4" style={{width: "280px"}} key={data.id}>
                    <img src={data.cover} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <div className="card__title d-flex justify-content-between py-3">
                            <span>Desert king</span>
                            <span>1MBT per night</span>
                        </div>
                        <div className="card__text d-flex justify-content-between pb-3">
                            <span>2345km away</span>
                            <span>available for 2weeks stay</span>
                        </div>
                    </div>
                    <img src={stars}  alt="..." width="92px"/>
                </div>
    })

  return (
    <>
        <Navbar />
        <section id='placeToStay__cards' className='row justify-content-evenly pb-4'>
            <div className='top-nav'>
                <ul className="list-unstyled d-flex align-items-baseline justify-content-between py-4 mt-4">
                    <li>Resturant</li>
                    <li>Cottage</li>
                    <li>Castle</li>
                    <li>fantast city</li>
                    <li>beach</li>
                    <li>Carbins</li>
                    <li>Off-grid</li>
                    <li>Farm</li>
                    <li>Location <span><img src={settings__icon} alt="" /></span></li>
                </ul>
            </div>
            {cardFile}
        </section>
        <Footer />
    </>
  )
}

export default PlaceToStay