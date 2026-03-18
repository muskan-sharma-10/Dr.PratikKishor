import React from "react";
import { Helmet } from "react-helmet";
import DrPratikKishoreHomeSection from "../components/utilities/HomeAbout";
import AppointmentSection from "../components/utilities/services/AppointmentSection";
import Carousel from "../components/utilities/LandingSection";
import AlternatingServicesShowcase from "../components/utilities/services/InteractiveServiceShowcase";

const Home: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Neuropoint Medical Centre | Dr. Pratik Kishore - Senior Consultant Neurologist</title>
                <meta name="description" content="Welcome to Neuropoint Medical Centre, spearheaded by Dr. Pratik Kishore, a leading Senior Consultant in Neurology and Neurovascular Intervention." />
                <script type="application/ld+json">
                    {`
                    [
                      {
                        "@context": "https://schema.org",
                        "@type": "MedicalBusiness",
                        "name": "Neuropoint Medical Centre",
                        "alternateName": "Neuropoint Clinic",
                        "description": "Advanced neurology and neurovascular intervention centre led by Dr. Pratik Kishore.",
                        "url": "https://www.delhineuropointcentre.com",
                        "telephone": "+91-8368123184",
                        "address": {
                          "@type": "PostalAddress",
                          "streetAddress": "New Rohtak Road",
                          "addressLocality": "New Delhi",
                          "addressRegion": "Delhi",
                          "postalCode": "110005",
                          "addressCountry": "IN"
                        },
                        "geo": {
                          "@type": "GeoCoordinates",
                          "latitude": 28.6605,
                          "longitude": 77.1869
                        },
                        "medicalSpecialty": "Neurology",
                        "founder": {
                          "@id": "https://www.delhineuropointcentre.com/#drpratikkishore"
                        }
                      },
                      {
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "@id": "https://www.delhineuropointcentre.com/#drpratikkishore",
                        "name": "Dr. Pratik Kishore",
                        "jobTitle": "Senior Consultant Neurologist and Neurovascular Interventionist",
                        "description": "Senior Consultant Neurologist at BLK-Max Super Speciality Hospital and Lead Specialist at Neuropoint Medical Centre. Expert in stroke management and neurovascular interventions.",
                        "url": "https://www.delhineuropointcentre.com/about",
                        "image": "https://www.delhineuropointcentre.com/images/dr_pratik_real.jpg",
                        "sameAs": [
                          "https://www.linkedin.com/in/pratik-kishore-83072a184",
                          "https://www.blkmaxhospital.com/doctor/dr-pratik-kishore"
                        ],
                        "honorificPrefix": "Dr.",
                        "affiliation": [
                          {
                            "@type": "MedicalOrganization",
                            "name": "BLK-Max Super Speciality Hospital"
                          },
                          {
                            "@type": "MedicalBusiness",
                            "name": "Neuropoint Medical Centre"
                          }
                        ],
                        "hasCredential": [
                          {
                            "@type": "EducationalOccupationalCredential",
                            "name": "MBBS"
                          },
                          {
                            "@type": "EducationalOccupationalCredential",
                            "name": "MD (General Medicine)"
                          },
                          {
                            "@type": "EducationalOccupationalCredential",
                            "name": "DM (Neurology, NIMHANS)"
                          },
                          {
                            "@type": "EducationalOccupationalCredential",
                            "name": "FNB (Neurovascular Intervention)"
                          }
                        ]
                      }
                    ]
                    `}
                </script>
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