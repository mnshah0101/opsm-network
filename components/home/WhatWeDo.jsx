'use client'
import React, { useEffect } from "react"
import { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import './carousel.css'

export default () => {
  const [sliderRef] = useKeenSlider({
    loop: false,
    mode: "free-snap",
    slides: {
      perView: 1.7,
      spacing: 10,
    },
  })

  


 

  return (
   
    <div className="ml-lg-5 my-lg-5 pt-2">
        <div className="container my-5">
           <div className="row">
            <div className="col-lg-6 col-12 ">
                <h1 className="title-text text-center text-lg-start ">What Makes Us The Best At What We Do?</h1>
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