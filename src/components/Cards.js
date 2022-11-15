import React from 'react'
import CardsData from '../DataPages/DataCards'
import stars from '../images/stars.svg'

function Cards() {
    const cardFile = CardsData.map( data => {
        return  <div className="card mb-4" style={{width: "280px"}} key={data.id}>
                    <img src={data.cover} className="card-img-top" alt=".." />
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
                    <img src={stars}  alt=".." width="92px"/>
                </div>

    })

    return (
        <section id='cards'>
            <h1 className='cards__heading text-center py-md-5 py-3 my-3'>
                Inspiration for your next adventure
            </h1>
        <div className='cards__info row justify-content-evenly'>
            {cardFile}
        </div>
        </section>
    )
}

export default Cards