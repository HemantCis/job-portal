'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const brands = [
  { id: 1, image: "/images/brand1.png", alt: "Brand 1" },
  { id: 2, image: "/images/brand2.png", alt: "Brand 2" },
  { id: 3, image: "/images/brand3.png", alt: "Brand 3" },
  { id: 4, image: "/images/brand4.png", alt: "Brand 4" },
  { id: 5, image: "/images/brand5.png", alt: "Brand 5" },
  { id: 6, image: "/images/brand6.png", alt: "Brand 6" }
]

export default function SliderSection() {
  const swiperRef = useRef(null)

  useEffect(() => {
    // Initialize Swiper when component mounts
    const initializeSwiper = () => {
      if (typeof window !== 'undefined' && window.Swiper) {
        swiperRef.current = new window.Swiper(".mySwiper", {
          slidesPerView: 6,
          spaceBetween: 30,
          loop: true,
          autoplay: {
            delay: 0,
            disableOnInteraction: false,
          },
          speed: 3000,
          freeMode: true,
          breakpoints: {
            320: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 6,
              spaceBetween: 30,
            }
          }
        })
      }
    }

    // Check if Swiper is already loaded
    if (typeof window !== 'undefined' && window.Swiper) {
      initializeSwiper()
    } else {
      // Wait for Swiper to load
      const checkSwiper = setInterval(() => {
        if (typeof window !== 'undefined' && window.Swiper) {
          initializeSwiper()
          clearInterval(checkSwiper)
        }
      }, 100)
    }

    return () => {
      // Cleanup Swiper instance
      if (swiperRef.current) {
        swiperRef.current.destroy(true, true)
      }
    }
  }, [])

  return (
    <section className="sliderSection">
      <div className="swiper mySwiper">
        <div className="swiper-wrapper">
          {brands.map((brand) => (
            <div key={brand.id} className="swiper-slide">
              <img 
                src={brand.image} 
                alt={brand.alt}
                width={90}
                height={100}
                className="img-fluid"
                // style={{filter: 'grayscale(100%)', opacity: 0.7, transition: 'all 0.3s ease'}}
                onMouseEnter={(e) => {
                  e.target.style.filter = 'grayscale(0%)'
                  e.target.style.opacity = '1'
                }}
                onMouseLeave={(e) => {
                  e.target.style.filter = 'grayscale(100%)'
                  e.target.style.opacity = '0.7'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}