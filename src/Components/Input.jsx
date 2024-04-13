import React from 'react';
import { useForm } from 'react-hook-form';
import './all.css';

function Input() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); 
    localStorage.setItem('formData', JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Welcome back!👋</h2>

      <div className='page'>
        <div className='Email'>
          <h1>Email</h1>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            placeholder="Email"
            type="email"
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div className="Password">
          <h1>Password</h1>
          <input
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters'
              }
            })}
            placeholder="Password"
            type="password"
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <div className="Password">
          <h1>First Name</h1>
          <input
            {...register('first_name', {
              required: 'First Name is required',
              minLength: {
                value: 3,
                message: 'First Name must be at least 3 characters'
              }
            })}
            placeholder="First Name"
            type="text"
          />
          {errors.first_name && <p>{errors.first_name.message}</p>}
        </div>

        <div className="Password">
          <h1>Last Name</h1>
          <input
            {...register('last_name', {
              required: 'Last Name is required',
              minLength: {
                value: 3,
                message: 'Last Name must be at least 3 characters'
              }
            })}
            placeholder="Last Name"
            type="text"
          />
          {errors.last_name && <p>{errors.last_name.message}</p>}
        </div>

        <div className="Password">
          <h1>Phone Number</h1>
          <input
            {...register('phone_number', {
              required: 'Phone Number is required',
              pattern: {
                value: /^[0-9]{9}$/i,
                message: 'Invalid phone number (must be 9 digits)'
              }
            })}
            placeholder="Phone Number"
            type="tel"
          />
          {errors.phone_number && <p>{errors.phone_number.message}</p>}
        </div>

        <button type="submit" className='btn'>Sign in</button>
      </div>
    </form>
  );
}

export default Input;
