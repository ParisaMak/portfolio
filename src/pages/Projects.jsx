import React, { useRef } from "react";
import { BiSolidChevronRightCircle, BiSolidChevronLeftCircle } from "react-icons/bi";
import imgRobot from "../asset/project-pic/robot.jpg";
import imgQuote from "../asset/project-pic/mouth.jpg";
import imgHm from "../asset/project-pic/clothes shop.jpg";
import imgSong from "../asset/project-pic/song.jpg";
import imgMovie from "../asset/project-pic/cinema.jpg";
import { Link } from "react-router-dom";


const projectData = [
  { imgSrc: imgHm , alt: "h&m", title: "h&m-clone", to:'https://hm-clone-website.netlify.app/'},
  { imgSrc: imgSong, alt: "Song", title: "Song-Pal", to:'https://song-pal.netlify.app/' },
  { imgSrc: imgMovie, alt: "Movie", title: "Netflix-Clone", to:'https://movies-clone-website.netlify.app/' },
  { imgSrc: imgRobot, alt: "Robot", title: "RobotoFriends", to:'https://robotmonsters.netlify.app/' },
  { imgSrc: imgQuote, alt: "Quote", title: "Quote Generator", to:'https://quotes-generatorwebsite.netlify.app/' }
];

const Projects = () => {

    const sliderRef = useRef(null);

    const handleSlideLeft = () => {
      sliderRef.current.scrollBy(500, 0);
    };
  
    const handleSlideRight = () => {
      sliderRef.current.scrollBy(-500, 0);
    };

  return (
    <section className=" h-screen text-white grid grid-cols-5 grid-rows-4">
      <div className="row-start-1 row-span-1 col-start-1 col-span-6 bg-orange font-press-start text-[25px] border-b-8 border-t-8  border-black flex items-center p-4  md:text-[30px] xl:text-[35px]">My Projects</div>
      <div className=" hidden text-[10px] font-medium row-start-2 row-span-4 col-start-1 col-span-2 bg-gray text-black border-b-8 border-black p-4 sm:text-sm sm:block md:text-md md:p-8 lg:text-lg ">Let's blend creativity and technology, crafting a visually captivating experience for users. Join me on this journey as we sculpt pixels into beautiful designs and weave user-friendly interfaces. Together, we'll unravel the mysteries of front-end artistry, making your online presence truly unforgettable.</div>

      <div className="row-start-2 row-span-4 col-start-1 col-span-6 bg-white sm:col-start-3 ">
                <div className="relative w-full h-full whitespace-nowrap border-b-8 sm:border-l-8 border-black">
                    <BiSolidChevronLeftCircle
                        onClick={handleSlideRight}
                        size={40}
                        className="rounded-full absolute top-[50%] cursor-pointer z-10"
                    />
                    <div id="slider" ref={sliderRef} className="w-full h-full flex flex-row overflow-x-scroll scroll-smooth scrollbar-hide">
                        {projectData.map(project => (
                           <div key={project.title} className="w-[300px] h-full shrink-0 border-r-4 border-black">
                            <a href={project.to}><img className="border-b-4 border-black" src={project.imgSrc} alt={project.alt} /></a> 
                                <h1 className="text-black text-3xl w-full text-center">{project.title}</h1>
                            </div>
                        ))}
                    </div>
                    <BiSolidChevronRightCircle
                        onClick={handleSlideLeft}
                        size={40}
                        className="absolute rounded-full top-[50%] right-0 cursor-pointer z-10"
                    />
                </div>
      </div>
    </section>
  );
};

export default Projects;