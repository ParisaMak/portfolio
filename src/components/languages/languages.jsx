import cssImg from '../../asset/languages-pic/css-01.png';
import htmlImg from '../../asset/languages-pic/html-01.png';
import reactImg from '../../asset/languages-pic/react-01.png';
import jsImg from '../../asset/languages-pic/js-01.png';

const Languages = () =>{
    return(
        <div className='grid grid-rows-4 w-full h-full sm:grid sm:grid-cols-2  sm:grid-rows-2  object-cover  sm:p-8'>
         <div className={`flex justify-center items-center p-2 `}>
             <img className='w-auto h-full object-fit hover:animate-pulse '  src={htmlImg} alt="HTML" />
          </div>
          <div className='flex justify-center items-center object-fit p-2' >
             <img  className='w-auto h-full object-fit hover:animate-pulse' src={cssImg} alt="CSS" />
          </div>
          <div className='flex justify-center items-center' >
            <img className='w-auto h-full object-fit hover:animate-pulse'src={reactImg} alt="REACT" />
           </div>
          <div className='flex justify-center items-center' >
             <img className='w-auto h-full object-fit hover:animate-pulse' src={jsImg} alt="JS" />
             </div>
        </div>
    )
}

export default Languages;