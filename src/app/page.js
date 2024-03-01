import Hero from "../../components/home/Hero";
import Header from "../../components/header/Header";
import WhatWeDo from "../../components/home/WhatWeDo";
import Footer from "../../components/footer/Footer";
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <WhatWeDo className="my-4" />
      <Footer />
      
    </div>

  );
}
