import React, {FC, ReactNode} from 'react';
import Sidebar from "@/layouts/Sidebar";

interface DashboardLayoutProps {
  children: ReactNode
}

const DashboardLayout:FC<DashboardLayoutProps> = ({children}) => (
  <div className='bg-gray-100 w-full h-screen flex'>
    <Sidebar/>
    {children}
  </div>
);

export default DashboardLayout;