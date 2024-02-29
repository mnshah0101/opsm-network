'use client'
import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import './carousel.css'

export default () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 1.6,
      spacing: 0,
    },
  })

  return (



    <div className="ml-5 my-5 pt-2">

        <div className="container my-5">

           <div className="row">
            <div className="col-6">
                <h1 className="title-text ">What Makes Us The Best At What We Do?</h1>
            </div>
           </div>


        </div>

        



    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1">
        <img src="/assets/images/home/carousel_image_1.png" alt="" />
      </div>
      <div className="keen-slider__slide number-slide2">
                <img src="/assets/images/home/carousel_image_2.png" alt="" />
      </div>
      <div className="keen-slider__slide number-slide3">
                <img src="/assets/images/home/carousel_image_3.png" alt="" />

      </div>
      <div className="keen-slider__slide number-slide4">
                <img src="/assets/images/home/carousel_image_4.png" alt="" />

      </div>
      </div>
   
    </div>

  )
}
