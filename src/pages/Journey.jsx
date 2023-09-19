import { useState } from 'react';
import { motion } from "framer-motion";
import iranImg from '../asset/journey-pic/iran-01.png';
import italyImg from '../asset/journey-pic/italy-01.png';
import denmarkImg from '../asset/journey-pic/denmark-01.png';
import nlImg from '../asset/journey-pic/netherland-01.png';

const countries = [
    {
        name: 'IRAN',
        description: "Iran was my starting point, where I laid the foundation for my architectural career with a bachelor's degree.",
        img: iranImg
    },
    {
        name: 'ITALY',
        description: "My journey took me to Italy, where I continued to explore architecture and successfully completed my master's degree.",
        img: italyImg
    },
    {
        name: 'DENMARK',
        description: "Denmark became my destination to explore the technological side of architecture, enriching my knowledge.",
        img: denmarkImg
    },
    {
        name: 'NETHERLANDS',
        description: "Eventually, I found myself in the Netherlands, passionately immersing myself in the world of frontend development.",
        img: nlImg
    }
];

const Journey = () => {
    const [hoveredCountry, setHoveredCountry] = useState(null);

    return (
        <section className="h-screen text-white grid grid-cols-5 grid-rows-4">
            <div className="relative row-start-2 row-span-4 col-start-1 col-span-5 bg-black md:col-span-4">
                <div className="grid grid-cols-2 grid-rows-2 h-full w-full">
                    {countries.map(country => (
                        <div
                            key={country.name}
                            onMouseOver={() => setHoveredCountry(country.name)}
                            onMouseOut={() => setHoveredCountry(null)}
                            className="relative flex flex-col justify-center items-center border-2 sm:m-5 px-2 sm:border-4 border-white sm:shadow-3xl"
                        >
                            <motion.p
                                initial={{ opacity: 1 }}
                                animate={{ opacity: hoveredCountry === country.name ? 0 : 1 }}
                                transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
                                className='text-[10px] h-full m-4 px-2 py-0 font-light flex justify-center items-center text-center top-[50%] lg:text-base lg:py-1'
                            >
                                {country.description}
                            </motion.p>
                            <h3 className='hidden sm:block font-bold mb-3'>{country.name}</h3>
                            {hoveredCountry === country.name && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
                                >
                                    <img src={country.img} className="absolute bg-orange border-4 border-white top-0 right-0 z-10 h-full w-full object-top object-cover sm:h-auto sm:scale-75" alt={country.name.toLowerCase()} />
                                </motion.div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="row-start-1 row-span-1 col-start-1 col-span-5 bg-blue border-b-8 border-black grid font-press-start text-3xl items-center p-4 text-[25px] md:text-[30px] xl:text-[35px] md:col-span-4">My Journey</div>
            <div className="hidden row-start-1 row-span-4 col-start-5 col-span-1 bg-circle border-l-8 border-black bg-orange heropattern-diagonalstripes-black border-b-8 md:block"></div>
        </section>
    )
}

export default Journey;