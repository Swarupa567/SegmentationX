'use client'
import Image from 'next/image';
import logo from '../../assets/logo.png';
import noti from '../../assets/notification.png';
import person from '../../assets/person.png';

function Header() {

  return (
    <div className='bg-gradient-to-r from-gray-50 via-slate-50 to-gray-100'>
      <div className='flex justify-between p-2.5'>
      <div>
      </div>
      <div className='flex -ml-96 mr-96' style={{marginLeft:'-38rem'}}>
      <Image src={logo}
      alt="logo"
      style={{
          width: '100%',
          height: '56%',
          objectFit: 'cover',
          alignSelf: 'center',
}}/> &nbsp;<p className='font-semibold text-indigo-900 self-center'>CSM</p>
      </div>
      <div className='flex justify-between pr-12'>
      <span className='pr-4'>
      </span>
         
         <Image src={noti} 
            alt="notifications" 
            style={{
                height:'82%',
                width:'100%',
                alignSelf: 'center',
            }}
            className='pr-4'
         />
         <Image src={person} 
         alt="person" 
         style={{
            height:'75%',
            width:'100%',
            alignSelf: 'center',
        }}        
     />

      </div>
      </div>
    </div>
  )
}

export default Header