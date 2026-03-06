import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./services/accordion";

const FAQAndMap = () => {
    const faqData = [
        {
            question: "Who is Dr. Pratik Kisore Almeida?",
            answer: "Dr. Pratik Kisore Almeida, MD PhD, is a neurosurgeon specializing in skull base surgery and neuro-oncology. He is known for his passion for the art of surgery and microsurgical anatomy."
        },
        {
            question: "What is Dr. Almeida's educational background?",
            answer: "Dr. Almeida obtained his medical degree from The School of Medicine of The Universidade Federal do Ceará. He completed his Neurosurgery residency at State University of Campinas (UNICAMP) in Brazil. He has also undergone additional training at prestigious institutions such as Johns Hopkins Hospital, University of Toronto, and Cleveland Clinic."
        },
        {
            question: "What are Dr. Almeida's areas of expertise?",
            answer: "Dr. Almeida specializes in treating brain tumors and conditions including brain cancer, brain metastasis, brain tumor-associated epilepsy, chondrosarcoma, chordoma, CSF leak, and glioma. He is an expert in skull base surgery, pituitary tumor surgery, gamma knife surgery, awake brain surgery, and craniotomy."
        },
        {
            question: "What is Dr. Almeida's current position?",
            answer: "Dr. Almeida has recently accepted a position at Indiana University Health to join the Department of Neurosurgery at Indiana University School of Medicine. Previously, he was a neurosurgeon at Mayo Clinic Florida in Jacksonville, Florida."
        },
        {
            question: "What are Dr. Almeida's research interests?",
            answer: "His main areas of research are open and endoscopic skull base surgery, neuro-oncology, and microsurgical anatomy. He has authored and co-authored over 110 peer-reviewed papers, 75 neurosurgical meeting presentations, and 29 book chapters."
        },
        {
            question: "Where can I find more information about Dr. Almeida?",
            answer: "You can find more information about Dr. Almeida on his social media profiles and academic publications. Links are provided below the map."
        }
    ];

    const socialLinks = [
        { name: "Google Scholar", url: "https://scholar.google.com/citations?user=poGrcV8AAAAJ&hl=en" },
        { name: "Instagram", url: "https://www.instagram.com/almeida.jp_md/" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/joão-paulo-almeida-a321913a" },
        { name: "Twitter", url: "https://x.com/joao_p_almeida" }
    ];

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="grid md:grid-cols-2 gap-12">
                {/* FAQ Section */}
                <div>
                    <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible>
                        {faqData.map((faq, index) => (
                            <AccordionItem value={`item-${index}`} key={index}>
                                <AccordionTrigger>{faq.question}</AccordionTrigger>
                                <AccordionContent>{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                {/* Map and Social Links Section */}
                <div>
                    <h2 className="text-3xl font-bold mb-6">Our Location</h2>
                    <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg mb-4">
                    <iframe 
                    title='Dr. Almeida'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d786721.4004631747!2d-86.77026425463303!3d39.62426607268672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8814acbda14a8c4f%3A0x416117c437a374b5!2sIndiana%20University%20Health!5e0!3m2!1sen!2sin!4v1728734367204!5m2!1sen!2sin" 
                    width="100%"
                    height="100%" 
                    style={{border:0}} allowFullScreen loading="lazy"></iframe>
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                        <MapPin className="mr-2" size={20} />
                        <p>Indiana University School of Medicine, Indianapolis, IN</p>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Connect with Dr. Almeida</h3>
                    <div className="flex flex-wrap gap-2">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition-colors"
                            >
                                {link.name}
                                <ExternalLink size={14} className="ml-1" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQAndMap;