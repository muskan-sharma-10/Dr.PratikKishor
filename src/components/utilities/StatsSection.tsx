import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface StatItem {
    value: number;
    suffix: string;
    label: string;
    icon: string;
}

const stats: StatItem[] = [
    {
        value: 15,
        suffix: '+',
        label: 'Years of Clinical Experience',
        icon: '🏅',
    },
    {
        value: 10000,
        suffix: '+',
        label: 'Patients Treated',
        icon: '🧠',
    },
    {
        value: 5000,
        suffix: '+',
        label: 'Neurovascular Procedures',
        icon: '⚕️',
    },
    {
        value: 98,
        suffix: '%',
        label: 'Patient Satisfaction Rate',
        icon: '❤️',
    },
];

function formatNumber(n: number): string {
    if (n >= 1000) {
        const k = Math.round(n / 1000);
        return `${k}K`;
    }
    return n.toString();
}

function useCountUp(target: number, duration: number, active: boolean) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!active) return;
        let start = 0;
        const step = target / (duration / 15);
        const timer = setInterval(() => {
            start += step;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 15);
        return () => clearInterval(timer);
    }, [active, target, duration]);

    return count;
}

const StatCard: React.FC<{ stat: StatItem; delay: number; active: boolean }> = ({ stat, delay, active }) => {
    const count = useCountUp(stat.value, 2000, active);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={active ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay }}
            className="flex flex-col items-center text-center px-4 py-8 relative group"
        >
            {/* Glowing orb background */}
            <div className="absolute inset-0 rounded-2xl bg-white/5 group-hover:bg-white/10 transition-all duration-300" />

            {/* Icon */}
            <div className="text-4xl mb-4 z-10 filter drop-shadow-lg">{stat.icon}</div>

            {/* Number */}
            <div className="z-10 relative">
                <span className="text-5xl md:text-6xl font-extrabold text-white leading-none tracking-tight">
                    {formatNumber(count)}
                </span>
                <span className="text-4xl md:text-5xl font-extrabold text-cyan-300 leading-none">
                    {stat.suffix}
                </span>
            </div>

            {/* Label */}
            <p className="mt-3 text-sm md:text-base text-blue-100 font-medium tracking-wide z-10 max-w-[140px]">
                {stat.label}
            </p>

            {/* Bottom accent line */}
            <div className="mt-4 w-10 h-1 rounded-full bg-cyan-400 group-hover:w-16 transition-all duration-300 z-10" />
        </motion.div>
    );
};

const StatsSection: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setActive(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={ref}
            className="relative py-16 overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, #0f2f6e 0%, #1a4fa0 40%, #0e7ec4 100%)',
            }}
        >
            {/* Decorative blurred circles */}
            <div className="absolute top-0 left-[-80px] w-64 h-64 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-[-60px] w-56 h-56 rounded-full bg-blue-300/20 blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section heading */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={active ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-10"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        Trusted by Thousands
                    </h2>
                    <p className="text-blue-200 text-base md:text-lg">
                        Excellence in Neurology & Neurovascular Care
                    </p>
                </motion.div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">
                    {stats.map((stat, i) => (
                        <StatCard key={i} stat={stat} delay={i * 0.15} active={active} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
