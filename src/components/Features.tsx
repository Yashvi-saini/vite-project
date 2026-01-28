import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Sparkles, Coffee } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true }}
        className="p-8 rounded-2xl bg-[#2A1F1A] border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-colors group"
    >
        <div className="w-16 h-16 rounded-full bg-[#1A0F0A] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-[#D4AF37]/10">
            <Icon className="w-8 h-8 text-[#D4AF37]" />
        </div>
        <h3 className="text-2xl font-serif text-[#E6D5B8] mb-4">{title}</h3>
        <p className="text-[#FFF8E7]/70 leading-relaxed font-light">
            {description}
        </p>
    </motion.div>
);

export const Features: React.FC = () => {
    return (
        <section className="py-24 bg-[#150A05] relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4 font-medium">Why Royal Chai?</h2>
                    <h3 className="text-4xl md:text-5xl font-serif text-[#FFF8E7]">A Tradition of Excellence</h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FeatureCard
                        icon={Crown}
                        title="Premium Saffron"
                        description="Handpicked saffron strands from the valleys of Kashmir, adding a golden hue and regal aroma to every cup."
                        delay={0.2}
                    />
                    <FeatureCard
                        icon={Coffee}
                        title="Authentic Spices"
                        description="A secret blend of royal spices including cardamom, cinnamon, and cloves, ground to perfection for unmatched flavor."
                        delay={0.4}
                    />
                    <FeatureCard
                        icon={Sparkles}
                        title="Instant Luxury"
                        description="The richness of slowly brewed chai, now ready in seconds. Perfect for the modern connoisseur who values time and taste."
                        delay={0.6}
                    />
                </div>
            </div>
        </section>
    );
};
