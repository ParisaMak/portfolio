
import name1 from '../../asset/name-pic/FONT1-01.png';
import name2 from '../../asset/name-pic/FONT2-01.png';
const Name = () =>{
    return(
    <div className='relative w-full h-full z-40'>
      <img className='absolute  bottom-0' id='img1' src={name1} alt="" />
     <img className='absolute bottom-0 animate-bounce' id='img2' src={name2} alt=""  />
    </div>
    )
}

export default Name;