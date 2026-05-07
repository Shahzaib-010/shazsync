import Hero from "../components/section/Hero";
import GetStarted from "../components/section/GetStarted";
import HowWeWork from "../components/section/HowWeWork";
import SelectedWorksSection from "../components/section/SelectedWorksSection";
import ServicesSection from "../components/section/ServicesSection";
import Testimonials from "../components/section/Testimonials";

export default function Home() {
  return (
    <section>
        <Hero />
       
        <SelectedWorksSection />
        <HowWeWork />
           
         <ServicesSection />
         <Testimonials />
        <GetStarted />
    </section>
  )
}
