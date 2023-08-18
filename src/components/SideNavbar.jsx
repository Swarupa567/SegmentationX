import Image from 'next/image';
import view from '../assets/square.png';
import menu from '../assets/menu.png';
import feedback from '../assets/feedback.png';
import Controls from './Controls';
import Mapping from './Mapping';

function SideNavbar() {
  return (
    <div className='flex'>
    <div className='text-indigo-900 bg-white pl-12 pt-5 leading-9 h-full w-80 mt-4 rounded-md border-2 border-solid'>
    <span className='flex'><Image src={view} alt='view' style={{height:'2%', width:'8%'}}/>&nbsp;&nbsp;<p className='-mt-3'>Overview</p></span>
    <span className='flex'><Image src={menu} alt='menu' style={{height:'2%', width:'8%'}}/>&nbsp;&nbsp;<p className='-mt-3'>Video Segmentation</p></span>
    <span className='flex mt-80'><Image src={feedback} alt='feedback' style={{height:'2%', width:'8%'}} />&nbsp;&nbsp;<p className='-mt-3'>Submit Feedback</p></span>
  </div>&nbsp;
  <div className='border-2 h-screen border-white mt-7'></div>&nbsp;&nbsp;
    <div className='w-screen'>
      <Controls />
      <Mapping />
    </div>
    </div>
   
  )
}

export default SideNavbar