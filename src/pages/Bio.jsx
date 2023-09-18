import Logo from '../components/logo/logo';
import Languages from '../components/languages/languages';
import Marquee from '../components/marquee/marquee';
import Name from '../components/name/name';
import RevealText from '../components/reveal text/revealText';
import Text from '../components/3dText/3dText';


const Bio = () =>{


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
    

    return (
 
       <section  className=" h-screen grid grid-cols-5 grid-rows-4 text-black ">

         <div className="hidden border-r-8 border-b-8 col-span-1 border-black bg-gray sm:block">
            <Logo /> 
         </div>

         <div className="border-b-8 border-black bg-blue col-span-5 sm:col-span-4  md:col-span-3">
            <Name />
          </div>

         <div className="row-start-2 col-span-2  border-b-8  border-r-8  border-black bg-gray">
          <RevealText />
         </div>

         <div className="row-start-3 row-span-5 col-span-2 border-r-8 border-b-8 border-black  bg-orange">
            <Languages />
         </div>

         <div className="row-start-2 row-end-4 col-start-3 col-end-6 sm:col-end-5 bg-blue">
            <div className='  flex items-center justify-center h-full'> 
                <Text />
            </div>
     
        </div>
         <div className="hidden row-start-2 row-end-4 bg-gray border-l-8  border-black sm:block md:row-start-1"></div>

         <div className="bg-black col-start-3 col-end-6 border-t-8  border-b-8 border-black row-start-4 row-span-1">
          <Marquee marqueeVariants={marqueeVariants}/>
         </div>
 
        </section>
    )
}
export default Bio;