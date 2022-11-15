import React from 'react'
import metabnbNFTS from '../images/metabnb NFTs.svg'

function NFTs() {
    return (
        <section id='NFTs'>
            <div className="container">
                <div className="row align-items-center py-md-5 pt-2 mt-4 mt-md-0 mt-lg-4">
                    <div className="col-12 col-md-5">
                        <h1 className='NFTs__heading mb-lg-4 mb-md-2 mb-0 mt-3 mt-md-0 pb-3'>
                            Metabnb NFTs
                        </h1>
                        <p className='NFTs__text mb-md-4 pb-3 ms-0'>
                            Discover our NFT gift cards collection. Loyal customers gets amazing gift cards 
                            which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.
                        </p>
                        <button className='NFTs__learnMore mb-lg-5'>
                            Learn more
                        </button>
                    </div>
                    <div className="col-12 col-md-7 text-center img">
                        <img src={metabnbNFTS} alt="Metabnb NFTs" className='float-lg-end mt-5 mt-md-0 mt-lg-0 mb-5 mb-md-2 img-fluid' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NFTs