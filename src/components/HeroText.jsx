import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
    const words = ["Secure", "Modern", "Scalable"];

    const variants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
            {/* Desktop View */}
            <div className="hidden flex-col md:flex space-y-4">
                <motion.h1
                    className="text-4xl font-medium"
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1 }}
                >
                    Hi I'm Dhruv
                </motion.h1>

                <div className="flex flex-col items-start space-y-4">
                    <motion.p
                        className="text-5xl font-medium text-neutral-300"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.2 }}
                    >
                        A Developer <br /> Dedicated to Crafting
                    </motion.p>

                    <motion.div
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.5 }}
                    >
                        <div className="h-[100px] flex items-center">
                            <FlipWords words={words} className="text-8xl font-black text-white" />
                        </div>
                    </motion.div>

                    <motion.p
                        className="text-4xl font-medium text-neutral-300"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.8 }}
                    >
                        Web Solutions
                    </motion.p>
                </div>
            </div>

            {/* Mobile View */}
            <div className="flex flex-col space-y-6 md:hidden">
                <motion.p
                    className="text-4xl font-medium"
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1 }}
                >
                    Hi, I'm Dhruv
                </motion.p>

                <div className="space-y-4">
                    <motion.p
                        className="text-5xl font-black text-neutral-300"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.2 }}
                    >
                        Building
                    </motion.p>

                    <motion.div
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.5 }}
                    >
                        {/* FlipWords with reserved space */}
                        <div className="h-[80px] min-w-[200px] flex items-center text-7xl font-bold text-white">
                            <FlipWords words={words} />
                        </div>

                    </motion.div>

                    <p className="text-4xl font-black text-neutral-300">
                        Web Applications
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HeroText;
