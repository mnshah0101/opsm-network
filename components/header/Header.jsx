'use client'

import DarkHeader from "./DarkHeader";
import DarkHeaderMobile from "./DarkHeaderMobile";
import { useState } from 'react';
import { useEffect } from 'react';

//based on the screen size, the header will change


export default function Header() {
    const [isMobile, setIsMobile] = useState(false)
    const handleResize = () => {
  if (window.innerWidth < 960) {
      setIsMobile(true)
  } else {
      setIsMobile(false)
  }
}

// create an event listener
useEffect(() => {
  window.addEventListener("resize", handleResize)
})

    return (
        <div>

            {isMobile ? <DarkHeaderMobile /> : <DarkHeader />}
        </div>
    );
    }


