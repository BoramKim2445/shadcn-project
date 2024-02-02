import { ReactNode } from 'react';
import SideNav from '@/components/common/SideNav';
import Header from '@/components/common/Header';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className='sticky flex h-full'>
      <SideNav />
      <div className='grow overflow-y-auto flex flex-col'>
        <Header />
        <main className='w-full flex-col md:flex'>
          <div className='flex-1 space-y-4 py-8 px-4 pt-6'>{children}</div>
        </main>
      </div>
    </div>
  );
}
