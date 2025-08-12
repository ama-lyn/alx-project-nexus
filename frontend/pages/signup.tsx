import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { login } from '@/redux/authSlice';
import { User } from '@/interfaces';
import Button from '@/components/common/Button';
import AuthLayout from '@/components/layout/AuthLayout';
import type { NextPageWithLayout } from '@/pages/_app';

const SignUpPage: NextPageWithLayout = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newMockUser: User = {
      id: `user_${Date.now()}`,
      name,
      email,
      location: 'Not specified',
      swapCreditBalance: 0,
    };
    dispatch(login(newMockUser));
    router.push('/dashboard/browse');
  };

  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
      <div className="relative hidden lg:flex items-center justify-center p-8 bg-[url('/assets/images/bg-auth.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gray-900/50"></div>
        
        <div className="text-center max-w-md relative z-10 text-white">
          <Link href='/' className='cursor-pointer'>
          <Image src="/assets/logos/Logo.png" alt="The Circuit Logo" width={180} height={45} className="mx-auto mb-8"/>
          </Link>
            <blockquote className="text-xl italic font-semibold">
              &quot;That is part of the beauty of all literature. You discover that your longings are universal longings, that you&apos;re not lonely and isolated from anyone. You belong.&quot;
            </blockquote>
            <p className="mt-4 font-bold text-gray-800">- F. Scott Fitzgerald</p>
        </div>
      </div>
      <div className="flex items-center justify-center py-12 px-4">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Create an Account</h1>
            <p className="text-balance text-muted-foreground">Enter your information to join The Circuit</p>
          </div>

          {/* Sign Up Form */}
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <label htmlFor="name">Full Name</label>
              <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required className="w-full px-3 py-2 border rounded-md" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-3 py-2 border rounded-md" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="password">Password</label>
              <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full px-3 py-2 border rounded-md" />
            </div>
            <Button label="Sign Up" type="submit" variant="primary" className="w-full" />
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline">Log in</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

SignUpPage.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default SignUpPage;