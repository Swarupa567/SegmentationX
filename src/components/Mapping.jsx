import Image from 'next/image';
import crop from '../assets/crop.png';
import redo from '../assets/redo.png';
import erase from '../assets/eraser.png';
import clean from  '../assets/erase.png';
import image from '../assets/image.png';
import raise from '../assets/raise.svg';
import inputMask from '../assets/inputmask.jpeg';

function Mapping() {
  return (
    <div className='flex justify-between bg-white rounded-xl w-full mt-4 -ml-1 h-96'>
    <div className='grid grid-cols-2 gap-2 max-h-5 p-8'>
       <Image src={crop} alt={crop} height={15} width={30} className='border-indigo-100 border-2 p-1 rounded-md'/>
       <Image src={redo} alt={redo} height={15} width={30} className='border-indigo-100 border-2 p-1.5 rounded-md'/>
       <Image src={erase} alt={erase} height={20} width={35} className='border-indigo-100 border-2 p-1 rounded-md'/>
       <Image src={clean} alt={clean} height={20} width={35} className='border-indigo-200 border-2 p-1 rounded-md'/>
       <Image src={image} alt={image} height={20} width={35} className='border-indigo-200 border-2 p-1 rounded-md'/>
       <Image src={raise} alt={raise} height={20} width={35} className='border-indigo-200 border-2 p-1 rounded-md'/>
    </div>
    <div className='rounded-xl ml-8'>
       <Image src={inputMask} alt={inputMask} 
        style={{
            height:'74%',
            width:'100%'
        }}
        className='rounded-xl mt-12'
        />
    </div>
    <div classname='h-96 pl-36 ml-8'>
        <button className='bg-gray-300 text-indigo-900 p-1.5 rounded-md mt-12 mb-4 px-10'>Object</button><br />
        <button className='bg-red-600 text-white p-1.5 rounded-md  mb-4 px-5'>Background</button><br />
        <button className='bg-gray-300 text-indigo-900 p-1.5 rounded-md  mr-4 mb-4 px-5 mt-40'>Mask Opacity</button>
    </div>
        
    </div>
  )
}

export default Mapping