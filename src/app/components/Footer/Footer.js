'use client'

import Link from 'next/link';
import Image from 'next/image';
import WorkingSection from '../Sections/WorkingSection';
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import Font Awesome CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faThreads } from "@fortawesome/free-brands-svg-icons"; // Twitter icon


export default function Footer() {
  return (
    <>
     <WorkingSection/>

     <footer className="wt-footer border-top bg-white pt-5 pb-2">
        <div className="inner-container">
            <div className="row gy-4 align-items-start justify-content-lg-between ">
               
                <div className="col-12 col-lg-2 col-md-4 mb-3 mb-md-0">
                    <div className="d-flex align-items-center mb-2">
                        <img src="./images/red-logo.png" alt="WATUTALENT" className="img-fluid"/>
                    </div>
                    <div className="small text-muted mb-2">
                        Providing your details ensures <br className="d-lg-block d-none" /> tailored solutions for your
                        needs.
                    </div>
                    <div className="fw-semibold mb-1">Follow us on:</div>
                    <div className="d-flex gap-2">
                        <a href="#" className="wt-social"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#" className="wt-social"><i className="fa-brands fa-linkedin-in"></i></a>
                        <a href="#" className="wt-social"><FontAwesomeIcon icon={faXTwitter} /></a>
                        <a href="#" className="wt-social"><i className="fa-brands fa-tiktok"></i></a>
                        <a href="#" className="wt-social"><i className="fa-brands fa-youtube"></i></a>
                        <a href="#" className="wt-social"><FontAwesomeIcon icon={faThreads} /></a>
                    </div>
                </div>
               
                <div className="col-lg-2 col-md-4 col-6 ftr-cols">
                    <h4 className="wt-footer-title">Company</h4>
                    <ul className="list-unstyled wt-footer-list">
                        <li><a href="#"><span className="wt-arrow">&raquo;</span> Connect with Us</a></li>
                        <li><a href="#"><span className="wt-arrow">&raquo;</span> FAQ</a></li>
                        <li><a href="#"><span className="wt-arrow">&raquo;</span> Privacy Policy</a></li>
                        <li><a href="#"><span className="wt-arrow">&raquo;</span> Cookie Policy</a></li>
                        <li><a href="#"><span className="wt-arrow">&raquo;</span> Terms of Use</a></li>
                        <li><a href="#"><span className="wt-arrow">&raquo;</span> Recruitment Policy</a></li>
                    </ul>
                </div>

                <div className="col-lg-2 col-md-4 col-6 ftr-cols">
                    <h4 className="wt-footer-title">Useful Links</h4>
                    <ul className="list-unstyled wt-footer-list">
                        <li><a href="#"><span className="wt-arrow">&raquo;</span> BRELA</a></li>
                        <li><a href="#"><span className="wt-arrow">&raquo;</span> TISEZA</a></li>
                        <li><a href="#"><span className="wt-arrow">&raquo;</span> Immigration</a></li>
                    </ul>
                </div>

             
                <div className="col-lg-3 col-md-4 col-6 ftr-cols">
                    <h4 className="wt-footer-title">Our Solutions</h4>
                    <ul className="list-unstyled wt-footer-list">
                        <li><a href="#"><span className="wt-arrow">&raquo;</span> Human Capital Development</a></li>
                        <li><a href="#"><span className="wt-arrow">&raquo;</span> Business Advisory</a></li>
                        <li><a href="#"><span className="wt-arrow">&raquo;</span> Localization Support</a></li>
                        <li><a href="#"><span className="wt-arrow">&raquo;</span> Political Advisory, Strategy, &
                                Governance</a></li>
                    </ul>
                </div>

                <div className="col-lg-2 col-md-4 col-6 ftr-cols">
                    <h4 className="wt-footer-title">Contact Us at:</h4>
                    <ul className="list-unstyled wt-footer-list">
                        <li>
                            <i className="fa-regular fa-envelope color-red me-1"></i>
                            connect@watu-link.co.tz
                        </li>
                        <li>
                            <i className="fa-solid fa-phone color-red me-1"></i>
                            +255 763 980 675
                        </li>
                        <li>
                            <i className="fa-solid fa-globe color-red me-1"></i>
                            www.watu-link.co.tz
                        </li>
                    </ul>
                </div>

            </div>
            <hr className="my-3" />
            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center small">
                <div className="text-muted text-center">
                    Copyright 2022 Watulink | All Rights Reserved
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}