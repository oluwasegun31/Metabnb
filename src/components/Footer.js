import React from 'react'
import metabnbLogo__footer  from '../images/Metabnb Logo__footer.svg'
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="text-center text-lg-start pt-5 pb-3">
            <div className="container p-4 pb-0">
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                        <div className="pb-3">
                            <Link to="/">
                                <img src={metabnbLogo__footer} alt="Metabnb Logo" width="230px" height="40px" />
                            </Link>
                        </div>
                        <ul className="list-unstyled pt-md-4 mt-md-5 pt-4 ">
                            <li>
                                <i className="fa-brands fa-facebook-f px-3 px-md-0 pe-md-3"></i>
                                <i className="fa-brands fa-instagram px-3"></i>
                                <i className="fa-brands fa-twitter px-3"></i>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="pb-3">Community</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#!" className="text-decoration-none">NFT</a>
                            </li>
                            <li>
                                <a href="#!" className="text-decoration-none">Tokens</a>
                            </li>
                            <li>
                                <a href="#!" className="text-decoration-none">Landlords</a>
                            </li>
                            <li>
                                <a href="#!" className="text-decoration-none">Discord</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="pb-3">Places</h5>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="#!" className="text-decoration-none">Castle</a>
                            </li>
                            <li>
                                <a href="#!" className="text-decoration-none">Farms</a>
                            </li>
                            <li>
                                <a href="#!" className="text-decoration-none">Beach</a>
                            </li>
                            <li>
                                <a href="#!" className="text-decoration-none">Learn more</a>
                            </li>
                        </ul>
                    </div>                 
                    <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                        <h5 className="pb-3">About us</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#!" className="text-decoration-none">Road map</a>
                            </li>
                            <li>
                                <a href="#!" className="text-decoration-none">Creators</a>
                            </li>
                            <li>
                                <a href="#!" className="text-decoration-none">Career</a>
                            </li>
                            <li>
                                <a href="#!" className="text-decoration-none">Contact us</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="pb-2">
                    © 2022 Metabnb
                </div>
            </div>
        </footer>
    )
}

export default Footer