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

const LoginPage: NextPageWithLayout = () => {
  const [email, setEmail] = useState('zelia@example.com');
  const [password, setPassword] = useState('password123');
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mockUser: User = { 
      id: 'user_123', name: 'Circuit', email, location: 'Nairobi, Kenya', swapCreditBalance: 500
    };
    dispatch(login(mockUser));

    router.push('/dashboard/browse');
  };

  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2">
      
      <div 
        className="relative hidden lg:flex items-center justify-center p-8 bg-[url('/assets/images/bg-auth.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gray-900/50"></div>

        <div className="text-center max-w-md relative z-10 text-white">
          <Link href='/' className='cursor-pointer'>
          <Image src="/assets/logos/Logo.png" alt="The Circuit Logo" width={180} height={45} className="mx-auto mb-8"/>
          </Link>
            <blockquote className="text-xl italic font-semibold">
              &quot;A reader lives a thousand lives before he dies . . . The man who never reads lives only one.&quot;
            </blockquote>
            <p className="mt-4 font-bold">- George R.R. Martin</p>
        </div>
      </div>

      <div className="flex items-center justify-center py-12 px-4">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Welcome Back</h1>
            <p className="text-balance text-muted-foreground">Enter your email below to log in to your account</p>
          </div>
          
          
          {/* Login Form */}
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-3 py-2 border rounded-md" />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <label htmlFor="password">Password</label>
                <Link href="/forgot-password"className="ml-auto inline-block text-sm underline">Forgot your password?</Link>
              </div>
              <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full px-3 py-2 border rounded-md" />
            </div>
            <Button label="Login" type="submit" variant="primary" className="w-full" />
          </form>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="underline">Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// This is the magic line that applies our new layout
LoginPage.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default LoginPage;