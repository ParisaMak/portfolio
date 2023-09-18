import profileImg from '../asset/profile-pic/portrate-01.png';
import email from '../asset/contac-pic/email.svg';
import github from '../asset/contac-pic/github.svg';
import linkedin from '../asset/contac-pic/linkedin.svg';
import letsTalk from '../asset/contac-pic/get in touch.svg';

const Contact = () => {
  return (
    <section className="bg-green-600 h-screen text-white grid grid-cols-5 grid-rows-4">
      <div className="row-start-1 row-span-1 col-start-1 col-span-5 bg-blue font-press-start text-3xl border-b-8 border-black heropattern-diagonalstripes-black"></div>
      <div className="relative row-start-2 row-span-4 col-start-1 col-span-5 bg-orange text-black border-black flex flex-row sm:col-span-4">
        <div className="scale-75 flex flex-1">
          <img src={letsTalk} alt="Let's Talk" />
        </div>
        <div className="flex flex-col items-center justify-center flex-1">
          <a href="https://www.linkedin.com/in/parisa-makarian?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B2FO%2Bo4NzQoGAI%2Bw1Y1LSZw%3D%3D"><img className="scale-75 hover:animate-spin" src={linkedin} alt="LinkedIn" /></a>
          <a href="https://github.com/ParisaMak"><img className="scale-75 hover:animate-spin" src={github} alt="GitHub" /></a> 
          <a href="parisa.makariann@gmail.com"><img className="scale-75 hover:animate-spin" src={email} alt="Email" /></a>
        </div>
      </div>
      <div className="hidden row-start-1 row-span-2 col-start-5 col-span-1 bg-white border-b-8 border-black heropattern-polkadots-black border-l-8 sm:block"></div>
      <div className="hidden row-start-3 row-span-2 col-start-5 col-span-1 bg-white  border-l-8 border-black  sm:block">
        <img className="h-full w-full object-cover" src={profileImg} alt="Profile Pic" />
      </div>
    </section>
  );
};

export default Contact;