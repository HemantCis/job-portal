'use client'

import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="hero-section d-flex align-items-center">
      <div className="hero-overlay"></div>
      <div className="inner-container hero-content text-center px-3 px-md-3">
        <h1 className="fw-bold mb-3 text-50 text-white">
          We are a purpose-driven strategy and<br className="d-lg-block d-none" />
          growth partner, blending deep local insight.
          global expertise to fuel sustainable growth and lasting resilience.
        </h1>

        <div className="d-flex mt-lg-5 mt-4 flex-column align-items-center flex-sm-row justify-content-center gap-3">
          <Link href="/about" className="btn btn-danger px-4 py-2 fw-semibold text-uppercase">
            Read More
          </Link>
          <Link href="/contact" className="btn btn-outline-danger bg-white px-4 py-2 fw-semibold text-uppercase">
            Connect with Us
          </Link>
        </div>
      </div>
    </section>
  )
}