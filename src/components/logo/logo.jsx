import logo from '../../asset/logo/logo.svg'
import { motion } from "framer-motion"
const Logo = () =>{
    return(

          <motion.div
          className='flex justify-center items-center z-40 h-full w-full '
           animate={{rotate: [0, 0, 180, 180, 0] ,
           scale: [1, 1.5, 1.5, 1, 1]}}
           transition={{ duration: 2 }}
           >     <img src={logo} alt="logo" className='w-[50%]' /></motion.div>
     

    )
}

export default Logo;