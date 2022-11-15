import React from 'react'
import MetabnbLogo from '../images/metabnbLogo__nav.svg'
import metamask__fox from '../images/metamask fox.svg'
import walletconnect from '../images/walletconnect.svg'
import arrow from '../images/Down Chevron.svg'
import { Link } from "react-router-dom";

function Navbar() {
  return (
        <nav className="navbar navbar-expand-lg navbar-light pt-4">
            {/*  Container wrapper  */}
            <div className="container-fluid">
                {/*  Navbar brand  */}
                <Link className="navbar-brand me-2" to="/">
                    <img
                        src={MetabnbLogo}
                        alt="MetaBnb Logo"
                        style={{marginTop: "-1px"}}
                    />
                </Link>

                {/*  Toggle button  */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarButtonsExample"
                    aria-controls="navbarButtonsExample"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fas fa-bars"></i>
                </button>

                {/*  Collapsible wrapper  */}
                <div className="collapse navbar-collapse" id="navbarButtonsExample">
                    {/*  Center links  */}
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link px-4" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link px-4" to="/Place_to_Stay">Place to stay</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-4" href="#NFTs">NFTs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-4" href="#Footer">Community</a>
                        </li>
                    </ul>

                    {/*  Right link  */}
                    <div className="d-flex align-items-center">
                        <a
                            className="btn btn-dark px-3 nav-link__right"
                            href="#"
                            role="button"
                            data-bs-toggle="modal" 
                            data-bs-target="#Modal"
                        >
                            Connect wallet
                        </a>
                        {/* modal */}
                        <div className="modal fade"  id='Modal'>
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title px-3 py-2 ps-md-3">Connect Wallet</h5>
                                        <button type="button" className="btn-close px-3" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <p className='px-3 ps-md-3'>Choose your preferred wallet:</p>
                                        <div className="d-md-grid gap-2 px-md-3 px-0 mb-3">
                                            <button className="btn mb-md-2 mb-3" type="button">
                                                <div className='d-flex align-items-center'>
                                                    <img src={metamask__fox} alt="MetaMask" className='ps-3 pe-3' />
                                                    <span className='brand'>Metamask</span>
                                                </div>
                                                <img src={arrow} alt="" className='pe-2'/>
                                            </button>
                                            <button className="btn" type="button">
                                                <div className='d-flex align-items-center'>
                                                    <img src={walletconnect} alt="WalletConnect" className='ps-3 pe-3' />
                                                    <span className='brand'>WalletConnect</span>
                                                </div>
                                                <img src={arrow} alt="" className='pe-2'/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  Collapsible wrapper  */}
            </div>
            {/*  Container wrapper  */}
        </nav>
  )
}

export default Navbar