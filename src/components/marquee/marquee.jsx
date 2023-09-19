import { motion } from "framer-motion";

const Marquee = ({marqueeVariants}) =>{
    return(
        <div className="relative w-full h-full overflow-x-hidden flex items-center">
            <motion.div
            className="absolute whitespace-nowrap"
            variants={marqueeVariants}
            animate="animate"
            >
            <h1 className="text-white font-bold text-5xl ">
                Let's Work Together. Let's Work Together. Let's Work Together. Let's
                Work Together. Let's Work Together. Let's Work Together. Let's Work
                Together
            </h1>
            </motion.div>
        </div>
    )
}

export default Marquee;