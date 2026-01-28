import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ArrowRight, Loader2, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setEmail('');
        }, 1500);
    };

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden bg-[#1A0F0A]">
            {/* Background with darker overlay for better text readability */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url("/hero-bg.png")' }}
            >
                <div className="absolute inset-0 bg-black/70 royal-gradient" />
            </div>

            <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center pt-20">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    {/* Logo Placeholder or Image */}
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-[#D4AF37] flex items-center justify-center bg-black/40 backdrop-blur-sm mb-4 mx-auto">
                        <span className="text-3xl md:text-5xl font-serif text-[#D4AF37]">RC</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="text-xl md:text-2xl font-light tracking-[0.3em] mb-6 text-[#E6D5B8] uppercase font-serif">
                        The Art of Royal Tea
                    </h2>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 gold-text leading-tight tracking-tight font-serif">
                        ROYAL CHAI
                    </h1>
                    <p className="text-lg md:text-2xl text-[#FFF8E7]/90 max-w-3xl mx-auto leading-relaxed mb-12 font-light tracking-wide">
                        Rediscover the timeless elegance of Indian heritage. <br className="hidden md:block" />
                        A symphony of premium tea leaves and authentic spices, brewed for royalty.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="w-full max-w-md mx-auto"
                >
                    {/* Initial Hero CTA - Keep it simple */}
                    <button
                        onClick={() => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-10 py-5 bg-[#D4AF37] hover:bg-[#F4D03F] text-[#1A0F0A] text-lg font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-3 gold-glow mx-auto group"
                    >
                        Experience Luxury <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#D4AF37]/60 flex flex-col items-center gap-2 cursor-pointer"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
                <span className="text-xs uppercase tracking-[0.2em]">Scroll to Explore</span>
                <ChevronDown className="animate-bounce w-6 h-6" />
            </motion.div>
        </section>
    );
};
