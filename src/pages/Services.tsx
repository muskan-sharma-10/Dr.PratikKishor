import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { ChevronRight } from 'lucide-react';
import { services, Service } from '../components/utilities/services/services';
import { Card, CardHeader, CardContent } from '../components/utilities/card';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/utilities/services/accordion';
import HeroSection from '../components/utilities/HeroSection';

const Services: React.FC = () => {
    const [selectedService, setSelectedService] = useState<Service | null>(services[0]);

    const handleServiceClick = (service: Service) => {
        setSelectedService(service);
    };

    const getCardColor = (index: number) => {
        const colors = [
            'bg-teal-50/95',
            'bg-amber-50/95',
            'bg-zinc-50/95',
            'bg-teal-100/95'
        ];
        return colors[index % colors.length];
    };

    return (
        <main className="relative min-h-screen">
            <Helmet>
                <title>Neurology Services | Dr. Pratik Kishore</title>
                <meta name="description" content="Explore advanced neurological and neurovascular services provided by Dr. Pratik Kishore, including stroke management, aneurysm treatment, and minimally invasive procedures." />
            </Helmet>
            {/* Background Image with Overlay */}
            <div
                className="fixed inset-0 z-0"
                style={{
                    backgroundImage: 'url(/images/neuropoint_board.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-zinc-900/85" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex-grow mt-20">
                <HeroSection />

                <section className="container mx-auto px-4 py-8 mt-10 md:mt-28">
                    <div className="flex flex-col md:flex-row">
                        {/* Mobile Accordion */}
                        <div className="md:hidden w-full mb-6">
                            <Accordion type="single" collapsible className="bg-white/95 rounded-xl">
                                {services.map((service, index) => (
                                    <AccordionItem key={service.id} value={service.id}>
                                        <AccordionTrigger className="hover:text-teal-600">
                                            {service.name}
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <div
                                                className={`cursor-pointer py-2 px-4 rounded transition-colors ${selectedService?.id === service.id
                                                    ? 'bg-teal-600 text-white'
                                                    : 'hover:bg-teal-50'
                                                    }`}
                                                onClick={() => handleServiceClick(service)}
                                            >
                                                {service.shortDescription}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:block w-full md:w-1/4 mb-6 md:mb-0 md:pr-4">
                            <h2 className="font-semibold text-2xl mb-4 text-white">Our Services</h2>
                            <div className="bg-white/95 rounded-xl p-4">
                                <ul className="space-y-2">
                                    {services.map((service, index) => (
                                        <li
                                            key={service.id}
                                            className={`cursor-pointer rounded-lg transition-all duration-200 ${selectedService?.id === service.id
                                                ? 'bg-teal-600 text-white'
                                                : 'hover:bg-teal-50'
                                                }`}
                                            onClick={() => handleServiceClick(service)}
                                        >
                                            <div className="flex items-center justify-between p-4">
                                                <div>
                                                    <h3 className="font-semibold">{service.name}</h3>
                                                    <p className={`text-sm ${selectedService?.id === service.id
                                                        ? 'text-teal-50'
                                                        : 'text-zinc-600'
                                                        }`}>
                                                        {service.shortDescription}
                                                    </p>
                                                </div>
                                                <ChevronRight className="w-5 h-5" />
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </nav>

                        {/* Main Content Area */}
                        <main className="w-full md:w-3/4">
                            {selectedService && (
                                <Card className={`overflow-hidden shadow-xl ${getCardColor(services.findIndex(s => s.id === selectedService.id))}`}>
                                    <CardHeader>
                                        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-teal-800">
                                            {selectedService.name}
                                        </h2>
                                        <p className="text-lg text-zinc-600">{selectedService.shortDescription}</p>
                                    </CardHeader>
                                    <CardContent>
                                        <img
                                            src={selectedService.image}
                                            alt={selectedService.name}
                                            className="w-full h-48 md:h-64 object-cover rounded-lg mb-6 shadow-lg"
                                        />
                                        <p className="text-zinc-700 mb-6">{selectedService.longDescription}</p>

                                        {/* Procedures Section */}
                                        <div className="bg-white/80 rounded-lg p-6 mb-6">
                                            <h3 className="text-xl font-semibold mb-3 text-teal-700">Key Procedures</h3>
                                            <ul className="space-y-3">
                                                {selectedService.procedures.map((procedure, index) => (
                                                    <li key={index} className="flex items-start">
                                                        <span className="inline-block w-2 h-2 mt-2 mr-2 bg-teal-500 rounded-full" />
                                                        <div>
                                                            <span className="font-semibold text-zinc-800">{procedure.name}:</span>
                                                            <span className="text-zinc-600"> {procedure.description}</span>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Symptoms Section */}
                                        <div className="bg-white/80 rounded-lg p-6 mb-6">
                                            <h3 className="text-xl font-semibold mb-3 text-amber-700">Common Symptoms</h3>
                                            <ul className="space-y-3">
                                                {selectedService.symptoms.map((symptom, index) => (
                                                    <li key={index} className="flex items-start">
                                                        <span className="inline-block w-2 h-2 mt-2 mr-2 bg-amber-500 rounded-full" />
                                                        <div>
                                                            <span className="font-semibold text-zinc-800">{symptom.name}:</span>
                                                            <span className="text-zinc-600"> {symptom.description}</span>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Benefits and Risks */}
                                        <div className="flex flex-col md:flex-row gap-6 mb-6">
                                            <div className="w-full md:w-1/2 bg-teal-50/90 p-6 rounded-lg">
                                                <h3 className="text-xl font-semibold mb-3 text-teal-700">Benefits</h3>
                                                <ul className="space-y-2">
                                                    {selectedService.benefits.map((benefit, index) => (
                                                        <li key={index} className="flex items-center">
                                                            <ChevronRight className="w-4 h-4 text-teal-500 mr-2" />
                                                            <span className="text-zinc-700">{benefit}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="w-full md:w-1/2 bg-amber-50/90 p-6 rounded-lg">
                                                <h3 className="text-xl font-semibold mb-3 text-amber-700">Risks</h3>
                                                <ul className="space-y-2">
                                                    {selectedService.risks.map((risk, index) => (
                                                        <li key={index} className="flex items-center">
                                                            <ChevronRight className="w-4 h-4 text-amber-500 mr-2" />
                                                            <span className="text-zinc-700">{risk}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Recovery Time */}
                                        <div className="bg-zinc-50/90 p-6 rounded-lg mb-6">
                                            <h3 className="text-xl font-semibold mb-2 text-zinc-700">Recovery Time</h3>
                                            <p className="text-zinc-600">{selectedService.recoveryTime}</p>
                                        </div>

                                        {/* FAQ Section */}
                                        <div className="bg-white/95 rounded-lg p-6">
                                            <h3 className="text-xl font-semibold mb-4 text-teal-700">
                                                Frequently Asked Questions
                                            </h3>
                                            <Accordion type="single" collapsible>
                                                {selectedService.faq.map((item, index) => (
                                                    <AccordionItem key={index} value={`faq-${index}`}>
                                                        <AccordionTrigger className="text-zinc-800 hover:text-teal-600">
                                                            {item.question}
                                                        </AccordionTrigger>
                                                        <AccordionContent className="text-zinc-600">
                                                            {item.answer}
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                ))}
                                            </Accordion>
                                        </div>

                                        {/* CTA Button */}
                                        <div className="mt-8 text-center">
                                            <button className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors text-lg font-semibold shadow-lg">
                                                Schedule a Consultation
                                            </button>
                                        </div>
                                    </CardContent>
                                </Card>
                            )}
                        </main>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Services;