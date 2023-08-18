import Image from 'next/image';
import arrow from '../assets/arrow.png';
import download from '../assets/download.png';
function Controls() {
  return (
    <div className=' flex w-full justify-between mt-4'>
       <Image src={arrow} alt='arrow' style={{height:'3%', width:'1%'}} className='mt-3' />
       <span className='flex'><p className='text-indigo-900 p-2'>SESSION_1687955097_5347443</p>&nbsp;<span className='bg-blue-200 h-fit rounded-2xl p-1.5'>Real2SimCompleted</span></span>
       <button className='flex bg-gray-300 h-fit rounded p-2 mr-4 me-8'><Image src={download} alt='download' height={25} width={25} />&nbsp;<p className='text-indigo-900'>Download</p></button>
    </div>
  )
}

export default Controls