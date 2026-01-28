import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Loader2, Instagram, Twitter, Facebook } from 'lucide-react';

export const Newsletter: React.FC = () => {
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
        <section id="newsletter" className="py-24 bg-[#1A0F0A] relative border-t border-[#D4AF37]/10">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-[#2A1F1A] rounded-3xl p-10 md:p-16 border border-[#D4AF37]/20 relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50"></div>

                    <h2 className="text-3xl md:text-5xl font-serif text-[#FFF8E7] mb-6">Join the Royal List</h2>
                    <p className="text-[#FFF8E7]/70 mb-10 max-w-xl mx-auto">
                        Be the first to know when we launch and receive exclusive offers fit for royalty.
                    </p>

                    <AnimatePresence mode="wait">
                        {!isSubmitted ? (
                            <motion.form
                                key="form"
                                onSubmit={handleSubmit}
                                className="relative max-w-md mx-auto"
                                exit={{ opacity: 0, y: 10 }}
                            >
                                <div className="relative">
                                    <input
                                        type="email"
                                        required
                                        placeholder="Enter your email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full pl-6 pr-16 py-4 bg-[#1A0F0A] border border-[#D4AF37]/30 rounded-full text-[#FFF8E7] placeholder:text-[#FFF8E7]/30 focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all"
                                    />
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="absolute right-2 top-2 bottom-2 aspect-square bg-[#D4AF37] hover:bg-[#F4D03F] text-[#1A0F0A] rounded-full flex items-center justify-center transition-all disabled:opacity-70"
                                    >
                                        {isSubmitting ? (
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                        ) : (
                                            <ArrowRight className="w-5 h-5" />
                                        )}
                                    </button>
                                </div>
                            </motion.form>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="py-4 px-8 bg-[#D4AF37]/10 rounded-full inline-block border border-[#D4AF37]/30"
                            >
                                <span className="text-[#D4AF37] font-bold">Welcome to the family. We'll be in touch.</span>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className="mt-12 flex justify-center gap-8 pt-8 border-t border-white/5">
                        {[Instagram, Twitter, Facebook].map((Icon, i) => (
                            <a key={i} href="#" className="text-[#FFF8E7]/40 hover:text-[#D4AF37] transition-colors">
                                <Icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Footer Copyright */}
            <div className="text-center mt-16 text-[#FFF8E7]/30 text-sm">
                © 2026 Royal Chai. Crafted with elegance.
            </div>
        </section>
    );
};
