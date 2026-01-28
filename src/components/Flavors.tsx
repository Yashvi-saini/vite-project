import React from 'react';
import { motion } from 'framer-motion';

const flavors = [
    {
        name: "Maharaja Masala",
        desc: "A bold blend of black tea with a fiery kick of ginger and black pepper.",
        color: "from-orange-950",
        image: "/images/maharaja_masala.png"
    },
    {
        name: "Cardamom Crown",
        desc: "A soothing, aromatic delight infused with fresh green cardamom pods.",
        color: "from-emerald-950",
        image: "/images/cardamom_crown.png"
    },
    {
        name: "Saffron Sultan",
        desc: "The most luxurious blend, kissed with real Kashmiri saffron strands and almonds.",
        color: "from-red-950",
        image: "/images/saffron_sultan.png"
    }
]

export const Flavors: React.FC = () => {
    return (
        <section className="py-24 bg-[#150A05]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-[#D4AF37] text-sm tracking-[0.3em] uppercase mb-4 font-medium">Our Collection</h2>
                    <h3 className="text-4xl md:text-5xl font-serif text-[#FFF8E7]">Royal Blends</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {flavors.map((flavor, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="group relative overflow-hidden rounded-2xl h-[450px] bg-[#1A0F0A] border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-500 shadow-xl"
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <img
                                    src={flavor.image}
                                    alt={flavor.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t ${flavor.color} via-[#1A0F0A]/80 to-transparent opacity-90`} />
                            </div>

                            <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <h4 className="text-3xl font-serif text-[#FFF8E7] mb-3 drop-shadow-md">{flavor.name}</h4>
                                    <div className="w-12 h-1 bg-[#D4AF37] mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                    <p className="text-[#FFF8E7]/80 font-light mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed text-lg">
                                        {flavor.desc}
                                    </p>
                                    <button className="text-[#D4AF37] text-sm uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 flex items-center gap-2 hover:gap-4 transition-all">
                                        View Details <span>→</span>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
