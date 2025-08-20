import BlogComponent from "../components/BlogComponent";
import HeroSection from "../components/HeroSection";
import TabSection from "../components/TabSection";





const Home = () => {
    return (
         <div className="bg-gray-200">
            <HeroSection/>
            <TabSection/> 
            {/* <Constructions/> */}
            {/* <StrategicPartnerSection/> */}
            {/* <Testimonials/> */}
            <BlogComponent postLimit={3} title="Blog" />
        </div>
    );
}

export default Home;
