import React from 'react';
import Navbar from './Navbar';
import Image from 'next/image';

import Link from 'next/link';
import UserInfo from './UserInfo';

const Header = () => {
    const date= new Date().toLocaleDateString('bn-BD',{
        dateStyle:"full"
    })
   
    return (
        <div>
            <div className='flex justify-center max-w-7xl mx-auto relative my-3'>

            <div className='flex items-center justify-center gap-2 '>
                <div >
                <Link href={'/'}>
                <Image src={'/logo.webp'} width={50} height={50} alt='logo ' className='h-[40]  w-[40]'>
                </Image>
                </Link>
                </div>
                <div>

                <h2>Bangla News 24</h2>
                <p className='text-gray-400 font-light'>{date}</p>
                </div>
            </div>
                <UserInfo></UserInfo>
            </div>
            <Navbar></Navbar>
          
        </div>
    );
};

export default Header;