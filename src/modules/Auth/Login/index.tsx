import React from 'react';
import FormInput from "@/components/FormInput";

const Login = () => (
  <section className='h-screen w-full flex justify-center items-center bg-gray-200'>
    <form className='w-full max-w-md bg-white rounded-xl p-6 space-y-3 text-center'>
      <h2 className='font-semibold'>Login</h2>
      <div className="space-y-3">
        <FormInput
          id='email'
          label='Email'
          placeholder='test@gmail.com'
          onChange={() => {}}
        />
        <FormInput
          id='password'
          label='Password'
          type='password'
          onChange={() => {}}
        />
      </div>
    </form>
  </section>
);

export default Login;