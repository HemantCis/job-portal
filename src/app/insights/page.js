import Header from '@/app/components/Header/Header';
import Footer from '@/app/components/Footer/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Insights() {
  const insights = [
    {
      src: "/images/insight1.png",
      title: "How Tanzanian Businesses Can Win in the Age of Skills",
      desc: "Is today’s hiring just a race for credentials, or the success of an organisation is shaped by the quality of the people you attract?",
    },
    {
      src: "/images/insight2.png",
      title: "Building Leadership Pipelines in Tanzanian Organisations",
      desc: "Strong leadership doesn’t happen by chance. It’s built through intentional development at every level.",
    },
    {
      src: "/images/insight3.png",
      title: "Unlocking Growth: How Tanzanian Businesses Can Compete and Win",
      desc: "Tanzanian businesses are going global. Are we ready for the competition? A compelling employer brand is essential.",
    },
    {
      src: "/images/insight4.png",
      title: "Why Localization is the New Competitive Edge in Tanzania",
      desc: "Global strategies are only as effective as their local execution. How do you build a workforce that is rooted in your context?",
    },
    {
      src: "/images/insight5.png",
      title: "Building Brands That Belong in Tanzania",
      desc: "Successful brands aren’t just made in a boardroom. They’re built in the minds and hearts of your people.",
    },
    {
      src: "/images/insight6.png",
      title: "Helping Tanzanian Organisations Anticipate Change",
      desc: "Change is constant. Organisations that anticipate, adapt and lead are the ones that thrive.",
    },
    {
      src: "/images/insight7.png",
      title: "The New Playbook for Tanzanian Leaders",
      desc: "Leadership is redefined for Tanzania. The new playbook is about agility, empathy and resilience.",
    },
    {
      src: "/images/insight8.png",
      title: "Opportunities, Realities, and Keys to Success",
      desc: "Success in Tanzania means knowing your market, your people, and your strategy. What are the keys to growth?",
    },
    {
      src: "/images/insight9.png",
      title: "Market Entry Without Missteps: A Guide for Tanzanian Companies",
      desc: "Entering new markets is exciting, but it’s also risky. Here’s how Tanzanian companies can avoid common pitfalls.",
    },
  ];

  return (
    <>
    <Header />
        <main>
            {/* Hero Section */}
            <section className="hero-section d-flex align-items-center mini-hero jobs-hero">
                <div className="hero-overlay"></div>
                <div className="inner-container hero-content text-center px-3 px-md-0">
                <h1 className="fw-bold mb-3 text-50">Insights</h1>
                <p className="pb-lg-3 fw-light">
                    We are WatuLink Advisory, the bridge between concepts and impact. Born in Tanzania, connected to the world, we help organisations grow, adapt,
                    <br className="d-lg-block d-none" /> and lead with confidence. Whether you are launching a bold idea, expanding across borders, or rethinking your strategy, we bring local intelligence,
                    <br className="d-lg-block d-none" /> global perspective, and hands-on support to make it happen.
                </p>
                </div>
            </section>

            {/* Insights Cards Section */}
            <section className="jobs-section py-5">
                <div className="custom-container">
                <div className="row">
                    {insights.map((item, index) => (
                    <div key={index} className="col-md-4 col-sm-6 mb-4">
                        <div className="card job-card insight-card h-100">
                        <Image
                            src={item.src}
                            alt={item.title}
                            width={400}
                            height={250}
                            className="card-img-top rounded-top-4 w-100 object-fit-cover"
                        />
                        <div className="card-body">
                            <h5 className="card-title mb-2 fw-semibold">{item.title}</h5>
                            <p className="card-text text-muted clamp-2">{item.desc}</p>
                            <a href="#" className="red-line-btn">
                            READ MORE <i className="fa-solid fa-arrow-right ms-1"></i>
                            </a>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            </section>
        </main>
    <Footer />
    </>
  );
}
