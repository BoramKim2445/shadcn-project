import { Metadata } from 'next';
import AuthTemplate from '@/components/auth/AuthTemplate';

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.',
};

export default function LoginPage() {
  return (
    <AuthTemplate
      title='Login'
      description='Enter your email below to enter your account'
      moveLink={{ label: 'Signin', href: '/signin' }}
      buttonContent='login'
    />
  );
}
