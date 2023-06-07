import React, {useState} from 'react';
import DashboardLayout from "@/layouts/DashboardLayout";
import Breadcrumbs from "@/components/Breadcrumbs";
import FormInput from "@/components/FormInput";
import {mailRegex} from "@/utils/regex";

const Dashboard = () => {
  const [form, setForm] = useState({
    name: "",
    email: ""
  })

  const handleChange = (e) =>{
    const {target: {id, value}} = e
    setForm({
      ...form, [id]: value
    })
    console.log(form.name)
  }
  return (
    <DashboardLayout>
      <Breadcrumbs title='Inputs'/>
      <div className='pr-6'>
        <div className='bg-white rounded-xl w-full p-6 space-y-4'>
          <FormInput
            label='Name'
            id='name'
            value={form.name}
            onChange={handleChange}
          />
          <FormInput
            label='Email'
            type='email'
            id='email'
            value={form.email}
            isValid={mailRegex.test(form.email)}
            onChange={handleChange}
          />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;