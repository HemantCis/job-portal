'use client'

import { useState } from 'react'
import Image from 'next/image'

const tabContent = {
  values: {
    title: "Our Values - The Foundation of Everything We Do",
    image: "/images/benefits.jpg",
    items: [
      {
        icon: "/images/value1.svg",
        text: "Integrity – We keep our word."
      },
      {
        icon: "/images/value2.svg",
        text: "Excellence – Good isn't enough; we aim higher."
      },
      {
        icon: "/images/value3.svg",
        text: "Collaboration – Success is a team sport."
      },
      {
        icon: "/images/value4.svg",
        text: "Innovation – We think differently so you can stay ahead."
      },
      {
        icon: "/images/value5.svg",
        text: "Impact – We measure our work by the difference it makes."
      }
    ]
  },
  purpose: {
    title: "Our Purpose - Why We Exist",
    image: "/images/benefits.jpg",
    content: "We exist to bridge the gap between ambition and achievement. Our purpose is to empower organizations and individuals with the strategic clarity, human capital solutions, and localized intelligence needed to thrive in complex environments. We believe in creating sustainable value that transcends borders and generations."
  },
  mission: {
    title: "Our Mission - What Drives Us Forward",
    image: "/images/benefits.jpg",
    content: "To be the leading advisory partner for organizations seeking meaningful growth in East Africa and beyond. We are committed to delivering innovative solutions that combine local expertise with global best practices, fostering environments where businesses can scale, adapt, and lead with confidence."
  }
}

export default function TabsSection() {
  const [activeTab, setActiveTab] = useState('values')

  return (
    <section className="tabSection py-5 bg-red-linear text-white">
    <div className="inner-container">
        <div className="text-center">
            <h5 className="text-uppercase color-yellow fw-bold my-2">Working With Us</h5>
            <h2 className="fw-bold heading-1 mb-2">
                What Impact could We Unlock Together?
            </h2>
            <p className="text-light mb-5">
                The best results don’t happen by chance, they are re built with WatuLink Advisory.
            </p>
        </div>
    </div>

    <div className="working-tabsWrapper">
      <ul
        className="nav nav-pills gap-lg-5 gap-4 position-relative justify-content-center"
        id="pills-tab"
        role="tablist"
      >
        <li key={"index-1"} className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="pills-benefits-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-benefits"
            type="button"
            role="tab"
            aria-controls="pills-benefits"
            aria-selected="true"
          >
            OUR VALUES
          </button>
        </li>
        <li key={"index-2"} className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-courses-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-courses"
            type="button"
            role="tab"
            aria-controls="pills-courses"
            aria-selected="false"
            tabindex="-1"
          >
            OUR PURPOSE
          </button>
        </li>
        <li key={"index-3"} className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-career-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-career"
            type="button"
            role="tab"
            aria-controls="pills-career"
            aria-selected="false"
          >
            OUR MISSION
          </button>
        </li>
      </ul>
    </div>

    <div className="container py-md-5 py-4">
       
        <div className="tab-content" id="pills-tabContent">
            
            <div className="tab-pane fade show active" id="pills-benefits" role="tabpanel"
                aria-labelledby="pills-benefits-tab" tabIndex="0">
                <div className="row align-items-center g-5 m-0 p-0">

                  
                    <div className="col-lg-6">
                        <img src="./images/benefits.jpg" alt="Career Community"
                            className="img-fluid rounded-4 shadow-sm"/>
                    </div>

                   
                    <div className="col-lg-6">
                        <h2 className="fw-bold mb-3">Fastest Growing Career Community</h2>

                        <ul className="list-unstyled mt-4">
                            <li className="mb-2 d-flex align-items-center gap-md-3 gap-2">
                                <img src="./images/value1.svg" className="img-fluid" alt=""/>Integrity – We keep our
                                word.
                            </li>
                            <li className="mb-2 d-flex align-items-center gap-md-3 gap-2">
                                <img src="./images/value2.svg" className="img-fluid" alt=""/>Excellence – Good isn’t
                                enough; we aim higher.
                            </li>
                            <li className="mb-2 d-flex align-items-center gap-md-3 gap-2">
                                <img src="./images/value3.svg" className="img-fluid" alt=""/>Collaboration – Success is a
                                team sport.
                            </li>
                            <li className="mb-2 d-flex align-items-center gap-md-3 gap-2">
                                <img src="./images/value4.svg" className="img-fluid" alt=""/>Innovation – We think
                                differently so you can stay ahead.
                            </li>
                            <li className="mb-2 d-flex align-items-center gap-md-3 gap-2">
                                <img src="./images/value5.svg" className="img-fluid" alt=""/>Impact – We measure our work
                                by the difference it makes.
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

      
            <div className="tab-pane fade" id="pills-courses" role="tabpanel" aria-labelledby="pills-courses-tab"
                tabIndex="0">
                <div className="row align-items-center g-5 m-0 p-0">

                
                    <div className="col-lg-6">
                        <img src="./images/benefits.jpg" alt="Career Community"
                            className="img-fluid rounded-4 shadow-sm"/>
                    </div>

                    <div className="col-lg-6">
                        <h2 className="fw-bold mb-3">Explore Our Courses</h2>
                        <p className="text-light rounded">
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                            voluptatum deleniti atque corrupti quos dolores.
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                            voluptatum deleniti atque corrupti quos.
                        </p>
                        <ul className="list-unstyled mt-4">
                            <li>📘 Leadership & Management</li>
                            <li>📘 Full Stack Development</li>
                            <li>📘 UI/UX Design Fundamentals</li>
                            <li>📘 Digital Marketing Essentials</li>
                        </ul>
                        <a href="#get-job" className="btn btn-dark text-uppercase fw-semibold px-4 py-2 mt-4">Get a
                            Job Now</a>
                    </div>

                </div>
            </div>

            <div className="tab-pane fade" id="pills-career" role="tabpanel" aria-labelledby="pills-career-tab"
                tabIndex="0">
                <div className="row align-items-center g-5 m-0 p-0">

                    <div className="col-lg-6">
                        <img src="./images/benefits.jpg" alt="Career Community"
                            className="img-fluid rounded-4 shadow-sm"/>
                    </div>

                    <div className="col-lg-6">
                        <h2 className="fw-bold mb-3">Career Opportunities</h2>
                        <p className="text-light rounded">
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                            voluptatum deleniti atque corrupti quos dolores.
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                            voluptatum deleniti atque corrupti quos.
                        </p>
                        <ul className="list-unstyled mt-4">
                            <li>💼 Software Engineer</li>
                            <li>💼 Marketing Strategist</li>
                            <li>💼 HR Business Partner</li>
                            <li>💼 Product Manager</li>
                        </ul>
                        <a href="#get-job" className="btn btn-dark text-uppercase fw-semibold px-4 py-2 mt-4">Get a
                            Job Now</a>
                    </div>

                </div>
            </div>
        </div>
    </div>

</section>
  )
}