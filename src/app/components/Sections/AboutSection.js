'use client'

import Image from 'next/image'

export default function AboutSection() {
  return (
    <>
    {/* <section className="py-5 bg-red-linear text-white">
      <div className="inner-container">
        <div className="row my-1 row-gap-4 py-lg-3">
          <div className="col-xl-7">
            <div className="img-wrapper d-flex gap-md-3 gap-4">
              <div className="d-flex flex-column gap-3 imgWithBadge position-relative">
                <div className="imageWrapper h-100 m-0 p-0">
                  <Image 
                    src="/images/about1.png" 
                    alt="Team Discussion"
                    width={350}
                    height={250}
                    className="img-fluid rounded-4 h-100 object-fit-cover shadow-sm"
                  />
                </div>
                <div className="text-dark text-center py-3 bg-white px-3 fw-semibold imgBadge d-flex align-items-center justify-content-center rounded-3 gap-xl-3 gap-2">
                  <Image 
                    src="/images/circle-starBadge.png" 
                    alt="badge" 
                    width={60}
                    height={60}
                    className="img-fluid"
                  />
                  <div className="badge-txt">
                    <h4 className="text-uppercase mb-0">Impact that lasts</h4>
                  </div>
                </div>
              </div>
              
              <div className="">
                <div className="d-flex flex-column gap-4 h-100">
                  <Image 
                    src="/images/about2.png" 
                    alt="Team Discussion"
                    width={400}
                    height={400}
                    className="img-fluid rounded-4 h-100 object-fit-cover shadow-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-5 align-self-center ps-4">
            <h2 className="fw-bold heading-1 mb-4">Advisory Built for Growth and Sustainability</h2>
            <p className="text-light mb-3">
              We are WatuLink Advisory, the bridge between concepts and impact. Born in Tanzania, connected to
              the world, we help organisations grow, adapt, and lead with confidence.
            </p>
            <p className="text-light mb-3">
              Whether you are launching a bold idea, expanding across borders, or rethinking your strategy, we
              bring local intelligence, global perspective, and hands-on support to make it happen.
            </p>
          </div>
        </div>
      </div>
    </section> */}

<section className="py-5 bg-red-linear text-white">
        <div className="inner-container">
            <div className="row my-1 row-gap-4 py-lg-3">

                <div className="col-xl-7 ">
                    <div className="img-wrapper d-flex gap-md-3 gap-4">

                        <div className="d-flex flex-column gap-3  imgWithBadge position-relative ">
                            <div className="imageWrapper h-100 m-0 p-0 ">
                                <img src="./images/about1.png" alt="Team Discussion"
                                    className="img-fluid rounded-4 h-100 object-fit-cover shadow-sm"/>
                            </div>

                            <div
                                className="text-dark text-center py-3 bg-white px-3 fw-semibold imgBadgde d-flex align-items-center justify-content-center rounded-3  gap-xl-3 gap-2">
                                <img src="./images/circle-starBadge.png" alt="badge" className="img-fluid"/>
                                <div className="badge-txtt">
                                    <h4 className="text-uppercase mb-0">Impact that lasts </h4>
                                </div>
                            </div>
                        </div>


                        <div className="">
                            <div className="d-flex flex-column gap-4 h-100">
                                <img src="./images/about2.png" alt="Team Discussion"
                                    className="img-fluid rounded-4 h-100 object-fit-cover shadow-sm"/>
                            </div>
                        </div>
                    </div>
                </div>

              
                <div className="col-xl-5 align-self-center ps-4">
                    <h2 className="fw-bold heading-1  mb-4"> Advisory Built for Growth and Sustainability </h2>
                    <p className="text-light  mb-3">
                        We are WatuLink Advisory, the bridge between concepts and impact. Born in Tanzania, connected to
                        the world, we help organisations grow, adapt, and lead with confidence.
                    </p>
                    <p className="text-light  mb-3">
                        Whether you are launching a bold idea, expanding across borders, or rethinking your strategy, we
                        bring local intelligence, global perspective, and hands-on support to make it happen.
                    </p>
                </div>

            </div>
        </div>
    </section>

    </>
  )
}