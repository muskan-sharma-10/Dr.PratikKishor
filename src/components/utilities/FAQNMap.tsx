import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./services/accordion";

const FAQAndMap = () => {
    const faqData = [
        {
            question: "Who is Dr. Pratik Kishore?",
            answer: "Dr. Pratik Kishore, MD, DM, FNB, is a leading Neurologist and Neurovascular Intervention Specialist. He specializes in advanced stroke management and minimally invasive endovascular procedures."
        },
        {
            question: "What is Dr. Pratik Kishore's educational background?",
            answer: "Dr. Pratik Kishore obtained his MBBS and MD (Medicine), followed by DM (Neurology) from the prestigious NIMHANS. He also holds a Fellowship in Neurovascular Intervention (FNB)."
        },
        {
            question: "What are Dr. Pratik Kishore's areas of expertise?",
            answer: "Dr. Pratik Kishore specializes in stroke management, brain aneurysms, interventional neurology, and neurophysiological diagnostics. He is an expert in mechanical thrombectomy, aneurysm coiling, and carotid stenting."
        },
        {
            question: "Where does Dr. Pratik Kishore practice?",
            answer: "Dr. Pratik Kishore practices at BLK-Max Super Speciality Hospital, New Delhi, and at Neuropoint Medical Centre, New Rohtak Road."
        },
        {
            question: "What are Dr. Pratik Kishore's research interests?",
            answer: "His main areas of research include interventional neurology, hyperacute stroke management, and advanced neuro-diagnostics. He has significantly contributed to the field of neurovascular intervention."
        },
        {
            question: "Where can I find more information about Dr. Pratik Kishore?",
            answer: "You can find more information about Dr. Pratik Kishore on his LinkedIn profile and via appointment at his clinic. Links are provided below."
        }
    ];

    const socialLinks = [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/pratik-kishore-83072a184" }
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
                            title='Dr. Pratik Kishore'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14004.148117769947!2d77.17511!3d28.65863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d02996c000001%3A0x2db44357731cc8a8!2sNew%20Rohtak%20Rd%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1709456789012!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                        <MapPin className="mr-2" size={20} />
                        <p>Neuropoint Medical Centre, New Rohtak Road, New Delhi</p>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Connect with Dr. Pratik Kishore</h3>
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