import React from 'react';
import { motion } from 'framer-motion';

export const Heritage: React.FC = () => {
    return (
        <section className="py-32 bg-[#1A0F0A] relative flex items-center">
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] rounded-t-full bg-gradient-to-b from-[#2A1F1A] to-[#150A05] relative overflow-hidden border border-[#D4AF37]/20 p-4">
                            {/* Placeholder image representation */}
                            <div className="w-full h-full rounded-t-full bg-[#1A0F0A] flex items-center justify-center overflow-hidden">
                                <div className="text-[#D4AF37]/20 text-9xl font-serif opacity-20">1920</div>
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1597318181205-c5d9744c1b27?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-60 mix-blend-overlay hover:scale-105 transition-transform duration-700"></div>
                            </div>

                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#1A0F0A] border border-[#D4AF37]/30 rounded-full flex items-center justify-center z-10">
                                <span className="text-[#D4AF37] font-serif text-xl border-b border-[#D4AF37] pb-1">Est. 2026</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-6 font-medium">Our Heritage</h2>
                        <h3 className="text-4xl md:text-6xl font-serif text-[#FFF8E7] mb-8 leading-tight">
                            Brewed for the <br />
                            <span className="italic text-[#D4AF37]">Royal Palate</span>
                        </h3>

                        <div className="space-y-6 text-[#FFF8E7]/80 text-lg font-light leading-relaxed">
                            <p>
                                Inspired by the grand tea ceremonies of the Maharajas, Royal Chai serves more than just a beverage; we serve a legacy. Our recipes have been whispered through generations, preserving the exact balance of strength and aroma that was once reserved for palaces.
                            </p>
                            <p>
                                We source our tea leaves from the high-altitude gardens of Assam and Darjeeling, where the mist meets the mountains. Blended with spices hand-ground in Jaipur, every pack of Royal Chai is a tribute to pure, unadulterated luxury.
                            </p>
                        </div>

                        <button className="mt-10 px-8 py-4 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1A0F0A] rounded-full transition-all duration-300 uppercase tracking-widest text-sm font-bold">
                            Read Our Story
                        </button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
