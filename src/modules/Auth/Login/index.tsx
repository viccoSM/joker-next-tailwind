import React, { FormEvent, useState } from 'react';
import FormInput from "@/components/FormInput";
import { useRouter } from 'next/router';
import CustomButton from '@/components/CustomButton';
import axios from 'axios';

const Login = () => {
  const router = useRouter()

  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const [isLoading, setIsloading] = useState(false)

  const handleChange = (e: any) => {
    const {target: {value, id}} = e
    setForm({...form, [id]: value})
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsloading(true)
    try{
      router.push('/dashboard')
    } catch(error) {
      console.error(error)
    } 
    setIsloading(false) 
  }

  return (
    <section className='h-screen w-full flex justify-center items-center bg-gray-200'>
      <form  onSubmit={handleSubmit} method='post' className='w-full max-w-md bg-white rounded-xl p-6 space-y-3 text-center'>
        <h2 className='font-semibold'>Login</h2>
        <div className="space-y-3">
          <FormInput
            id='email'
            label='Email'
            placeholder='test@gmail.com'
            value={form.email}
            onChange={handleChange}
          />
          <FormInput
            id='password'
            label='Password'
            type='password'
            value={form.password}
            onChange={handleChange}
          />
          <CustomButton
            className='w-full bg-blue-300 p-2 rounded-xl text-white'
            type='submit'
            disabled={!form.email || !form.password}
            isLoading={isLoading}
          >
            Login
          </CustomButton>
        </div>
      </form>
    </section>
  );
}

export default Login;