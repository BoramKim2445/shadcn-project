'use client';

import { Button } from '../ui/button';
import HomeIcon from '../../assets/icon/menu/home.svg';
import DashboardIcon from '../../assets/icon/menu/dashboard.svg';
import HistoryIcon from '../../assets/icon/menu/history.svg';
import TalkIcon from '../../assets/icon/menu/talk.svg';
import SearchIcon from '../../assets/icon/menu/search.svg';
import LogoIcon from '../../assets/icon/goyoai_logo.svg';
import { useState } from 'react';
import NavContent from './NavContent';

export default function SideNav() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className='z-[200] flex fixed top-0 bottom-0 left-0'>
      <nav className='m-2 mr-0 px-2 py-8 flex flex-col items-center gap-5 bg-white border border-gray-border rounded-lg'>
        <h2 className='mb-8'>
          <LogoIcon className='w-7' />
        </h2>
        {NavList.map((item) => (
          <Button
            variant='ghost'
            key={item.id}
            className='p-0 bg-white'
            onClick={() => setOpenNav((prev) => !prev)}
          >
            {item.icon}
          </Button>
        ))}
      </nav>
      {openNav && <NavContent />}
    </div>
  );
}

const NavList = [
  { id: 1, icon: <HomeIcon /> },
  { id: 2, icon: <DashboardIcon /> },
  { id: 3, icon: <HistoryIcon /> },
  { id: 4, icon: <TalkIcon /> },
  { id: 5, icon: <SearchIcon /> },
];
