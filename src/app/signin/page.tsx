import { Metadata } from 'next';
import Link from 'next/link';
import AuthTemplate from '@/components/auth/AuthTemplate';

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.',
};

export default function SignInPage() {
  return (
    <AuthTemplate
      title='Create an account'
      description='Enter your email below to signin your account'
      moveLink={{ label: 'Login', href: '/' }}
      moreDiscription={MoreDescription}
      buttonContent='create acount'
    />
  );
}

const MoreDescription = (
  <>
    By clicking continue, you agree to our{' '}
    <Link
      href='/terms'
      className='underline underline-offset-4 hover:text-primary'
    >
      Terms of Service
    </Link>{' '}
    and{' '}
    <Link
      href='/privacy'
      className='underline underline-offset-4 hover:text-primary'
    >
      Privacy Policy
    </Link>
    .
  </>
);
