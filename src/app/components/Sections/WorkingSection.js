import Link from 'next/link'

export default function WorkingSection() {
  return (
    <section className="workingSection py-5 text-white ">
    <div className="inner-container text-center">
        <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
                <h5 className="text-uppercase color-yellow fw-bold my-2">Working With Us</h5>
                <h2 className="fw-bold heading-1 mb-2">
                    What if you had a frontrow seat to <br className="d-xl-block d-none" /> the ideas shaping tomorrow?
                </h2>
                <p className="text-light ">
                    Subscribe to our newsletter and receive exclusive strategy insights, talent <br
                        className="d-lg-block d-none" /> trends and market intelligence delivered straight to your
                    inbox.
                </p>
                <div className="mt-3 d-flex flex-column flex-sm-row justify-content-center gap-3">
                    <a href="#upload" className="btn btn-dark px-4 py-2 fw-semibold text-uppercase">DISCOVER
                        SOLUTIONS</a>
                    <a href="#join" className="btn btn-outline-dark bg-white px-4 py-2 fw-semibold text-uppercase">
                        SUBSCRIBE
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}