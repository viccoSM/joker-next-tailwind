import React, {FC, ReactNode} from 'react';
import Sidebar from "@/layouts/Sidebar";
import Navbar from "@/layouts/Navbar";

interface DashboardLayoutProps {
  children: ReactNode
}

const DashboardLayout:FC<DashboardLayoutProps> = ({children}) => (
  <div className='bg-gray-100 w-full h-screen flex'>
    <Sidebar/>
    <div className="w-full h-screen overflow-auto">
      <Navbar/>
      <div className='pl-4 pt-3'>
        {children}
      </div>
    </div>
  </div>
);

export default DashboardLayout;