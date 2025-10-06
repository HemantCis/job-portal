import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Jobs() {
    return (
    <>
    <Header />
        <main>
            {/* hero form section  */}
            <section className="hero-section d-flex align-items-center mini-hero jobs-hero">
                <div className="hero-overlay"></div>
                <div className="inner-container hero-content text-center px-3 px-md-0">
                    <h1 className="fw-bold mb-3 text-50">
                        Where will Your Career Take You?
                    </h1>
                    <p className="pb-lg-3 fw-light ">
                        Build a career where your strengths matter, your curiosity is welcomed, and your work creates real<br className="d-lg-block d-none"/> outcomes for clients and communities. Join talented people who support one another to do the best<br className="d-lg-block d-none"/> work of their lives.
                    </p>
                </div>
            </section>

            {/* section to be added here */}
            <section className="jobs-section py-5">
                <div className="custom-container">
                    <div className="row row-gap-4">
                        {/* Filters Sidebar */}
                        <div className="col-lg-3">
                            <div className="filters-sidebar">
                                <div className="filter-header d-flex justify-content-between align-items-center p-xl-4 p-3 border-bottom ">
                                    <h5 className="m-0 text-20">Search Filter</h5>
                                    <Link href="#" className="text-16 text-muted">Clear All</Link>
                                </div>
                                
                                <div className="filter-group px-xl-4 px-md-3 p-2 border-bottom py-md-4 py-3">
                                    <input type="text" className="form-control mb-3" placeholder="Search By Skills, Keyword..." />
                                    <input type="text" className="form-control" placeholder="Location..." />
                                </div>
                                
                                <div className="accordion accordion-flush " id="filterAccordion">
                                    <div className="accordion-item border-bottom px-xl-4 px-md-3 p-2">
                                        <h2 className="accordion-header" id="flush-headingOne">
                                            <button className="accordion-button justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="true" aria-controls="flush-collapseOne">
                                                Date Posted
                                                <span className="accordion-icon color-yellow">
                                                    <i className="fa-solid fa-angle-up"></i>
                                                </span>
                                            </button>
                                        </h2>
                                        <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#filterAccordion">
                                            <div className="accordion-body pt-0 px-0">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="datePosted" id="lastHour" defaultChecked />
                                                    <label className="form-check-label" htmlFor="lastHour">
                                                        Last Hour
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="datePosted" id="last24" />
                                                    <label className="form-check-label" htmlFor="last24">
                                                        Last 24 hours
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="datePosted" id="last7" />
                                                    <label className="form-check-label" htmlFor="last7">
                                                        Last 7 days
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="datePosted" id="last14" />
                                                    <label className="form-check-label" htmlFor="last14">
                                                        Last 14 days
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="datePosted" id="last30" />
                                                    <label className="form-check-label" htmlFor="last30">
                                                        Last 30 days
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item border-bottom px-xl-4 px-md-3 p-2">
                                        <h2 className="accordion-header" id="flush-headingTwo">
                                            <button className="accordion-button justify-content-between collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                Job Categories
                                                <span className="accordion-icon color-yellow">
                                                    <i className="fa-solid fa-angle-up"></i>
                                                </span>
                                            </button>
                                        </h2>
                                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#filterAccordion">
                                            <div className="accordion-body pt-0 px-0">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="engineering" />
                                                    <label className="form-check-label" htmlFor="engineering">
                                                        Engineering Jobs (45)
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="development" />
                                                    <label className="form-check-label" htmlFor="development">
                                                        Web Development (20)
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="seo" />
                                                    <label className="form-check-label" htmlFor="seo">
                                                        SEO Services (43)
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="financial" />
                                                    <label className="form-check-label" htmlFor="financial">
                                                        Financial Services (17)
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="food" />
                                                    <label className="form-check-label" htmlFor="food">
                                                        Food, Nutrition Jobs (25)
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="accounting" />
                                                    <label className="form-check-label" htmlFor="accounting">
                                                        Accounting & Finance (35)
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="healthcare" />
                                                    <label className="form-check-label" htmlFor="healthcare">
                                                        Healthcare & Medical (45)
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="support" />
                                                    <label className="form-check-label" htmlFor="support">
                                                        Customer Support (25)
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="construction" />
                                                    <label className="form-check-label" htmlFor="construction">
                                                        Construction Jobs (45)
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="media" />
                                                    <label className="form-check-label" htmlFor="media">
                                                        Media & Art (60)
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item border-bottom px-xl-4 px-md-3 p-2">
                                        <h2 className="accordion-header" id="flush-headingThree">
                                            <button className="accordion-button justify-content-between collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                Job Categories
                                                <span className="accordion-icon color-yellow">
                                                    <i className="fa-solid fa-angle-up"></i>
                                                </span>
                                            </button>
                                        </h2>
                                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#filterAccordion">
                                            <div className="accordion-body pt-0 px-0">Placeholder content for this accordion section.</div>
                                        </div>
                                    </div>
                                    <div className="accordion-item border-bottom px-xl-4 px-md-3 p-2">
                                        <h2 className="accordion-header" id="flush-headingFour">
                                            <button className="accordion-button justify-content-between collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                Search by Region/City
                                                <span className="accordion-icon color-yellow">
                                                    <i className="fa-solid fa-angle-up"></i>
                                                </span>
                                            </button>
                                        </h2>
                                        <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#filterAccordion">
                                            <div className="accordion-body pt-0 px-0">Placeholder content for this accordion section.</div>
                                        </div>
                                    </div>
                                    <div className="accordion-item border-bottom px-xl-4 px-md-3 p-2">
                                        <h2 className="accordion-header" id="flush-headingFive">
                                            <button className="accordion-button justify-content-between collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                                Experience
                                                <span className="accordion-icon color-yellow">
                                                    <i className="fa-solid fa-angle-up"></i>
                                                </span>
                                            </button>
                                        </h2>
                                        <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#filterAccordion">
                                            <div className="accordion-body pt-0 px-0">Placeholder content for this accordion section.</div>
                                        </div>
                                    </div>
                                    <div className="accordion-item border-bottom px-xl-4 px-md-3 p-2">
                                        <h2 className="accordion-header" id="flush-headingSix">
                                            <button className="accordion-button justify-content-between collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                                Job Type
                                                <span className="accordion-icon color-yellow">
                                                    <i className="fa-solid fa-angle-up"></i>
                                                </span>
                                            </button>
                                        </h2>
                                        <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#filterAccordion">
                                            <div className="accordion-body pt-0 px-0">Placeholder content for this accordion section.</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-grid p-4">
                                    <button className="btn btn-danger text-uppercase w-100">SEARCH JOBS</button>
                                </div>
                            </div>
                        </div>

                        {/* Job Listings */}
                        <div className="col-lg-9">
                            <div className="job-listings">
                                <div className="filterSelectWrapper d-flex flex-md-row flex-column row-gap-2 justify-content-between align-items-center mb-4">
                                    <span className="text-muted">Showing 1 to 12 of 32 Results</span>
                                    <div className="d-flex">
                                        <select className="form-select me-2 sortBySelect">
                                            <option defaultValue>Sort by Default</option>
                                            <option value="1">Newest</option>
                                            <option value="2">Oldest</option>
                                        </select>
                                        <select className="form-select">
                                            <option defaultValue>8 Per Page</option>
                                            <option value="1">12 Per Page</option>
                                            <option value="2">16 Per Page</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    {/* Job Cards */}
                                    {[
                                        "trip-adviser", "shopify", "google", "mozilla", "airbnb", 
                                        "comp-logo1", "udemy", "upwork", "comp-logo2", "trip-adviser",
                                        "shopify", "google", "mozilla", "airbnb", "comp-logo1"
                                    ].map((company, index) => (
                                        <div key={index} className="col-md-4 col-sm-6 mb-4">
                                            <div className="card job-card">
                                                <div className="card-body text-center">
                                                    <Image 
                                                        src={`/images/${company}.png`} 
                                                        alt={`${company} Logo`} 
                                                        className="company-logo mb-3 img-fluid"
                                                        width={80}
                                                        height={80}
                                                    />
                                                    <h5 className="card-title">Jr. PHP Developer</h5>
                                                    <p className="card-text text-muted">CSS3, HTML 5, jQuery, Bootstrap</p>
                                                    <div className="d-flex justify-content-between align-items-center mt-lg-5 mt-4">
                                                        <span className="salary">$80 - 100K</span>
                                                        <Link href="#" className="skill-tag text-14 text-decoration-none text-light bg-yellow px-3 py-1 rounded-pill">
                                                            12 open
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {/* Pagination */}
                                <nav aria-label="Page navigation">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item disabled">
                                            <Link className="page-link" href="#" tabIndex={-1} aria-disabled="true">&laquo;</Link>
                                        </li>
                                        <li className="page-item"><Link className="page-link" href="#">1</Link></li>
                                        <li className="page-item active" aria-current="page">
                                            <Link className="page-link" href="#">2</Link>
                                        </li>
                                        <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                                        <li className="page-item"><Link className="page-link" href="#">4</Link></li>
                                        <li className="page-item"><Link className="page-link" href="#">5</Link></li>
                                        <li className="page-item">
                                            <Link className="page-link" href="#">&raquo;</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </main>
    <Footer/>
    </>       
    );
}