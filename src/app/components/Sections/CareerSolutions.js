'use client'

import Link from 'next/link'
import Image from 'next/image'

const insights = [
  {
    id: 1,
    image: "/images/management.jpg",
    category: "Management",
    title: "Placement Driving Growth",
  },
  {
    id: 2,
    image: "/images/technology.jpg",
    category: "Technology",
    title: "Placement Driving Growth",
  },
  {
    id: 3,
    image: "/images/management-2.jpg",
    category: "Strategy",
    title: "Placement Driving Growth",
  }
]

export default function CareerSolutions() {
  return (
    <>
    <section className="py-5 ">
    <div className="inner-container text-center py-md-4">
        {/* <!-- Header --> */}
        <h5 className="text-uppercase fw-bold color-yellow mb-2">Working With Us</h5>
        <h2 className="fw-bold mb-3 heading-1">Our Latest <span className="color-red">Insights</span> </h2>
        <p className="text-muted mb-5">
            We deliver deep insight, drive meaningful impact and <br className="d-lg-block d-none" /> uphold integrity
            in every engagement.
        </p>

        {/* <!-- Image Grid --> */}
        <div className="row g-4">
            {/* <!-- Card 1 --> */}
            {insights.map((insight) => (
               <div key={insight?.category} className="col-md-4">
               <div className="career-card card border-0 h-100">
                   <img src={insight?.image} alt="Management" className="img-fluid rounded-top"/>
                   <div className="card-body text-center">
                       <h5 className="text-20 bg-red text-white card-tag">{insight?.category}</h5>
                       <h4 className="text-26 card-title">{insight?.title}</h4>
                   </div>
               </div>
           </div>
            ))}
           
        </div>

        {/* <!-- CTA Button --> */}
        <div className="mt-3">
            <a href="#" className="text-black text-decoration-none text-uppercase fw-semibold px-4 py-2">Explore More <i
                    className="fa-solid fa-chevron-right ms-1 text-14"></i></a>
        </div>
    </div>
</section>
</>
  )
}