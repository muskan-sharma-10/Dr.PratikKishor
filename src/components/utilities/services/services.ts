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
        longDescription: "Dr. Pratik Kishore specializes in the rapid diagnosis and treatment of acute ischemic and hemorrhagic strokes. Timely intervention is critical. He provides advanced protocols for stroke management, focusing on minimizing brain damage and maximizing recovery through cutting-edge medical and interventional therapies.",
        path: "/services/stroke-management",
        image: "/images/stroke-management.png",
        procedures: [
            { name: "IV Thrombolysis", description: "Administration of clot-busting medication (rtPA/Tenecteplase) in the 'Golden Hour' of acute ischemic stroke." },
            { name: "IA Thrombolysis", description: "Direct administration of thrombolytic agents into the blocked artery during angiography." },
            { name: "Mechanical Thrombectomy", description: "Minimally invasive removal of large blood clots from brain arteries using stent-retrievers or aspiration catheters." },
            { name: "Acute Stroke Monitoring", description: "Intensive neurological observation and management in specialized stroke units." }
        ],
        symptoms: [
            { name: "Sudden Weakness", description: "Sudden numbness or weakness in the face, arm, or leg, especially on one side of the body." },
            { name: "Speech Difficulty", description: "Confusion, trouble speaking, or difficulty understanding speech." },
            { name: "Vision Problems", description: "Sudden trouble seeing in one or both eyes or double vision." },
            { name: "Loss of Balance", description: "Sudden trouble walking, dizziness, or loss of coordination." }
        ],
        causes: [
            { name: "Ischemic Stroke", description: "Caused by a blockage (blood clot) in an artery supplying the brain." },
            { name: "Hemorrhagic Stroke", description: "Caused by a rupture of a blood vessel leading to bleeding in or around the brain." },
            { name: "TIA (Mini-Stroke)", description: "Transient Ischemic Attack—a temporary blockage that is a warning sign of a major stroke." }
        ],
        benefits: [
            "Minimization of permanent brain damage",
            "Significant improvement in functional recovery",
            "Rapid restoration of blood flow to the brain",
            "Reduced risk of long-term disability"
        ],
        risks: [
            "Post-procedural bleeding (hemorrhage)",
            "Reaction to contrast or medications",
            "Risk of recurrence if underlying factors aren't managed"
        ],
        recoveryTime: "Initial hospital recovery: 3-7 days. Rehabilitation and full recovery can take weeks to months depending on severity.",
        faq: [
            {
                question: "What is the 'Golden Hour' in stroke treatment?",
                answer: "The first 4.5 hours after stroke symptoms begin are critical. The sooner treatment like thrombolysis starts, the better the chances of recovery."
            }
        ]
    },
    {
        id: "neurovascular-intervention",
        name: "Neurovascular Intervention",
        shortDescription: "Minimally invasive endovascular procedures",
        longDescription: "Neurovascular intervention involves highly specialized, minimally invasive techniques to treat complex cerebrovascular conditions. Using advanced imaging and micro-catheters, Dr. Kishore treats aneurysms, blockages, and malformations without the need for traditional open brain surgery.",
        path: "/services/neurovascular-intervention",
        image: "/images/neurovascular-intervention.png",
        procedures: [
            { name: "Digital Subtraction Angiography (DSA)", description: "Gold standard diagnostic imaging to visualize blood vessels in the brain and neck with high precision." },
            { name: "Aneurysm Coiling", description: "Filling a brain aneurysm with platinum coils to prevent rupture or treat a ruptured aneurysm." },
            { name: "Flow Diverter Stenting", description: "Advanced stenting technique to divert blood flow away from large or complex aneurysms." },
            { name: "Carotid & Intracranial Stenting", description: "Opening narrowed arteries (stenosis) in the neck or brain to restore blood flow and prevent stroke." },
            { name: "AVM/AVF Embolization", description: "Using liquid embolic agents to shut down abnormal connections between arteries and veins." }
        ],
        symptoms: [
            { name: "Thunderclap Headache", description: "Sudden, extremely severe headache, often associated with a ruptured aneurysm." },
            { name: "Cranial Nerve Palsy", description: "Drooping eyelid or double vision due to pressure from an aneurysm." },
            { name: "Transient Symptoms", description: "Brief episodes of vision loss or weakness (TIAs)." }
        ],
        causes: [
            { name: "Brain Aneurysms", description: "Weak spots in the arterial wall that bulge and can potentially burst." },
            { name: "Carotid Stenosis", description: "Atherosclerosis causing narrowing of the main arteries to the brain." },
            { name: "Vascular Malformations", description: "Congenital abnormal connections of blood vessels (AVMs)." }
        ],
        benefits: [
            "No large incisions (performed through a small puncture in the groin or wrist)",
            "Reduced pain and minimal scarring",
            "Significantly shorter hospital stay and faster recovery",
            "Highly precise treatment for deep-seated brain lesions"
        ],
        risks: [
            "Stroke or vessel injury during the procedure",
            "Allergic reaction to contrast dye",
            "Access site complications (hematoma)"
        ],
        recoveryTime: "Most patients are discharged within 24-48 hours and can return to light activities in a few days.",
        faq: [
            {
                question: "Is neurovascular intervention safer than open surgery?",
                answer: "For many conditions like certain aneurysms and carotid stenosis, endovascular intervention is less invasive and has a lower risk of certain complications compared to traditional neurosurgery."
            }
        ]
    },
    {
        id: "neuro-diagnostics",
        name: "Neurophysiological Diagnostics",
        shortDescription: "Advanced neurological testing",
        longDescription: "Precise diagnostic testing is the cornerstone of effective neurological treatment. Dr. Kishore utilizes state-of-the-art electrophysiological studies to evaluate brain, nerve, and muscle function, facilitating accurate diagnosis of epilepsy, neuromuscular disorders, and more.",
        path: "/services/neuro-diagnostics",
        image: "/images/neuro-diagnostics.png",
        procedures: [
            { name: "Digital & Video EEG", description: "Long-term monitoring of brain's electrical activity to diagnose and classify epilepsy and seizure disorders." },
            { name: "Nerve Conduction Velocity (NCV)", description: "Measuring the speed and strength of electrical signals traveling through nerves." },
            { name: "Electromyography (EMG)", description: "Evaluating the health of muscles and the nerve cells that control them." },
            { name: "VEP & BERA", description: "Evoked potential studies to evaluate visual and auditory pathways in the brain." },
            { name: "Nerve & Muscle Biopsy", description: "Diagnostic surgical removal of a small tissue sample for pathological examination." }
        ],
        symptoms: [
            { name: "Seizures", description: "Uncontrolled electrical disturbances in the brain causing changes in behavior or consciousness." },
            { name: "Neuropathic Pain", description: "Burning, tingling, or shooting pain (pins and needles) in limbs." },
            { name: "Progressive Weakness", description: "Gradual loss of muscle strength or muscle wasting." }
        ],
        causes: [
            { name: "Epilepsy", description: "A neurological disorder marked by sudden recurrent episodes of sensory disturbance or loss of consciousness." },
            { name: "Peripheral Neuropathy", description: "Damage to the nerves outside the brain and spinal cord, often due to diabetes or inflammation." },
            { name: "Myopathy", description: "Primary diseases of the muscle tissue leading to weakness." }
        ],
        benefits: [
            "Definitive diagnosis of complex conditions",
            "Objective measurement of nerve and muscle health",
            "Non-invasive or minimally invasive testing",
            "Guided treatment and prognosis"
        ],
        risks: [
            "Minor discomfort during needle EMG",
            "Temporary skin irritation from electrodes",
            "Very low risk for most diagnostic procedures"
        ],
        recoveryTime: "Immediate; no downtime required for most tests. Biopsy sites may take 1-2 weeks to heal.",
        faq: [
            {
                question: "Do I need to prepare for an EEG or NCV test?",
                answer: "Generally, ensure your hair is clean for an EEG. For NCV/EMG, avoid applying lotions or creams to your skin on the day of the test."
            }
        ]
    },
    {
        id: "specialized-therapies",
        name: "Specialized Neurology Therapies",
        shortDescription: "Advanced Headache & Movement Disorder care",
        longDescription: "Dr. Kishore provides specialized therapeutic interventions for chronic and treatment-resistant neurological conditions. This includes advanced injection therapies for migraines and spasticity, as well as management of neuromodulation devices for movement disorders.",
        path: "/services/specialized-therapies",
        image: "/images/specialized-therapies.png",
        procedures: [
            { name: "Botox for Neurological Disorders", description: "FDA-approved therapy for chronic migraine, cervical dystonia, and post-stroke spasticity." },
            { name: "Deep Brain Stimulation (DBS) Management", description: "Programming and fine-tuning DBS devices for patients with Parkinson's and Essential Tremor." },
            { name: "Nerve Blocks", description: "Injections (Greater Occipital, Trigeminal) for the management of severe cluster headaches and facial pain." },
            { name: "Baclofen Pump Management", description: "Specialized care for intrathecal pumps used to treat severe muscle spasticity." }
        ],
        symptoms: [
            { name: "Chronic Migraine", description: "Headaches occurring 15 or more days a month for at least 3 months." },
            { name: "Involuntary Movements", description: "Tremors, jerks (myoclonus), or abnormal postures (dystonia)." },
            { name: "Facial Pain", description: "Sudden, shock-like pain in the face (Trigeminal Neuralgia)." }
        ],
        causes: [
            { name: "Parkinson's Disease", description: "A progressive disorder of the nervous system that affects movement." },
            { name: "Spasticity", description: "Abnormal muscle tightness due to prolonged muscle contraction, often post-stroke." },
            { name: "Refractory Headaches", description: "Severe headaches that do not respond well to standard oral medications." }
        ],
        benefits: [
            "Significant reduction in frequency and severity of symptoms",
            "Improved quality of life and functional independence",
            "Targeted treatment with fewer systemic side effects",
            "Expert management of advanced medical technology"
        ],
        risks: [
            "Injection site soreness or bruising",
            "Temporary drooping or weakness (Botox-related)",
            "Device-related complications (for DBS/Pumps)"
        ],
        recoveryTime: "1-2 days post-injection. Long-term management involves periodic visits every 3-6 months.",
        faq: [
            {
                question: "How long does it take for Botox to work for migraines?",
                answer: "Most patients start to see a reduction in headache days within 2-4 weeks after the first or second treatment session."
            }
        ]
    }
];

export default services;