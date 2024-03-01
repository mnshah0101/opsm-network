import Hero from "../../components/home/Hero";
import Header from "../../components/header/Header";
import WhatWeDo from "../../components/home/WhatWeDo";
import Footer from "../../components/footer/Footer";
import Empowering from "../../components/home/Empowering";
import NextLevel from "../../components/home/NextLevel";
import Events from "../../components/home/Events";
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <WhatWeDo className="my-4" />
      <Empowering />
      <NextLevel />
      <Events />
      <Footer />
      
    </div>

  );
}
