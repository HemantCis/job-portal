import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Image from 'next/image';
import Link from 'next/link';


export default function Services() {
  return (
    <>
    <Header />
        <main>
            {/* Hero Section */}
            <section className="hero-section d-flex align-items-center mini-hero jobs-hero">
                <div className="hero-overlay"></div>
                <div className="small-container hero-content text-center px-3 px-md-0">
                <h1 className="fw-bold mb-3 text-50">Services</h1>
                <p className="pb-lg-3 fw-light">
                    We are WatuLink Advisory, the bridge between concepts and impact. Born in Tanzania,
                    connected to the world, we help organisations grow, adapt, and lead with confidence.
                    Whether you are launching a bold idea, expanding across borders, or rethinking your
                    strategy, we bring local intelligence, global perspective, and hands-on support to make
                    it happen.
                </p>
                </div>
            </section>

            {/* What We Do Section */}
            <section className="py-5 whatWeDoSection">
                <div className="inner-container">
                {/* Row 1 */}
                <div className="row align-items-center g-4 mb-5">
                    {/* Left Column */}
                    <div className="col-lg-6">
                    <h5 className="text-uppercase color-yellow fw-bold my-2">Our services</h5>
                    <h2 className="fw-bold heading-1">
                        Human <span className="color-red">Capital Development</span>
                    </h2>
                    <p>
                        How do you turn every team member into a driver of growth instead of a back-office
                        task? How do you ignite passion so each person steps up as an owner of your mission?
                        How do you shape talent into a competitive edge that keeps you steps ahead?
                    </p>
                    <p>
                        At the core of every thriving organisation is a workforce aligned to a shared purpose
                        and empowered to lead. Our Human Capital Development practice maps clear career
                        pathways, unlocks hidden leadership potential and builds a culture where ownership
                        fuels performance. Combining sector expertise with hands-on collaboration, we
                        transform your people into the catalyst for sustained innovation and resilience.
                    </p>
                    </div>

                    {/* Right Column */}
                    <div className="col-lg-6">
                    <Image
                        src="/images/service1.jpg"
                        alt="Career Community"
                        width={800}
                        height={600}
                        className="img-fluid rounded-4 w-100 shadow-sm"
                    />
                    </div>
                </div>

                {/* Row 2 */}
                <div className="row my-1 row-gap-4 py-lg-3 flex-xl-row flex-column-reverse">
                    {/* Left Column: Image Grid */}
                    <div className="col-xl-6 ps-xxl-4">
                    <div className="img-wrapper d-flex gap-md-3 gap-4">
                        {/* Left Side Images */}
                        <div className="d-flex flex-column gap-3 position-relative">
                        <Image
                            src="/images/service-grid1.jpg"
                            alt="Team Discussion"
                            width={400}
                            height={400}
                            className="img-fluid rounded-4 h-100 w-100 object-fit-cover shadow-sm"
                        />
                        <Image
                            src="/images/service-grid2.jpg"
                            alt="Team Discussion"
                            width={400}
                            height={400}
                            className="img-fluid rounded-4 h-100 w-100 object-fit-cover shadow-sm"
                        />
                        </div>

                        {/* Right Side Image with Badge */}
                        <div className="d-flex flex-column gap-3 imgWithBadge position-relative">
                        <div className="imageWrapper h-100 m-0 p-0">
                            <Image
                            src="/images/service-grid3.jpg"
                            alt="Team Discussion"
                            width={400}
                            height={400}
                            className="img-fluid rounded-4 h-100 w-100 object-fit-cover shadow-sm"
                            />
                        </div>
                        <div className="text-dark py-lg-4 p-3 bg-light-red d-flex align-items-center text-center justify-content-center rounded-4 gap-xl-3 gap-2">
                            <div className="badge-txtt">
                            <h4 className="text-uppercase mb-0 text-35 fw-semibold">1720+</h4>
                            <p className="m-0">Recruitment done</p>
                            <div className="userWrap d-flex justify-content-center mt-2 gap-1">
                                {["user1.png", "user2.png", "user3.png", "user4.png"].map((user, index) => (
                                <Image
                                    key={index}
                                    src={`/images/${user}`}
                                    alt="user"
                                    width={35}
                                    height={35}
                                    className="rounded-circle"
                                />
                                ))}
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="col-xl-6 align-self-center ps-lg-4">
                    <h5 className="text-uppercase color-yellow fw-bold my-2">What We Offer</h5>
                    <h2 className="fw-bold heading-1 mb-4">
                        Talent Acquisition <span className="color-red">and Workforce Management</span>
                    </h2>
                    <p className="mb-0">
                        We turn hiring into a strategic differentiator, drawing the best candidates and
                        delivering seamless onboarding and workforce support.
                    </p>
                    <p className="fw-semibold mt-2">How we help:</p>
                    <ul className="list-unstyled mt-4">
                        {[
                        "Recruitment services from mass hiring, headhunting, contract search, to executive search",
                        "End to end hiring operations including role design, candidate screening, interviews, background check, and onboarding",
                        "Outsourced staffing with full payroll administration, grievance handling, exit and benefits management",
                        "Expatriate compliance support from work permit processing, residence permits, talent distribution, records management to relocation logistics",
                        ].map((item, idx) => (
                        <li key={idx} className="mb-2 d-flex align-items-start gap-md-3 gap-2">
                            <i className="fa-regular fa-circle-check color-yellow mt-1"></i>
                            <span>{item}</span>
                        </li>
                        ))}
                    </ul>
                    </div>
                </div>
                </div>
            </section>

            {/* Our People Section */}
            <section className="py-5 bg-red-linear text-white">
                <div className="inner-container">
                <div className="text-center">
                    <h5 className="text-uppercase color-yellow fw-bold my-2">Our Solutions</h5>
                    <h2 className="fw-bold heading-1 mb-2">Our Approach</h2>
                    <p className="text-light mb-5 small-container">
                    We begin with candid conversations and data-driven diagnostics to surface hidden
                    strengths and friction points.
                    <br className="d-xl-block d-none" />
                    We co-design solutions in partnership with your teams so every initiative reflects your
                    culture and goals.
                    <br className="d-xl-block d-none" />
                    We embed practical tools, real-time analytics and peer-learning forums to accelerate
                    adoption.
                    <br className="d-xl-block d-none" />
                    Finally, we train internal champions to sustain momentum and evolve practices as your
                    needs change.
                    </p>
                </div>
                </div>
            </section>

            {/* Our learningAndTalentSection Section  */}
            <section className="py-5 learningAndTalentSection">
                <div className="inner-container">
                    <div className="row align-items-center flex-lg-row flex-column-reverse g-4 mb-5">
                        {/* Left Column: Content */}
                        <div className="col-lg-6 ">

                            <h5 className="text-uppercase color-yellow fw-bold my-2">WHAT WE OFFER</h5>
                            <h2 className="fw-bold heading-1 mb-3">
                                Learning and <span className="color-red">Talent Development</span>
                            </h2>
                            <p>
                                We embed continuous learning into your organisation, building leaders at every level and
                                equipping teams with critical skills for tomorrow's challenges.
                            </p>
                            <p className="fw-semibold mt-2 mb-1">How we help:-</p>
                            <ul className="list-unstyled mt-3">
                                <li className="mb-2 d-flex align-items-start gap-md-3 gap-2">
                                    <i className="fa-regular fa-circle-check color-yellow mt-1"></i>
                                    <span>
                                        Leadership academies for emerging, mid-level and executive talent
                                    </span>
                                </li>
                                <li className="mb-2 d-flex align-items-start gap-md-3 gap-2">
                                    <i className="fa-regular fa-circle-check color-yellow mt-1"></i>
                                    <span>
                                        Functional training in finance, operations, sales, procurement and more
                                    </span>
                                </li>
                                <li className="mb-2 d-flex align-items-start gap-md-3 gap-2">
                                    <i className="fa-regular fa-circle-check color-yellow mt-1"></i>
                                    <span>
                                        Soft skills development in communication, ethics, teamwork and emotional intelligence
                                    </span>
                                </li>
                                <li className="mb-2 d-flex align-items-start gap-md-3 gap-2">
                                    <i className="fa-regular fa-circle-check color-yellow mt-1"></i>
                                    <span>
                                        Competency-based programs aligned with occupational standards
                                    </span>
                                </li>
                                <li className="mb-2 d-flex align-items-start gap-md-3 gap-2">
                                    <i className="fa-regular fa-circle-check color-yellow mt-1"></i>
                                    <span>
                                        Onboarding and induction design with orientation programs, compliance training and team
                                        integration
                                    </span>
                                </li>
                                <li className="mb-2 d-flex align-items-start gap-md-3 gap-2">
                                    <i className="fa-regular fa-circle-check color-yellow mt-1"></i>
                                    <span>
                                        Career development planning via roadmaps, individual development plans and coaching
                                    </span>
                                </li>
                                <li className="mb-2 d-flex align-items-start gap-md-3 gap-2">
                                    <i className="fa-regular fa-circle-check color-yellow mt-1"></i>
                                    <span>
                                        Succession planning programs identifying critical roles, readiness assessments and
                                        mentoring
                                    </span>
                                </li>
                                <li className="mb-2 d-flex align-items-start gap-md-3 gap-2">
                                    <i className="fa-regular fa-circle-check color-yellow mt-1"></i>
                                    <span>
                                        E-learning systems and LMS deployment with content development and learner analytics
                                    </span>
                                </li>
                            </ul>

                        </div>
                        {/* Right Column: Image */}
                        <div className="col-lg-6 ps-xl-5">
                            <Image 
                                src="/images/service2.jpg" 
                                alt="Career Community" 
                                className="img-fluid rounded-4 w-100 shadow-sm"
                                width={600}
                                height={400}
                            />
                        </div>
                    </div>


                    <div className="row align-items-center g-4 mb-5">

                        {/* Left Column: Image */}
                        <div className="col-lg-6 pe-xl-5">
                            <Image 
                                src="/images/service3.jpg" 
                                alt="Career Community" 
                                className="img-fluid rounded-4 w-100 shadow-sm"
                                width={600}
                                height={400}
                            />
                        </div>

                        {/* Right Column: Content */}
                        <div className="col-lg-6">
                            <h5 className="text-uppercase color-yellow fw-bold my-2">WHAT WE OFFER</h5>
                            <h2 className="fw-bold heading-1 mb-3">
                                Employee Relations and <span className="color-red">Engagement</span>
                            </h2>
                            <p>
                                We create a work environment where people feel heard, valued and motivated to contribute their
                                best every day.
                            </p>
                            <p className="fw-semibold mt-2 mb-1">How we help:-</p>
                            <ul className="list-unstyled mt-3">
                                <li className="mb-2 d-flex align-items-start gap-md-3 gap-2">
                                    <i className="fa-regular fa-circle-check color-yellow mt-1"></i>
                                    <span>
                                        Grievance management systems and fair discipline frameworks
                                    </span>
                                </li>
                                <li className="mb-2 d-flex align-items-start gap-md-3 gap-2">
                                    <i className="fa-regular fa-circle-check color-yellow mt-1"></i>
                                    <span>
                                        Employee voice platforms including pulse surveys, feedback platforms and employee forums
                                    </span>
                                </li>
                                <li className="mb-2 d-flex align-items-start gap-md-3 gap-2">
                                    <i className="fa-regular fa-circle-check color-yellow mt-1"></i>
                                    <span>
                                        Wellbeing programs ranging from counseling sessions to community events
                                    </span>
                                </li>
                                <li className="mb-2 d-flex align-items-start gap-md-3 gap-2">
                                    <i className="fa-regular fa-circle-check color-yellow mt-1"></i>
                                    <span>
                                        Safety audits, emergency drills and compliance training
                                    </span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>


            {/* Our employeeEngagementSection Section  */}
            <section className="pb-5 employeeEngagementSection">
                <div className="inner-container">
                    <div className="row align-items-center flex-lg-row flex-column-reverse g-4 mb-5">
                        {/* Left Column: Content */}
                        <div className="col-lg-6 ">
                            <h5 className="text-uppercase color-yellow fw-bold my-2">WHAT WE OFFER</h5>
                            <h2 className="fw-bold heading-1 mb-3">
                                Organisational Design and <span className="color-red">HR Transformation</span>
                            </h2>
                            <p>
                                We align your structure, processes and roles so strategy flows smoothly through every level and
                                teams collaborate without friction.
                            </p>
                            <ul className="list-unstyled mt-3">
                                <li className="mb-2 d-flex align-items-start gap-md-3 gap-2">
                                    <i className="fa-regular fa-circle-check color-yellow mt-1"></i>
                                    <span>
                                        Structure audits, span of control reviews and reporting flow assessments
                                    </span>
                                </li>
                                <li className="mb-2 d-flex align-items-start gap-md-3 gap-2">
                                    <i className="fa-regular fa-circle-check color-yellow mt-1"></i>
                                    <span>
                                        Job profiling, pay band mapping and performance management frameworks
                                    </span>
                                </li>
                                <li className="mb-2 d-flex align-items-start gap-md-3 gap-2">
                                    <i className="fa-regular fa-circle-check color-yellow mt-1"></i>
                                    <span>
                                        Culture diagnostics, change roadmaps and champion network development
                                    </span>
                                </li>
                                <li className="mb-2 d-flex align-items-start gap-md-3 gap-2">
                                    <i className="fa-regular fa-circle-check color-yellow mt-1"></i>
                                    <span>
                                        Workforce planning, KPI and OKR design plus pilot implementation
                                    </span>
                                </li>
                                <li className="mb-2 d-flex align-items-start gap-md-3 gap-2">
                                    <i className="fa-regular fa-circle-check color-yellow mt-1"></i>
                                    <span>
                                        Change management consulting including roadmaps, communication plans and champion
                                        networks
                                    </span>
                                </li>
                            </ul>


                        </div>
                        {/* Right Column: Image */}
                        <div className="col-lg-6 ps-xl-5">
                            <Image 
                                src="/images/service4.png" 
                                alt="Career Community" 
                                className="img-fluid rounded-4 w-100"
                                width={600}
                                height={400}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Compliance section  */}
            <section className="py-5 bg-red-linear text-white complianceSection position-relative">
                <div className="inner-container">
                    <div className="row">
                        <div className="col-lg-6">
                            <Image 
                                src="/images/service5.jpg" 
                                alt="HR Compliance" 
                                className="img-fluid leftFullImage"
                                width={600}
                                height={400}
                            />
                        </div>
                        <div className="col-lg-6">
                            <h5 className="text-uppercase color-yellow fw-bold my-2">EXECUTIVE TALENT</h5>
                            <h2 className="fw-bold heading-1 mb-3">
                                HR Compliance, Policy and Audits
                            </h2>
                            <p>
                                We safeguard your organisation with clear policies, robust governance and audit-ready practices
                                that protect both your people and your reputation.
                            </p>
                            <p className="fw-semibold mt-2 mb-1">How we help:-</p>
                            <ul className="list-unstyled mt-3">
                                <li className="mb-2 d-flex align-items-start gap-md-3 gap-2">
                                    <i className="fa-regular fa-circle-check color-yellow mt-1"></i>
                                    <span>
                                        Co-create policy manuals from codes of conduct to remote work guidelines
                                    </span>
                                </li>
                                <li className="mb-2 d-flex align-items-start gap-md-3 gap-2">
                                    <i className="fa-regular fa-circle-check color-yellow mt-1"></i>
                                    <span>
                                        Legal audits, gap assessments and risk mitigation plans
                                    </span>
                                </li>
                                <li className="mb-2 d-flex align-items-start gap-md-3 gap-2">
                                    <i className="fa-regular fa-circle-check color-yellow mt-1"></i>
                                    <span>
                                        Labour law advisory on contracts, tribunal representation and terminations
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our whatToExpectSection Section  */}
            <section className="pb-5 whatToExpectSection">
                <div className="inner-container">
                    <div className="row align-items-center flex-lg-row flex-column-reverse g-4 ">
                        {/* Left Column: Content */}
                        <div className="col-lg-6 pe-lg-5 ">
                            <h5 className="text-uppercase color-yellow fw-bold my-2">wellbeing initiatives</h5>
                            <h2 className="fw-bold heading-1 mb-5">
                                What to Expect
                            </h2>

                            {/* Bootstrap Accordion Pixel-Perfect Match */}
                            <div className="accordion pe-md-5" id="benefitsAccordion">
                                {/* 1 */}
                                <div className="accordion-item rounded-4 mb-3 border-0">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button d-flex align-items-center gap-2 fw-bold fs-5 rounded-4"
                                            type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                            aria-expanded="true" aria-controls="collapseOne">
                                            <span className="me-2">
                                                <Image 
                                                    src="/images/faqIcon1.png" 
                                                    className="img-fluid" 
                                                    alt="Shorter Time to Hire"
                                                    width={30}
                                                    height={30}
                                                />
                                            </span>
                                            Shorter Time to Hire
                                            <span className="ms-auto accordion-chevron">
                                                <i className="fa fa-chevron-down"></i>
                                            </span>
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                        data-bs-parent="#benefitsAccordion">
                                        <div className="accordion-body pt-0 pb-3">
                                            Streamlined processes and a compelling employer narrative cut vacancy cycles, so
                                            you secure top talent faster.
                                        </div>
                                    </div>
                                </div>
                                {/* 2 */}
                                <div className="accordion-item rounded-4 mb-3 border-0">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button
                                            className="accordion-button collapsed d-flex align-items-center gap-2 fw-bold fs-5 rounded-4"
                                            type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                            aria-expanded="false" aria-controls="collapseTwo">
                                            <span className="me-2">
                                                <Image 
                                                    src="/images/faqIcon2.png" 
                                                    className="img-fluid" 
                                                    alt="Higher Engagement and Retention"
                                                    width={30}
                                                    height={30}
                                                />
                                            </span>
                                            Higher Engagement and Retention
                                            <span className="ms-auto accordion-chevron">
                                                <i className="fa fa-chevron-down"></i>
                                            </span>
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                        data-bs-parent="#benefitsAccordion">
                                        <div className="accordion-body pt-0 pb-3">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, praesentium!
                                        </div>
                                    </div>
                                </div>
                                {/* 3 */}
                                <div className="accordion-item rounded-4 mb-3 border-0">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button
                                            className="accordion-button collapsed d-flex align-items-center gap-2 fw-bold fs-5 rounded-4"
                                            type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                            aria-expanded="false" aria-controls="collapseThree">
                                            <span className="me-2">
                                                <Image 
                                                    src="/images/faqIcon3.png" 
                                                    className="img-fluid" 
                                                    alt="Deeper Leadership Bench Strength"
                                                    width={30}
                                                    height={30}
                                                />
                                            </span>
                                            Deeper Leadership Bench Strength
                                            <span className="ms-auto accordion-chevron">
                                                <i className="fa fa-chevron-down"></i>
                                            </span>
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                        data-bs-parent="#benefitsAccordion">
                                        <div className="accordion-body pt-0 pb-3">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, praesentium!
                                        </div>
                                    </div>
                                </div>
                                {/* 4 */}
                                <div className="accordion-item rounded-4 mb-3 border-0">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button
                                            className="accordion-button collapsed d-flex align-items-center gap-2 fw-bold fs-5 rounded-4"
                                            type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                            aria-expanded="false" aria-controls="collapseFour">
                                            <span className="me-2">
                                                <Image 
                                                    src="/images/faqIcon4.png" 
                                                    className="img-fluid" 
                                                    alt="Productivity Gains"
                                                    width={30}
                                                    height={30}
                                                />
                                            </span>
                                            Productivity Gains
                                            <span className="ms-auto accordion-chevron">
                                                <i className="fa fa-chevron-down"></i>
                                            </span>
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                                        data-bs-parent="#benefitsAccordion">
                                        <div className="accordion-body pt-0 pb-3">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, praesentium!
                                        </div>
                                    </div>
                                </div>
                                {/* 5 */}
                                <div className="accordion-item rounded-4 mb-3 border-0">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button
                                            className="accordion-button collapsed d-flex align-items-center gap-2 fw-bold fs-5 rounded-4"
                                            type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive"
                                            aria-expanded="false" aria-controls="collapseFive">
                                            <span className="me-2">
                                                <Image 
                                                    src="/images/faqIcon1.png" 
                                                    className="img-fluid" 
                                                    alt="Stronger Compliance and Governance"
                                                    width={30}
                                                    height={30}
                                                />
                                            </span>
                                            Stronger Compliance and Governance
                                            <span className="ms-auto accordion-chevron">
                                                <i className="fa fa-chevron-down"></i>
                                            </span>
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                                        data-bs-parent="#benefitsAccordion">
                                        <div className="accordion-body pt-0 pb-3">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, praesentium!
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Right Column: Image */}
                        <div className="col-lg-6 ps-xl-5">
                            <Image 
                                src="/images/service6.png" 
                                alt="Career Community" 
                                className="img-fluid rounded-4 w-100"
                                width={600}
                                height={400}
                            />
                        </div>
                    </div>
                </div>
            </section>
            
        </main>
    <Footer/>
    </>
  );
}
