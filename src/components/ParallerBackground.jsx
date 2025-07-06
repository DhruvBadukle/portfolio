import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import sky from "../assets/sky.jpg";
import mountain1 from "../assets/mountain-1.png";
import mountain2 from "../assets/mountain-2.png";
import mountain3 from "../assets/mountain-3.png";
import planets from "../assets/planets.png";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const springScroll = useSpring(scrollYProgress, { damping: 50 });
  const mountain3Y = useTransform(springScroll, [0, 0.5], ["0%", "70%"]);
  const planetsX = useTransform(springScroll, [0, 0.5], ["0%", "-20%"]);
  const mountain2Y = useTransform(springScroll, [0, 0.5], ["0%", "30%"]);
  const mountain1Y = useTransform(springScroll, [0, 0.5], ["0%", "0%"]);

  return (
    <section className="absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-y-hidden">
        {/* Background Sky */}
        <div
          className="absolute inset-0 w-full h-screen -z-50 bg-cover bg-bottom"
          style={{ backgroundImage: `url(${sky})` }}
        />

        {/* Mountain Layer 3 */}
        <motion.div
          className="absolute inset-0 -z-40"
          style={{ y: mountain3Y }}
        >
          <div
            className="w-full h-full bg-cover bg-bottom"
            style={{ backgroundImage: `url(${mountain3})` }}
          />
        </motion.div>

        {/* Planets */}
        <motion.div
          className="absolute inset-0 -z-30"
          style={{ x: planetsX }}
        >
          <div
            className="w-full h-full bg-cover bg-bottom"
            style={{ backgroundImage: `url(${planets})` }}
          />
        </motion.div>

        {/* Mountain Layer 2 */}
        <motion.div
          className="absolute inset-0 -z-20"
          style={{ y: mountain2Y }}
        >
          <div
            className="w-full h-full bg-cover bg-bottom"
            style={{ backgroundImage: `url(${mountain2})` }}
          />
        </motion.div>

        {/* Mountain Layer 1 */}
        <motion.div
          className="absolute inset-0 -z-10"
          style={{ y: mountain1Y }}
        >
          <div
            className="w-full h-full bg-cover bg-bottom"
            style={{ backgroundImage: `url(${mountain1})` }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ParallaxBackground;
