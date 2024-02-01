'use client';

import { Button } from '../ui/button';
import HomeIcon from '../../assets/icon/menu/home.svg';
import DashboardIcon from '../../assets/icon/menu/dashboard.svg';
import HistoryIcon from '../../assets/icon/menu/history.svg';
import TalkIcon from '../../assets/icon/menu/talk.svg';
import SearchIcon from '../../assets/icon/menu/search.svg';
import LogoIcon from '../../assets/icon/goyoai_logo.svg';
import { ReactNode, useState } from 'react';
import NavContent from './NavContent';
import DashboardNav from '../dashboard/DashboardNav';

export default function SideNav() {
  const [openNav, setOpenNav] = useState(false);
  const [navTitle, setNavTitle] = useState('');
  const [navContent, setNavContent] = useState<null | ReactNode>(null);

  const handleOpenNav = (title: string, content: ReactNode) => {
    setOpenNav(true);
    setNavTitle(title);
    setNavContent(content);
  };

  const handleCloseNav = () => setOpenNav(false);

  return (
    <>
      {/* mini nav */}
      <nav className='m-2 mr-0 px-2 py-8 flex flex-col items-center gap-5 bg-white border border-gray-border rounded-lg'>
        <h2 className='mb-8'>
          <LogoIcon width='2rem' height='2rem' />
        </h2>
        {NavList.map(({ id, title, icon, content }) => (
          <Button
            variant='ghost'
            key={id}
            className='p-0 bg-white'
            onClick={() => handleOpenNav(title, content)}
          >
            {icon}
          </Button>
        ))}
      </nav>
      {/* contnent nav */}
      {openNav && (
        <div className='m-2 w-1/4'>
          <NavContent
            title={navTitle}
            closeNav={handleCloseNav}
            content={navContent}
          />
        </div>
      )}
    </>
  );
}

const NavList = [
  {
    id: 1,
    icon: <HomeIcon width={'2.5rem'} height={'2.5rem'} />,
    title: 'Home',
    content: <div>home</div>,
  },
  {
    id: 2,
    icon: <DashboardIcon width={'2.5rem'} height={'2.5rem'} />,
    title: 'Dashboard',
    content: <DashboardNav />,
  },
  {
    id: 3,
    icon: <HistoryIcon width={'2.5rem'} height={'2.5rem'} />,
    title: 'History',
    content: <div>history</div>,
  },
  {
    id: 4,
    icon: <TalkIcon width={'2.5rem'} height={'2.5rem'} />,
    title: 'Talk',
    content: <div>talk</div>,
  },
  {
    id: 5,
    icon: <SearchIcon width={'2.5rem'} height={'2.5rem'} />,
    title: 'Search',
    content: <div>search</div>,
  },
];
