import Hero from "../../components/Hero/Hero.tsx";
import FeatureCardsGrid from "../../components/Features/Features.tsx";
import HowItWorks from "../../components/HowItWorks/HowItWorks.tsx";
import Faqs from "../../components/Faqs/Faqs.tsx";

function HomePage() {
    return (
        <div>
        
            <Hero />
            <FeatureCardsGrid />
            <HowItWorks />
            <Faqs />
        

        </div>
    )
}

export default HomePage