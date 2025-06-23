import BlogComponent from "../components/BlogComponent";
import Constructions from "../components/Construction";
import HeroSection from "../components/HeroSection";
import ProjectComponent from "../components/ProjectComponent";
import ServiceComponent from "../components/ServiceComponent";
import TabSection from "../components/TabSection";
import Testimonials from "../components/Testimonials";




const Home = () => {
    return (
        <div>
           <HeroSection/>
           <Constructions/>
           <ServiceComponent/>
           <TabSection/>
         <ProjectComponent/>
           <Testimonials/>
          <BlogComponent/>
        </div>
    );
}

export default Home;
