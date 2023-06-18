import Breadcrumbs from '@/components/Breadcrumbs';
import CustomButton from '@/components/CustomButton';
import useToast from '@/context/hooksContext/toast';
import DashboardLayout from '@/layouts/DashboardLayout';
import axios from 'axios';
import React from 'react';

function Toast() {
  const { showToast } = useToast();

  const handleShowToast = async () => {
    try {
       // Fetch data from API using axios
       const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
       const data = response.data;

      // Do something with the data
      console.log(data);
    } catch (error) {
      console.error(error);
    }

    showToast('Hello, this is a toast message!', 'success');
  }

  return (
    <DashboardLayout>
      <Breadcrumbs title="Toast" />
      <div className="pr-6">
        <div className="bg-white rounded-xl w-full p-6 space-y-4">
          <CustomButton
            className="w-full rounded-xl text-white"
            theme='primary'
            onClick={handleShowToast}>
            Hello
          </CustomButton>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Toast;
