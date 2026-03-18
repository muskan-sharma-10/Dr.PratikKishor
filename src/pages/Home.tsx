import React from "react";
import { Helmet } from "react-helmet";
import DrPratikKishoreHomeSection from "../components/utilities/HomeAbout";
import AppointmentSection from "../components/utilities/AppointmentSection";
import Carousel from "../components/utilities/LandingSection";
import AlternatingServicesShowcase from "../components/utilities/services/InteractiveServiceShowcase";

const Home: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Neuropoint Medical Center | Dr. Pratik Kishore - Senior Consultant Neurologist</title>
                <meta name="description" content="Welcome to Neuropoint Medical Center, spearheaded by Dr. Pratik Kishore, a leading Senior Consultant in Neurology and Neurovascular Intervention." />
            </Helmet>
            <main className="flex-grow mt-20">
                <Carousel />
                <DrPratikKishoreHomeSection />
                <AlternatingServicesShowcase />
                <AppointmentSection />
            </main>
        </>
    );
};

export default Home;