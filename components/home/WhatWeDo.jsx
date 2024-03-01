'use client'
import React, { useEffect } from "react"
import { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import './carousel.css'

export default () => {


  
  

const [slidesPerView, setSlidesPerView] = useState(1.7)
const [mobile, setMobile] = useState(false)


  const [sliderRef] = useKeenSlider({
    loop: false,
    mode: "free-snap",
    slides: {
      perView: slidesPerView,
      spacing: 10,
    },
  })

  useEffect(() => {
    const resize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1)
        setMobile(true)
      } else {
        setSlidesPerView(1.7)
        setMobile(false)
      }
    }
    window.addEventListener("resize", resize)
    return () => {
      window.removeEventListener("resize", resize)
    }
  }
  ,[])

  





 

  return (
   
    <div className="ml-lg-5 my-4 pt-2">
        <div className="container my-5">
           <div className="row">
            <div className="col-lg-6 col-12 d-flex justify-content-center flex-column align-items-center ">
                <h1 className="title-text text-center text-lg-start ">What Makes Us The Best At What We Do?</h1>

                { mobile ? 
                (<img src="/assets/logos/opsm_logo_dark_small.png" alt="" style={{height:'20px', width:'auto'}} />) :
                null }
            </div>
           </div>
      </div>
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1 mx-lg-2">
        <img src="/assets/images/home/carousel_image_1.png"  width={'100%'} alt="" />
      </div>
      <div className="keen-slider__slide number-slide2 mx-lg-2">
                <img src="/assets/images/home/carousel_image_2.png" width={'100%'} alt="" />
      </div>
      <div className="keen-slider__slide number-slide3 mx-lg-2">
                <img src="/assets/images/home/carousel_image_3.png" width={'100%'} alt="" />

      </div>
      <div className="keen-slider__slide number-slide4 mx-lg-2">
                <img src="/assets/images/home/carousel_image_4.png" width={'100%'} alt="" />

      </div>
      </div>
  </div>
  )
}