import { ReactNode } from 'react';
import SideNav from '@/components/common/SideNav';
import Header from '@/components/common/Header';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className='sticky flex h-full'>
      <SideNav />
      <div className='grow overflow-y-scroll flex flex-col'>
        <Header />
        {children}
      </div>
    </div>
  );
}
