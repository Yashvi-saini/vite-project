import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
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
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, type: "spring" }}
                    className="mb-10"
                >
                    {/* Hand-crafted Premium SVG Logo */}
                    <svg width="180" height="180" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto drop-shadow-[0_0_25px_rgba(212,175,55,0.4)]">
                        <defs>
                            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#F4D03F" />
                                <stop offset="50%" stopColor="#D4AF37" />
                                <stop offset="100%" stopColor="#9C7C1A" />
                            </linearGradient>
                        </defs>

                        {/* Outer Ring with decorative dots */}
                        <circle cx="100" cy="100" r="90" stroke="url(#goldGrad)" strokeWidth="2" fill="none" />
                        <circle cx="100" cy="100" r="82" stroke="url(#goldGrad)" strokeWidth="1" strokeDasharray="4 4" opacity="0.6" />

                        {/* Crown Icon */}
                        <path d="M60 90 L70 120 H130 L140 90 L120 100 L100 70 L80 100 L60 90 Z" fill="url(#goldGrad)" stroke="#1A0F0A" strokeWidth="1" />
                        <circle cx="60" cy="85" r="4" fill="#F4D03F" />
                        <circle cx="80" cy="95" r="3" fill="#F4D03F" />
                        <circle cx="100" cy="65" r="5" fill="#F4D03F" />
                        <circle cx="120" cy="95" r="3" fill="#F4D03F" />
                        <circle cx="140" cy="85" r="4" fill="#F4D03F" />

                        {/* Monogram Text */}
                        <text x="100" y="155" fontFamily="'Playfair Display', serif" fontSize="48" fontWeight="bold" fill="url(#goldGrad)" textAnchor="middle" letterSpacing="0.05em" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                            RC
                        </text>

                        {/* Tea Leaf Accent */}
                        <path d="M100 130 Q115 130 120 120 Q110 140 100 140 Q90 140 80 120 Q85 130 100 130" fill="url(#goldGrad)" opacity="0.8" />
                    </svg>
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
