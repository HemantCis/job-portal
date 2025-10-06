'use client'

import Image from 'next/image'

const steps = [
  {
    number: "01",
    icon: "/images/step1.svg",
    title: "Foresight that Anticipates Change",
    description: "We prepare you not only for the present but for the shifts that define the future."
  },
  {
    number: "02",
    icon: "/images/step2.svg",
    title: "Human Centered Intelligence",
    description: "We combine data with empathy, creating strategies that are innovative and grounded in real human impact."
  },
  {
    number: "03",
    icon: "/images/step3.svg",
    title: "Sustainable Progress",
    description: "We design growth that lasts, balancing performance with responsibility to people, markets, and the future."
  }
]

export default function StepsSection() {
  return (
    <section className="py-5">
    <div className="inner-container ">
        <div className="text-center">
            <h5 className="text-uppercase color-yellow fw-bold my-2">How It’s Possible</h5>
            <h2 className="fw-bold heading-1 mb-2">
                Our Three Pillars for <span className="color-red">Lasting Impact</span>
            </h2>
            <p className="mb-5">
                The foundations that guide how we solve today’s challenges and <br className="d-lg-block d-none" />
                unlock tomorrow’s opportunities.
            </p>
        </div>

        <div className="stepsWrapper row m-0 row-gap-lg-0 row-gap-4 justify-content-between">
            <div className="step-card col-lg-3 col-md-4 col-sm-6 down-curvy-arrow">
                <div className="step-num">
                    01
                </div>
                <div className="step-iconbox mb-4 ">
                    <div className="step-icon">
                        <img src="./images/step1.svg" alt="Job Analysis" className="img-fluid"/>
                    </div>
                </div>
                <div className="step-content text-center">
                    <h5 className="step-title mb-2 text-20">
                        Foresight that Anticipates Change
                    </h5>
                    <p>
                        We prepare you not only for the present but for the shifts that define the future.
                    </p>
                </div>
            </div>

            <div className="step-card col-lg-3 col-md-4 col-sm-6">
                <div className="step-num">
                    02
                </div>
                <div className="step-iconbox mb-4 up-curvy-arrow">
                    <div className="step-icon">
                        <img src="./images/step2.svg" alt="Review" className="img-fluid"/>
                    </div>
                </div>
                <div className="step-content text-center">
                    <h5 className="step-title mb-2 text-20">
                        Human Centered Intelligence
                    </h5>
                    <p>
                        We combine data with empathy, creating strategies that are innovative and grounded in real
                        human impact.
                    </p>
                </div>
            </div>

            <div className="step-card col-lg-3 col-md-4 col-sm-6">
                <div className="step-num">
                    03
                </div>
                <div className="step-iconbox mb-4">
                    <div className="step-icon">
                        <img src="./images/step3.svg" alt="Job location" className="img-fluid"/>
                    </div>
                </div>
                <div className="step-content text-center">
                    <h5 className="step-title mb-2 text-20">
                        Sustainable Progress
                    </h5>
                    <p>
                        We design growth that lasts, balancing performance with responsibility to people, markets,
                        and the future.
                    </p>
                </div>
            </div>
        </div>

    </div>
</section>
  )
}