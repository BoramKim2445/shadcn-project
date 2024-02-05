'use client';

import { useRouter } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import { DropdownMenuLabel, DropdownMenuSeparator } from '../ui/dropdown-menu';
import DropDown from './DropDown';

export default function UserMenu() {
  const router = useRouter();

  const DropDownList = [
    { id: 1, icon: '', value: 'Profile' },
    { id: 2, icon: '', value: 'Billing' },
    { id: 3, icon: '', value: 'Settings' },
    { id: 4, icon: '', value: 'Log out', onClick: () => router.push('/') },
  ];

  return <DropDown button={button} list={DropDownList} content={content} />;
}

const button = (
  <Button variant='ghost' className='relative h-8 w-8 rounded-full'>
    <Avatar className='h-8 w-8'>
      <AvatarImage src='/avatars/01.png' alt='@shadcn' />
      <AvatarFallback>GO</AvatarFallback>
    </Avatar>
  </Button>
);

const content = (
  <>
    <DropdownMenuLabel className='font-normal'>
      <div className='flex flex-col space-y-1'>
        <p className='text-sm font-medium leading-none'>goyoai</p>
        <p className='text-xs leading-none text-muted-foreground'>
          goyoai@example.com
        </p>
      </div>
    </DropdownMenuLabel>
    <DropdownMenuSeparator />
  </>
);
