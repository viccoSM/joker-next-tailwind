import Breadcrumbs from '@/components/Breadcrumbs';
import CustomButton from '@/components/CustomButton';
import { AppContext } from '@/context';
import useToast from '@/context/hooksContext/toast';
import DashboardLayout from '@/layouts/DashboardLayout';
import React, { useContext } from 'react';

function Toast() {
  const {showToast} = useToast()

  const handleShowToast = () => {
    showToast('Hello, this is a toast message!', 'success');
  };

  const showToastTest = () => {
    showToast('Hello', 'success');
  };
  
  return (
    <DashboardLayout>
      <Breadcrumbs title="Toast" />
      <div className="pr-6">
        <div className="bg-white rounded-xl w-full p-6 space-y-4">
          <CustomButton 
          className="w-full bg-blue-300 p-2 rounded-xl text-white"
          onClick={handleShowToast}>
            Hello
          </CustomButton>
          <CustomButton 
          className="w-full bg-blue-300 p-2 rounded-xl text-white"
          onClick={showToastTest}>
            Test
          </CustomButton>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Toast;
