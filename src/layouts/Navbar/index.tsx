import React from 'react';
import {Bell} from "react-feather";
import Image from "next/image";

const Navbar = () => (
  <section className='h-[72px] sticky w-full bg-white px-6 flex justify-between items-center'>
    <h3>Admin</h3>
    <div className="flex items-center space-x-4">
      <button>
        <Bell/>
      </button>
      <button>
        <Image className='rounded-full' src='/images/profile.jpg' alt='profile' width={40} height={40}/>
      </button>
    </div>
  </section>
);

export default Navbar;