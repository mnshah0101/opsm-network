'use client'

import DarkHeader from "./DarkHeader";
import DarkHeaderMobile from "./DarkHeaderMobile";
import { useState, useEffect } from 'react';

export default function Header() {
const [isMobile, setIsMobile] = useState(true)
  const handleResize = () => {
    setIsMobile(window.innerWidth < 960)
  }

  useEffect(() => {
    handleResize(); // Call this function immediately after mount
    window.addEventListener("resize", handleResize);

    // clean up this component
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    return (
        <div>

            {isMobile ? <DarkHeaderMobile /> : <DarkHeader />}
        </div>
    );
    }


