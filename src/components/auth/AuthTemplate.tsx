import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';

import { ReactNode } from 'react';
import AuthForm from './AuthForm';

interface AuthTemplateProps {
  title: string;
  description?: string;
  moveLink?: { label: string; href: string };
  moreDiscription?: ReactNode | string;
  buttonContent: string;
}

export default function AuthTemplate({
  title,
  description,
  moveLink,
  moreDiscription,
  buttonContent,
}: AuthTemplateProps) {
  return (
    <main className='container relative h-full flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
      {moveLink && (
        <Link
          href={moveLink.href}
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'absolute right-4 top-4 md:right-8 md:top-8'
          )}
        >
          {moveLink.label}
        </Link>
      )}

      <div className='relative hidden h-full flex-col bg-black p-10 text-white lg:flex dark:border-r'>
        <div className='absolute inset-0 bg-zinc-900' />
        {Logo}
      </div>

      <div className='lg:p-8'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
          <div className='flex flex-col space-y-2 text-center'>
            <h1 className='text-2xl font-semibold tracking-tight'>{title}</h1>
            <p className='text-sm text-muted-foreground'>{description}</p>
          </div>
          <AuthForm buttonContent={buttonContent} />
          <p className='px-8 text-center text-sm text-muted-foreground'>
            {moreDiscription}
          </p>
        </div>
      </div>
    </main>
  );
}

const Logo = (
  <div className='relative z-20 flex items-center text-lg font-medium'>
    Goyoai
  </div>
);
