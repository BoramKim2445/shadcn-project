'use client';

import Link from 'next/link';

import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    id: number;
    href: string;
    title: string;
  }[];
}

export default function MenuItems({
  className,
  items,
  ...props
}: SidebarNavProps) {
  return (
    <nav
      className={cn(
        'flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1',
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'hover:bg-gray-white',
            'justify-start'
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
