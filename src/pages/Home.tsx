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
                <title>Dr. Pratik Kishore | Senior Consultant Neurologist & Neurovascular Interventionist</title>
                <meta name="description" content="Welcome to the official website of Dr. Pratik Kishore, a leading Senior Consultant in Neurology and Neurovascular Intervention at BLK-Max Super Speciality Hospital, New Delhi, specializing in Stroke, Epilepsy, and Endovascular Procedures." />
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