import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function About() {
    return (  
        <>
        <Header />
        <main>          
            <section className="hero-section d-flex align-items-center mini-hero jobs-hero">
                <div className="hero-overlay"></div>
                <div className="small-container hero-content text-center px-3 px-md-0">
                    <h1 className="fw-bold mb-3 text-50">
                        About Us
                    </h1>
                    <p className="pb-lg-3 fw-light ">
                        We are WatuLink Advisory, the bridge between concepts and impact. Born in Tanzania, connected to the
                        world, we help organisations grow, adapt, and lead with confidence. Whether you are launching a bold
                        idea, expanding across borders, or rethinking your strategy, we bring local intelligence, global
                        perspective, and hands-on support to make it happen.
                    </p>
                </div>
            </section>
        
            <section className="py-5 whatWeDoSection">
                <div className="inner-container">
                    <div className="row my-1 row-gap-4 py-lg-3 flex-xl-row flex-column-reverse">

                        {/* Left Column */}
                        <div className="col-xl-6 align-self-center ps-lg-4">
                            <h5 className="text-uppercase color-yellow fw-bold my-2">What We Do</h5>
                            <h2 className="fw-bold heading-1  mb-4"> We Deliver Tailored Advisory Services <span
                                    className="color-red">Across Four Core Areas:-</span></h2>

                            <ul className="list-unstyled mt-4 mob-list">
                                <li className="mb-2 d-flex align-items-start gap-md-3 gap-2">
                                    <Image 
                                        src="/images/service1.svg" 
                                        className="img-fluid" 
                                        alt="Human Capital Development"
                                        width={40}
                                        height={40}
                                    />
                                    <div>
                                        <h5>Human Capital Development</h5>
                                        <p>We specialize in talent search, onboarding, retention, and outsourcing while also
                                            building leadership pipelines, high-performing teams, and engaged workplace
                                            cultures.</p>
                                    </div>
                                </li>
                                <li className="mb-2 d-flex align-items-start gap-md-3 gap-2">
                                    <Image 
                                        src="/images/service2.svg" 
                                        className="img-fluid" 
                                        alt="Business Advisory"
                                        width={40}
                                        height={40}
                                    />
                                    <div>
                                        <h5>Business Advisory</h5>
                                        <p>We provide market entry support, operational improvement, technology and digital
                                            solutions, financial planning, and risk management with insights that drive growth,
                                            resilience, and long-term competitiveness.</p>
                                    </div>
                                </li>
                                <li className="mb-2 d-flex align-items-start gap-md-3 gap-2">
                                    <Image 
                                        src="/images/service3.svg" 
                                        className="img-fluid" 
                                        alt="Localization Support"
                                        width={40}
                                        height={40}
                                    />
                                    <div>
                                        <h5>Localization Support</h5>
                                        <p>We help brands adapt products, services, and operations to local markets by ensuring
                                            cultural authenticity, regulatory alignment, and strong consumer resonance.</p>
                                    </div>
                                </li>
                                <li className="mb-2 d-flex align-items-start gap-md-3 gap-2">
                                    <Image 
                                        src="/images/service4.svg" 
                                        className="img-fluid" 
                                        alt="Political Advisory, Strategy, & Governance"
                                        width={40}
                                        height={40}
                                    />
                                    <div>
                                        <h5>Political Advisory, Strategy, & Governance</h5>
                                        <p>We guide organizations and people through policy navigation, influence building, and
                                            governance reform while strengthening institutions, stakeholder trust, and strategic
                                            impact.</p>
                                    </div>
                                </li>
                            </ul>

                        </div>

                        {/* Right Column */}
                        <div className="col-xl-6 ps-xxl-4">
                            <div className="img-wrapper d-flex gap-md-3 gap-4">

                                <div className="d-flex flex-column gap-3  imgWithBadge position-relative ">
                                    <div className="imageWrapper h-100 m-0 p-0 ">
                                        <Image 
                                            src="/images/aboutp1.png" 
                                            alt="Team Discussion"
                                            className="img-fluid rounded-4 h-100 w-100 object-fit-cover shadow-sm"
                                            width={300}
                                            height={400}
                                        />
                                    </div>

                                    <div
                                        className="text-dark py-lg-4 p-3 bg-light-red  d-flex align-items-center justify-content-center rounded-3  gap-xl-3 gap-2 badgeBox">
                                        <Image 
                                            src="/images/badge24-7.svg" 
                                            alt="badge" 
                                            className="img-fluid"
                                            width={50}
                                            height={50}
                                        />

                                        <div className="badge-txtt">
                                            <h4 className="text-uppercase mb-0 text-45 fw-semibold">24/7 </h4>
                                            <p className="m-0">Guide & Support</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex flex-column gap-3  imgWithBadge position-relative ">
                                    <div
                                        className="text-dark py-lg-4 p-3 bg-light-red  d-flex align-items-center justify-content-center rounded-3  gap-xl-3 gap-2 badgeBox">
                                        <Image 
                                            src="/images/badge-case.svg" 
                                            alt="badge" 
                                            className="img-fluid"
                                            width={50}
                                            height={50}
                                        />
                                        <div className="badge-txtt">
                                            <h4 className="text-uppercase mb-0 text-45 fw-semibold">100+ </h4>
                                            <p className="m-0">A Century of Combined Expertise from Our Trusted Advisors.</p>
                                        </div>
                                    </div>

                                    <div className="imageWrapper h-100 m-0 p-0 ">
                                        <Image 
                                            src="/images/aboutp2.png" 
                                            alt="Team Discussion"
                                            className="img-fluid rounded-4 h-100 w-100 object-fit-cover shadow-sm"
                                            width={300}
                                            height={400}
                                        />
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>


                    <div className="row align-items-center g-4">

                        {/* Left Column: Image */}
                        <div className="col-lg-6">
                            <Image 
                                src="/images/aboutp3.png" 
                                alt="Career Community" 
                                className="img-fluid rounded-4 w-100 shadow-sm"
                                width={600}
                                height={400}
                            />
                        </div>

                        {/* Right Column: Content */}
                        <div className="col-lg-6">

                            <h5 className="text-uppercase color-yellow fw-bold my-2">what we believe</h5>
                            <h2 className="fw-bold heading-1 "> The Foundation of Our <span className="color-red">Partnerships and
                                    Impact.</span></h2>
                            <p>We believe progress happens when knowledge meets action, and when solutions respect both the
                                numbers and the people they impact.</p>

                            <ul className="list-unstyled mt-4">
                                <li className="mb-2 d-flex align-items-center gap-md-3 gap-2">
                                    <i className="fa-regular fa-circle-check text-danger"></i>
                                    We believe in partnership over transactions.
                                </li>
                                <li className="mb-2 d-flex align-items-center gap-md-3 gap-2">
                                    <i className="fa-regular fa-circle-check text-danger"></i>
                                    We believe in context where every market and organisation is unique.
                                </li>
                                <li className="mb-2 d-flex align-items-center gap-md-3 gap-2">
                                    <i className="fa-regular fa-circle-check text-danger"></i>
                                    We believe in integrity as the foundation for lasting success.
                                </li>
                                <li className="mb-2 d-flex align-items-center gap-md-3 gap-2">
                                    <i className="fa-regular fa-circle-check text-danger"></i>
                                    We believe that growth and responsibility can go hand in hand.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 bg-red-linear text-white">
                <div className="inner-container">
                    <div className="text-center">
                        <h5 className="text-uppercase color-yellow fw-bold my-2">Our People</h5>
                        <h2 className="fw-bold heading-1 mb-2">
                            Our Team
                        </h2>
                        <p className="text-light mb-5 small-container">
                            Our team brings together seasoned professionals with deep sector expertise in Tanzania and across
                            the region,<br className="d-xl-block d-none" /> alongside international advisors with global experience.
                            We are strategists, analysts, trainers, policy experts, and <br className="d-xl-block d-none" />
                            change-makers united by a shared commitment to impact. We work side-by-side with our clients,
                            embedding<br className="d-xl-block d-none" /> ourselves in their challenges so we can co-create solutions
                            that truly work.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-5 OurPMVSection">
                <div className="inner-container">
                    <div className="row my-1 row-gap-4 py-lg-3 flex-xl-row flex-column-reverse">

                        {/* Left Column */}
                        <div className="col-xl-7 align-self-center ps-lg-4">
                            <h2 className="fw-bold heading-1">Our Purpose</h2>
                            <p>To connect ideas, people, and opportunities that drive sustainable growth and positive change in
                                Tanzania, East Africa, and beyond.</p>

                            <h2 className="fw-bold heading-1">Our Mission</h2>
                            <p>To empower organizations and people navigating complexity by delivering strategies that are
                                smart, practical, purpose-driven, and evidence-based, designed to create real-world impact.</p>

                            <h2 className="fw-bold heading-1">Our Values</h2>
                            <ul className="list-unstyled">
                                <li className="mb-2 d-flex align-items-center gap-md-3 gap-2">
                                    <Image 
                                        src="/images/value-ap1.svg" 
                                        className="img-fluid" 
                                        alt="Integrity"
                                        width={30}
                                        height={30}
                                    />
                                    Integrity - We keep our word.
                                </li>
                                <li className="mb-2 d-flex align-items-center gap-md-3 gap-2">
                                    <Image 
                                        src="/images/value-ap2.svg" 
                                        className="img-fluid" 
                                        alt="Excellence"
                                        width={30}
                                        height={30}
                                    />
                                    Excellence - Good isn't enough; we aim higher.
                                </li>
                                <li className="mb-2 d-flex align-items-center gap-md-3 gap-2">
                                    <Image 
                                        src="/images/value-ap3.svg" 
                                        className="img-fluid" 
                                        alt="Collaboration"
                                        width={30}
                                        height={30}
                                    />
                                    Collaboration - Success is a team sport.
                                </li>
                                <li className="mb-2 d-flex align-items-center gap-md-3 gap-2">
                                    <Image 
                                        src="/images/value-ap4.svg" 
                                        className="img-fluid" 
                                        alt="Innovation"
                                        width={30}
                                        height={30}
                                    />
                                    Innovation - We think differently so you can stay ahead.
                                </li>
                                <li className="mb-2 d-flex align-items-center gap-md-3 gap-2">
                                    <Image 
                                        src="/images/value-ap5.svg" 
                                        className="img-fluid" 
                                        alt="Impact"
                                        width={30}
                                        height={30}
                                    />
                                    Impact - We measure our work by the difference it makes.
                                </li>
                            </ul>
                        </div>

                        {/* Right Column */}
                        <div className="col-xl-5 ps-xxl-4">
                            <div className="img-wrapper d-flex gap-md-3 gap-4">

                                <div className="d-flex flex-column gap-3 w-100 imgWithBadge position-relative ">
                                    <div className="d-flex flex-column gap-3  imgWithBadge position-relative ">
                                        <div className="imageWrapper h-100 m-0 p-0 ">
                                            <Image 
                                                src="/images/aboutp4.png" 
                                                alt="Team Discussion"
                                                className="img-fluid rounded-4 h-100 w-100 object-fit-cover shadow-sm"
                                                width={300}
                                                height={400}
                                            />
                                        </div>

                                        <div
                                            className="text-dark py-lg-4 p-3 bg-light-red  d-flex align-items-center justify-content-center rounded-3  gap-xl-3 gap-2 badgeBox">
                                            <Image 
                                                src="/images/badge-user.svg" 
                                                alt="badge" 
                                                className="img-fluid"
                                                width={50}
                                                height={50}
                                            />

                                            <div className="badge-txtt">
                                                <h4 className="text-uppercase mb-0 text-45 fw-semibold">50+ </h4>
                                                <p className="m-0">Strong Team</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-100">
                                    <div className="d-flex flex-column gap-4 h-100">
                                        <Image 
                                            src="/images/aboutp5.png" 
                                            alt="Team Discussion"
                                            className="img-fluid rounded-4 h-100 object-fit-cover shadow-sm"
                                            width={300}
                                            height={500}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
        </main>
        <Footer />
        </>
    );
}