import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Image from "next/image";
import Link from "next/link";

export default function LearnSection() {
  const courses = [
    { src: "/images/learn1.png", title: "How to prepare a successful job application", students: 185 },
    { src: "/images/learn2.png", title: "How to prepare a successful job application", students: 185 },
    { src: "/images/learn3.png", title: "How to prepare a successful job application", students: 185 },
    { src: "/images/learn4.png", title: "How to prepare a successful job application", students: 185 },
    { src: "/images/learn5.png", title: "How to prepare a successful job application", students: 185 },
    { src: "/images/learn6.png", title: "How to prepare a successful job application", students: 185 },
    { src: "/images/learn7.png", title: "How to prepare a successful job application", students: 185 },
    { src: "/images/learn8.png", title: "How to prepare a successful job application", students: 185 },
    { src: "/images/learn9.png", title: "How to prepare a successful job application", students: 185 },
    { src: "/images/learn10.png", title: "How to prepare a successful job application", students: 185 },
    { src: "/images/learn11.png", title: "How to prepare a successful job application", students: 185 },
    { src: "/images/learn12.png", title: "How to prepare a successful job application", students: 185 },
  ];

  return (
    <>
    <Header />
        <main>
      {/* Hero Section */}
      <section className="hero-section d-flex align-items-center mini-hero jobs-hero">
        <div className="hero-overlay"></div>
        <div className="inner-container hero-content text-center px-3 px-md-0">
          <h1 className="fw-bold mb-3 text-50">Never Stop Leveling Up!</h1>
          <p className="pb-lg-3 fw-light">
            WatuTalent Learn brings you world-class courses and practical career planning in
            <br className="d-lg-block d-none" /> one place. Pick a path, learn at your pace, and turn skills into opportunities.
          </p>
        </div>
      </section>

      {/* Courses Section */}
      <section className="jobs-section py-5">
        <div className="custom-container">
          <div className="row row-gap-4">
            {/* Filters Sidebar */}
            <div className="col-lg-3">
              <div className="filters-sidebar">
                <div className="filter-header d-flex justify-content-between align-items-center p-xl-4 p-3 border-bottom">
                  <h5 className="m-0 text-20">Search Filter</h5>
                  <a href="#" className="text-16 text-muted">Clear All</a>
                </div>
                <div className="filter-group px-xl-4 px-md-3 p-2 border-bottom py-md-4 py-3">
                  <input type="text" className="form-control mb-3" placeholder="Search By Skills, Keyword..." />
                  <input type="text" className="form-control" placeholder="Location..." />
                </div>
                <div className="accordion accordion-flush" id="filterAccordion">
                  <div className="accordion-item shadow-none px-xl-4 px-md-3 p-2">
                    <h2 className="accordion-header" id="flush-headingTwo">
                      <button
                        className="accordion-button justify-content-between collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="true"
                        aria-controls="flush-collapseTwo"
                      >
                        Course Categories
                        <span className="accordion-icon color-yellow">
                          <i className="fa-solid fa-angle-up"></i>
                        </span>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse show"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#filterAccordion"
                    >
                      <div className="accordion-body pt-0 px-0">
                        {[
                          "Engineering Jobs (45)",
                          "Web Development (20)",
                          "SEO Services (43)",
                          "Financial Services (17)",
                          "Food, Nutrition Jobs (25)",
                          "Accounting & Finance (35)",
                          "Healthcare & Medical (45)",
                          "Customer Support (25)",
                          "Construction Jobs (45)",
                          "Media & Art (60)",
                        ].map((category, idx) => (
                          <div key={idx} className="form-check">
                            <input className="form-check-input" type="checkbox" id={`cat-${idx}`} />
                            <label className="form-check-label" htmlFor={`cat-${idx}`}>
                              {category}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Courses Cards */}
            <div className="col-lg-9">
              <div className="job-listings">
                <div className="filterSelectWrapper d-flex flex-md-row flex-column row-gap-2 justify-content-between align-items-center mb-4">
                  <span className="text-muted">Showing 1 to 12 of 32 Results</span>
                  <div className="d-flex">
                    <select className="form-select me-2 sortBySelect">
                      <option>Sort by Default</option>
                      <option value="1">Newest</option>
                      <option value="2">Oldest</option>
                    </select>
                    <select className="form-select">
                      <option>8 Per Page</option>
                      <option value="1">12 Per Page</option>
                      <option value="2">16 Per Page</option>
                    </select>
                  </div>
                </div>

                <div className="row">
                  {courses.map((course, idx) => (
                    <div key={idx} className="col-md-4 col-sm-6 mb-4">
                      <div className="card job-card learn-card">
                        <Image
                          src={course.src}
                          alt={course.title}
                          width={400}
                          height={250}
                          className="card-img-top rounded-top-4 w-100 h-100 object-fit-cover rounded-top-3"
                        />
                        <div className="card-body">
                          <h5 className="card-title mb-2 fw-semibold">{course.title}</h5>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="ratingStars">
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star"></i>
                              <i className="fa-solid fa-star-half-stroke"></i>
                            </div>
                            <span
                              className="badge bg-yellow text-dark rounded-pill px-3 py-2"
                              style={{ fontSize: "0.95rem" }}
                            >
                              {course.students} Students
                            </span>
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
                      <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">
                        &laquo;
                      </a>
                    </li>
                    {[1, 2, 3, 4, 5].map((page) => (
                      <li key={page} className={`page-item ${page === 2 ? "active" : ""}`}>
                        <a className="page-link" href="#">
                          {page}
                        </a>
                      </li>
                    ))}
                    <li className="page-item">
                      <a className="page-link" href="#">
                        &raquo;
                      </a>
                    </li>
                  </ul>
                </nav>
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
