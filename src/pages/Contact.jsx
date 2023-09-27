import profileImg from '../asset/profile-pic/portrate-01.png';
import email from '../asset/contac-pic/email-01.png';
import github from '../asset/contac-pic/github-01.png';
import linkedin from '../asset/contac-pic/linkedin1-01.png';
import letsTalk from '../asset/contac-pic/get in touch-01.png';
import cv from '../asset/contac-pic/CV-01.png'

const Contact = () => {
  return (
    <section className="bg-gray h-screen text-white grid grid-cols-5 grid-rows-4">
      <div className="row-start-1 row-span-1 col-start-1 col-span-5 bg-blue font-press-start text-3xl border-b-8 border-black heropattern-diagonalstripes-black"></div>
      <div className="relative border-b-8 row-start-2 row-span-2 col-start-1 col-span-5 bg-orange text-black flex flex-row sm:col-span-4 sm:row-span-3 sm:border-b-0">
        <div className=" flex justify-center items-center object-cover  w-[50%] sm:w-[60%] ">
          <img src={letsTalk} alt="Let's Talk" className='h-[60%]' />
        </div>
        <div className="flex flex-col items-center justify-center flex-1 scale-50 ">
          <a href="https://www.linkedin.com/in/parisa-makarian?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B2FO%2Bo4NzQoGAI%2Bw1Y1LSZw%3D%3D"><img className="scale-75 hover:animate-spin" src={linkedin} alt="LinkedIn" /></a>
          <a href="https://github.com/ParisaMak"><img className="scale-75 hover:animate-spins" src={github} alt="GitHub" /></a> 
          <a href = "mailto: parisa.makariann@gmail.com"><img className="scale-75 hover:animate-spin" src={email} alt="Email" /></a>
          <a href="/CV.pdf" target="_blank" ><img className="scale-75 hover:animate-spin" src={cv} alt="cv" /></a>
          
        </div>
      </div>
      <div className="hidden row-start-1 row-span-2 col-start-5 col-span-1 bg-white border-b-8 border-black heropattern-polkadots-black border-l-8 sm:block"></div>
      <div className="flex justify-center items-center border-r-8 row-start-4 row-span-1 col-start-1 col-span-2 sm:row-start-3 sm:row-span-2 sm:col-start-5 sm:col-span-1 bg-white  sm:border-l-8 border-black  sm:block">
        <img className="h-full  object-cover" src={profileImg} alt="Profile Pic" />
      </div>
    </section>
  );
};

export default Contact;