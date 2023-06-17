import React, { useState } from 'react';
import DashboardLayout from '@/layouts/DashboardLayout';
import Breadcrumbs from '@/components/Breadcrumbs';
import FormInput from '@/components/FormInput';
import { MailRegex } from '@/utils/regex';
import CustomButton from '@/components/CustomButton';

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    number: ''
  });

  const handleSubmit = () => {
  
  }

  const handleChange = (e: any) => {
    const {
      target: { value, id },
    } = e;
    setForm({ ...form, [id]: value });
  };

  return (
    <DashboardLayout>
      <Breadcrumbs title="Inputs" />
      <div className="pr-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl w-full p-6 space-y-4">
          <FormInput
            label="Name"
            id="name"
            value={form.name}
            onChange={handleChange}
          />
          <FormInput
            label="Email"
            type="email"
            id="email"
            isValid={MailRegex.test(form.email)}
            value={form.email}
            feedback="Invalid Email"
            onChange={handleChange}
          />
          <FormInput
            label="Number"
            id="number"
            type="number"
            value={form.number}
            onChange={handleChange}
          />
          <div className="w-full flex justify-end">
            <CustomButton
              className="w-1/4 bg-blue-300 p-2 rounded-xl"
              type="submit"
              isLoading={isLoading}>
              Login
            </CustomButton>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
