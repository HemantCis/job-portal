'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
// import '../styles/globals.css';
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import Font Awesome CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faThreads } from "@fortawesome/free-brands-svg-icons"; // Twitter icon


export default function Header() {
  
  const [offcanvasShow, setOffcanvasShow] = useState(false)
  const pathname = usePathname();

  const isActive = (path) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  console.log("Current Pathname:", pathname);

  return (
    <>
      {/* Top Bar */}
      {/* <div className="header-topbar text-white py-2 px-sm-3">
        <div className="custom-container d-flex justify-content-between align-items-center">
          <div>
            <a href="tel:+255763980675" className="text-white text-decoration-none">
              <i className="fa-solid fa-phone"></i>
              <span className="d-sm-inline d-none ms-1">+255763980675</span>
            </a> 
            &nbsp; | &nbsp;
            <a href="mailto:connect@watu-link.co.tz" className="text-white text-decoration-none">
              <i className="fa-solid fa-envelope"></i> 
              <span className="d-sm-inline d-none ms-1">connect@watu-link.co.tz</span>
            </a>
          </div>
          <div className="d-flex gap-2 align-items-center">
            <a href="#" className="text-white"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="#" className="text-white"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="#" className="text-white"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="#" className="text-white"><i className="fa-brands fa-tiktok"></i></a>
            <a href="#" className="text-white"><i className="fa-brands fa-youtube"></i></a>
            <a href="#" className="text-white"><i className="fa-brands fa-threads"></i></a>
          </div>
        </div>
      </div> */}

      {/* Main Header */}
      {/* <header className="header position-sticky shadow bg-white top-0"> */}
        {/* <div className="custom-container">
          <nav className="navbar navbar-expand-lg navbar-light bg-white px-0">
            <Link className="navbar-brand d-flex align-items-center" href="/">
              <Image 
                src="/images/red-logo.png" 
                alt="WatuLink Advisory" 
                width={150}
                height={50}
                className="img-fluid"
              />
            </Link>
            
            <button 
              className="navbar-toggler" 
              type="button" 
              onClick={() => setOffcanvasShow(true)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="d-none d-lg-flex justify-content-end flex-grow-1 ms-3">
              <ul className="navbar-nav mb-2 mb-lg-0 gap-xl-4 gap-lg-3 gap-3 fw-medium">
                  <li className="nav-item">
                    <Link 
                      className={`nav-link ${isActive('/') ? 'active text-danger' : ''}`} 
                      href="/" 
                      onClick={() => setOffcanvasShow(false)}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link 
                      className={`nav-link ${isActive('/services') ? 'active text-danger' : ''}`} 
                      href="/services" 
                      onClick={() => setOffcanvasShow(false)}
                    >
                      Services
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link 
                      className={`nav-link ${isActive('/insights') ? 'active text-danger' : ''}`} 
                      href="/insights" 
                      onClick={() => setOffcanvasShow(false)}
                    >
                      Insights
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link 
                      className={`nav-link ${isActive('/about') ? 'active text-danger' : ''}`} 
                      href="/about" 
                      onClick={() => setOffcanvasShow(false)}
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link 
                      className={`nav-link ${isActive('/learn') ? 'active text-danger' : ''}`} 
                      href="/learn" 
                      onClick={() => setOffcanvasShow(false)}
                    >
                      Learn
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link 
                      className={`nav-link ${isActive('/contact') ? 'active text-danger' : ''}`} 
                      href="/contact" 
                      onClick={() => setOffcanvasShow(false)}
                    >
                      Contact Us
                    </Link>
                  </li>
              </ul>
            </div>
          </nav>
        </div> */}

        {/* Offcanvas for Mobile */}
        {/* <div className={`offcanvas offcanvas-start ${offcanvasShow ? 'show' : ''}`} tabIndex="-1" style={{visibility: offcanvasShow ? 'visible' : 'hidden'}}>
          <div className="offcanvas-header">
            <h5 id="offcanvasNavLabel">
              <Image 
                src="/images/red-logo.png" 
                alt="WatuLink Advisory" 
                width={120}
                height={40}
                className="img-fluid"
              />
            </h5>
            <button type="button" className="btn-close" onClick={() => setOffcanvasShow(false)}></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active text-danger" href="/" onClick={() => setOffcanvasShow(false)}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/services" onClick={() => setOffcanvasShow(false)}>Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/insights" onClick={() => setOffcanvasShow(false)}>Insights</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/about" onClick={() => setOffcanvasShow(false)}>About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/learn" onClick={() => setOffcanvasShow(false)}>Learn</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contact" onClick={() => setOffcanvasShow(false)}>Contact Us</Link>
              </li>
            </ul>
            <div className="mt-3 d-flex justify-content-between small">
              <a href="tel:+255763980675" className="text-dark">
                <i className="fa-solid fa-phone"></i> +255763980675
              </a>
              <a href="mailto:connect@watu-link.co.tz" className="text-dark">
                <i className="fa-solid fa-envelope"></i> connect@watu-link.co.tz
              </a>
            </div>
            <div className="mt-2">
              <a href="#" className="text-dark me-3"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="text-dark me-3"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="#" className="text-dark"><i className="fa-brands fa-x-twitter"></i></a>
            </div>
          </div>
        </div> */}
        {/* {offcanvasShow && <div className="offcanvas-backdrop fade show" onClick={() => setOffcanvasShow(false)}></div>} */}
      {/* </header> */}
      
      <div className="header-topbar text-white py-2 px-sm-3">
        <div className="custom-container d-flex justify-content-between align-items-center">

            <div>
                <a href="tel:+255763980675" className="text-white text-decoration-none"><i className="fa-solid fa-phone"></i>
                    <span className="d-sm-inline d-none">
                        +255763980675</span></a> &nbsp; | &nbsp;
                <a href="mailto:connect@watu-link.co.tz" className="text-white text-decoration-none"><i
                        className="fa-solid fa-envelope"></i> <span className="d-sm-inline d-none">
                        connect@watu-link.co.tz</span></a>
            </div>
            <div className="d-flex gap-2 align-items-center">
                <a href="#" className="text-white"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="#" className="text-white"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="#" className="text-white"><FontAwesomeIcon icon={faXTwitter} /></a>
                <a href="#" className="text-white"><i className="fa-brands fa-tiktok"></i></a>
                <a href="#" className="text-white"><i className="fa-brands fa-youtube"></i></a>
                <a href="#" className="text-white"><FontAwesomeIcon icon={faThreads} /></a>

            </div>
        </div>
    </div>
    <header className="header position-sticky shadow bg-white top-0">

        {/* <!-- Main Header --> */}
        <div className="custom-container">
            <nav className="navbar navbar-expand-lg navbar-light bg-white px-0">
                <a className="navbar-brand d-flex align-items-center" href="#">
                    <img src="./images/red-logo.png" alt="" className="img-fluid"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" onClick={() => setOffcanvasShow(false)} data-bs-target="#offcanvasNav"
                    aria-controls="offcanvasNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="d-none d-lg-flex justify-content-end flex-grow-1 ms-3">
                    <ul className="navbar-nav mb-2 mb-lg-0 gap-xl-4 gap-lg-3 gap-3 fw-medium ">
                        <li className="nav-item"><Link className={`nav-link ${pathname === "/" ? "active" : ""}`} href="/">Home</Link></li>
                    <li className="nav-item"><Link className={`nav-link ${pathname === "/services" ? "active" : ""}`} onClick={() => setOffcanvasShow(false)} href="./services">Services</Link></li>
                    <li className="nav-item"><Link className={`nav-link ${pathname === "/insights" ? "active" : ""}`} onClick={() => setOffcanvasShow(false)} href="./insights">Insights</Link></li>
                    <li className="nav-item"><Link className={`nav-link ${pathname === "/about" ? "active" : ""}`} onClick={() => setOffcanvasShow(false)} href="./about">About Us</Link></li>
                    <li className="nav-item"><Link className={`nav-link ${pathname === "/learn" ? "active" : ""}`} onClick={() => setOffcanvasShow(false)} href="./learn">Learn</Link></li>
                    <li className="nav-item"><Link className={`nav-link ${pathname === "/contact" ? "active" : ""}`} onClick={() => setOffcanvasShow(false)} href="./contact">Contact Us</Link></li>
                    </ul>
                    {/* <!-- <div className="d-flex gap-2">
                        <div className="dropdown me-2">
                            <button className="btn btn-danger dropdown-toggle" type="button" id="loginDropdown"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                LOGIN
                                <i className="fa-solid fa-chevron-down"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="loginDropdown">
                                <li><a className="dropdown-item" href="#">Admin Login</a></li>
                                <li><a className="dropdown-item" href="#">User Login</a></li>

                            </ul>
                        </div>
                        <div className="dropdown">
                            <button className="btn btn-dark dropdown-toggle" type="button" id="signUpDropdown"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                SIGN UP
                                <i className="fa-solid fa-chevron-down"></i>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="signUpDropdown">
                                <li><a className="dropdown-item" href="#">Register as Employer</a></li>
                                <li><a className="dropdown-item" href="#">Register as Job Seeker</a></li>

                            </ul>
                        </div>

                    </div> --> */}
                </div>
            </nav>
        </div>

        {/* Offcanvas for Mobile  */}
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNav" aria-labelledby="offcanvasNavLabel">
            <div className="offcanvas-header">
                <h5 id="offcanvasNavLabel">
                    <img src="./images/red-logo.png" alt="" className="img-fluid"/>
                </h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
            </div>
            <div className="offcanvas-body">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link active" href="./index.html">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="./services.html">Services</a></li>
                    <li className="nav-item"><a className="nav-link" href="./insights.html">Insights</a></li>
                    <li className="nav-item"><a className="nav-link" href="./about.html">About Us</a></li>
                    <li className="nav-item"><a className="nav-link" href="./learn.html">Learn</a></li>
                    <li className="nav-item"><a className="nav-link" href="./contact.html">Contact Us</a></li>
                </ul>
                <div className="mt-3">
                    <button className="btn btn-danger w-100 mb-2">LOGIN <i className="bi bi-caret-down-fill"></i></button>
                    <button className="btn btn-outline-danger w-100">SIGN UP <i className="bi bi-caret-down-fill"></i></button>
                </div>
                <div className="mt-3 d-flex justify-content-between">
                    <a href="tel:+255763980675" className="text-dark"><i className="bi bi-telephone"></i> +255763980675</a>
                    <a href="mailto:connect@watu-link.co.tz" className="text-dark"><i className="bi bi-envelope"></i>
                        connect@watu-link.co.tz</a>
                </div>
                <div className="mt-2">
                    <a href="#" className="text-dark me-2"><i className="bi bi-facebook"></i></a>
                    <a href="#" className="text-dark"><i className="bi bi-linkedin"></i></a>
                </div>
            </div>
        </div>
    </header>
    

    </>
  )
}