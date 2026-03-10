export interface Procedure {
    name: string;
    description: string;
}

export interface Symptom {
    name: string;
    description: string;
}

export interface Cause {
    name: string;
    description: string;
}

export interface Service {
    id: string;
    name: string;
    shortDescription: string;
    longDescription: string;
    path: string;
    image: string;
    procedures: Procedure[];
    symptoms: Symptom[];
    causes: Cause[];
    benefits: string[];
    risks: string[];
    recoveryTime: string;
    faq: { question: string; answer: string }[];
}

export const services: Service[] = [
    {
        id: "stroke-management",
        name: "Stroke & Acute Stroke Management",
        shortDescription: "Comprehensive care for acute stroke patients",
        longDescription: "Dr. Pratik Kishore specialized in the rapid diagnosis and treatment of acute ischemic and hemorrhagic strokes. Timely intervention is critical, and Dr. Kishore provides advanced protocols for stroke management to improve patient outcomes.",
        path: "/services/stroke-management",
        image: "/images/stroke-management.png",
        procedures: [
            { name: "IV Thrombolysis", description: "Administration of clot-busting medication in acute ischemic stroke" },
            { name: "Acute Monitoring", description: "Intensive monitoring of neurological status and vital signs" },
            { name: "Secondary Prevention", description: "Post-stroke care and strategies to prevent recurrence" }
        ],
        symptoms: [
            { name: "Sudden Weakness", description: "Weakness or numbness on one side of the body" },
            { name: "Speech Difficulty", description: "Slurred speech or difficulty understanding language" },
            { name: "Facial Droop", description: "Uneven smile or weakness in facial muscles" }
        ],
        causes: [
            { name: "Ischemic Stroke", description: "Blockage of blood flow to the brain" },
            { name: "Hemorrhagic Stroke", description: "Bleeding into or around the brain" },
            { name: "TIA", description: "Transient ischemic attacks or 'mini-strokes'" }
        ],
        benefits: [
            "Reduced brain damage",
            "Improved recovery rates",
            "Specialized acute care"
        ],
        risks: [
            "Bleeding complications",
            "Neurological deficits",
            "Recurrence risk"
        ],
        recoveryTime: "Varies; initial recovery in 1-2 weeks, rehabilitation can take months",
        faq: [
            {
                question: "What is the 'Golden Hour' in stroke?",
                answer: "The first few hours after stroke symptoms start are critical. Fast treatment can significantly reduce long-term disability."
            }
        ]
    },
    {
        id: "neurovascular-intervention",
        name: "Neurovascular Intervention",
        shortDescription: "Minimally invasive endovascular procedures",
        longDescription: "Neurovascular intervention involves advanced, minimally invasive techniques to treat brain aneurysms, stroke, and other cerebrovascular conditions using specialized catheters and imaging.",
        path: "/services/neurovascular-intervention",
        image: "/images/neurovascular-intervention.png",
        procedures: [
            { name: "Mechanical Thrombectomy", description: "Physical removal of a clot from a brain artery" },
            { name: "Aneurysm Coiling", description: "Filling an aneurysm with platinum coils to prevent rupture" },
            { name: "Carotid Stenting", description: "Opening narrowed carotid arteries with a stent" }
        ],
        symptoms: [
            { name: "Severe Headache", description: "Sudden 'thunderclap' headache, often associated with aneurysms" },
            { name: "Vision Loss", description: "Sudden changes or loss of vision" },
            { name: "Dizziness", description: "Unexplained dizziness or loss of balance" }
        ],
        causes: [
            { name: "Brain Aneurysms", description: "Bulges in the walls of brain arteries" },
            { name: "Carotid Stenosis", description: "Narrowing of the main arteries to the brain" },
            { name: "AVM", description: "Arteriovenous malformations in the brain" }
        ],
        benefits: [
            "Minimally invasive (no brain surgery required)",
            "Shorter hospital stays",
            "Faster recovery"
        ],
        risks: [
            "Vessel injury",
            "Procedural stroke",
            "Infection"
        ],
        recoveryTime: "2-5 days for most elective interventional procedures",
        faq: [
            {
                question: "Is neurovascular intervention the same as brain surgery?",
                answer: "No, these are endovascular procedures performed through blood vessels, usually starting from the groin or wrist, avoiding traditional open brain surgery."
            }
        ]
    },
    {
        id: "neuro-diagnostics",
        name: "Neurophysiological Diagnostics",
        shortDescription: "Advanced neurological testing",
        longDescription: "Precise diagnostic testing to evaluate the electrical activity of the brain and nerves. These tests are essential for diagnosing epilepsy, neuropathies, and nerve-related disorders.",
        path: "/services/neuro-diagnostics",
        image: "/images/neuro-diagnostics.png",
        procedures: [
            { name: "EEG", description: "Electroencephalogram to monitor brain waves" },
            { name: "EMG/NCV", description: "Tests to evaluate muscle and nerve function" },
            { name: "Evoked Potentials", description: "VEP, BERA to test sensory pathways" }
        ],
        symptoms: [
            { name: "Seizures", description: "Episodic loss of consciousness or movements" },
            { name: "Numbness/Tingling", description: "Chronic 'pins and needles' sensations" },
            { name: "Muscle Weakness", description: "Progressive or sudden loss of strength" }
        ],
        causes: [
            { name: "Epilepsy", description: "Frequent seizures due to abnormal brain activity" },
            { name: "Neuropathy", description: "Nerve damage affecting sensation and movement" },
            { name: "Movement Disorders", description: "Conditions like Parkinson's disease" }
        ],
        benefits: [
            "Accurate diagnosis",
            "Guided treatment planning",
            "Non-invasive monitoring"
        ],
        risks: [
            "Minimal discomfort during EMG",
            "No long-term risks"
        ],
        recoveryTime: "Immediate; no downtime required after testing",
        faq: [
            {
                question: "Is the EMG test painful?",
                answer: "Most patients experience minor discomfort similar to a small prick, but it is generally well-tolerated."
            }
        ]
    },
    {
        id: "specialized-therapies",
        name: "Specialized Neurology Therapies",
        shortDescription: "Botox and Movement Disorder therapy",
        longDescription: "Advanced therapeutic interventions for chronic neurological conditions, including movement disorders and migraine management using botox and nerve blocks.",
        path: "/services/specialized-therapies",
        image: "/images/specialized-therapies.png",
        procedures: [
            { name: "Botox Injections", description: "Therapy for chronic migraine and spasticity" },
            { name: "Nerve Block Therapy", description: "Localized injections for headache management" },
            { name: "DBS Management", description: "Deep Brain Stimulation adjustments for Parkinson's" }
        ],
        symptoms: [
            { name: "Chronic Migraine", description: "Frequent, severe headaches lasting days" },
            { name: "Tremors", description: "Involuntary shaking movements" },
            { name: "Muscle Spasms", description: "Tight, involuntary muscle contractions" }
        ],
        causes: [
            { name: "Parkinson's Disease", description: "Progressive nervous system disorder affecting movement" },
            { name: "Dystonia", description: "Involuntary muscle contractions causing repetitive movements" },
            { name: "Chronic Pain", description: "Neuropathic or headache-related chronic pain" }
        ],
        benefits: [
            "Improved quality of life",
            "Reduction in symptoms",
            "Non-surgical management"
        ],
        risks: [
            "Local injection site soreness",
            "Temporary weakness"
        ],
        recoveryTime: "1-2 days post-injection",
        faq: [
            {
                question: "How often do I need Botox for migraine?",
                answer: "Typically, treatments are every 12 weeks for optimal results."
            }
        ]
    }
];

export default services;