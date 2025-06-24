import BlogComponent from "../components/BlogComponent";
import Constructions from "../components/Construction";
import HeroSection from "../components/HeroSection";
import StrategicPartnerSection from "../components/Parnter";
import TabSection from "../components/TabSection";
import Testimonials from "../components/Testimonials";




const Home = () => {
    return (
         <div>
            <HeroSection/>
            <TabSection/>
            <Constructions/>
            <StrategicPartnerSection/>
            <Testimonials/>
            <BlogComponent postLimit={3} title="Blog" />
        </div>
    );
}

export default Home;
