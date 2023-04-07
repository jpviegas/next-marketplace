'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schemaForm = z.object({
  user: z.object({
    email: z.string().min(1, 'Email is required').max(12, 'Max 12 characters'),
    password: z.string().min(1, 'Password is required'),
    username: z.string().min(1, 'Username is required')
  })
});

type FormProps = z.infer<typeof schemaForm>;

export default function Signup(): JSX.Element {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const data = { username, email, password };
  const submitProduct = postData(data);

  const {
    // handleSubmit,
    register,
    formState: { errors }
  } = useForm<FormProps>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(schemaForm),
    defaultValues: {
      user: {
        email: '',
        password: '',
        username: ''
      }
    }
  });

  // const handleFormSubmit = (data: FormProps) => {
  //   console.log(data);
  // };

  type User = {
    email: string;
    password: string;
    username: string;
  };

  async function postData(data: User) {
    await axios({
      method: 'POST',
      url: 'http://localhost:8080/auth/register',
      data: data
    });
  }

  return (
    <section>
      <form
        className="m-5 flex h-full flex-col items-center justify-around p-5"
        // onSubmit={() => submitProduct}
      >
        <label
          className="block text-sm font-medium leading-6 text-gray-900"
          htmlFor="username"
        >
          What should we call you?
        </label>
        <input
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          type="text"
          id="username"
          {...register('user.username')}
          placeholder="username"
          maxLength={12}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.user?.username?.message && (
          <p className="text-red-400">{errors.user.username.message}</p>
        )}
        <label
          className="block text-sm font-medium leading-6 text-gray-900"
          htmlFor="email"
        >
          Whats your email?
        </label>
        <input
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          type="email"
          id="email"
          {...register('user.email')}
          placeholder="email@provider.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.user?.email?.message && (
          <p className="text-red-400">{errors.user.email.message}</p>
        )}
        <label
          className="block text-sm font-medium leading-6 text-gray-900"
          htmlFor="password"
        >
          Create a password
        </label>
        <input
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          type="password"
          id="password"
          {...register('user.password')}
          placeholder="******"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.user?.password?.message && (
          <p className="text-red-400">{errors.user.password.message}</p>
        )}
        <button
          className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          type="submit"
          onSubmit={() => submitProduct}
        >
          Sign Up
        </button>
      </form>
    </section>
  );
}
