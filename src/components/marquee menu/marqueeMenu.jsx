import { motion } from "framer-motion";

const MarqueeMenu = () =>{

  const marqueeVariants = {
    animate: {
      x: [0, -1035],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  }; 
  return(
      <div className="relative top-0 bg-black flex col-start-1 col-end-6 w-full overflow-x-hidden h-full">
          <motion.div
          className="absolute whitespace-nowrap "
          variants={marqueeVariants}
          animate="animate"
          >
          <h1 className="text-white font-bold text-3xl h-full ">
              Menu Menu Menu Menu Menu Menu Menu Menu Menu Menu Menu Menu Menu Menu Menu Menu Menu Menu Menu Menu Menu Menu Menu Menu Menu Menu Menu Menu Menu Menu Menu Menu Menu Menu Menu Menu Menu Menu Menu Menu Menu Menu Menu Menu Menu Menu Menu Menu Menu Menu Menu Menu Menu Menu Menu Menu Menu
          </h1>
          </motion.div>
      </div>
  )
}

export default MarqueeMenu;
