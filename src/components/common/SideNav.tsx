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
import { usePathname, useRouter } from 'next/navigation';
import HistoryNavContent from '../menu/HistoryNavContent';
import TalkNavContent from '../menu/TalkNavContent';
import SearchNavContent from '../menu/SearchNavContent';

export default function SideNav() {
  const [openNav, setOpenNav] = useState(false);
  const [navTitle, setNavTitle] = useState('');
  const [navContent, setNavContent] = useState<null | ReactNode>(null);

  const router = useRouter();
  const pathname = usePathname();

  const handleOpenNav = (title: string, content: ReactNode) => {
    setOpenNav(true);
    setNavTitle(title);
    setNavContent(content);
  };

  const handleCloseNav = () => setOpenNav(false);

  const NavList = [
    {
      id: 1,
      icon: (
        <HomeIcon
          width={'1.2rem'}
          height={'1.2rem'}
          fill={pathname.includes('/home') ? '#ffffff' : '#D6D6D6'}
        />
      ),
      title: 'Home',
      href: '/home',
    },
    {
      id: 2,
      icon: (
        <DashboardIcon
          width={'1.2rem'}
          height={'1.2rem'}
          fill={pathname.includes('/dashboard') ? '#ffffff' : '#D6D6D6'}
        />
      ),
      title: 'Dashboard',
      content: <DashboardNav />,
      href: '/dashboard',
    },
    {
      id: 3,
      icon: <HistoryIcon width={'1.2rem'} height={'1.2rem'} />,
      title: '과거 내역 조회하기',
      content: <HistoryNavContent />,
    },
    {
      id: 4,
      icon: <TalkIcon width={'1.2rem'} height={'1.2rem'} />,
      title: 'Talk',
      content: <TalkNavContent />,
    },
    {
      id: 5,
      icon: <SearchIcon width={'1.3rem'} height={'1.3rem'} />,
      title: 'Search',
      content: <SearchNavContent />,
    },
  ];

  return (
    <>
      {/* mini nav */}
      <nav className='m-2 mr-0 px-2 py-8 flex flex-col items-center gap-5 bg-white border border-gray-border rounded-lg'>
        <h2 className='mb-8'>
          <LogoIcon width='2rem' height='2rem' />
        </h2>
        {NavList.map((item) => (
          <Button
            variant='ghost'
            key={item.id}
            className={`py-1 px-2 bg-white ${
              item.href && pathname.includes(item?.href)
                ? 'bg-black hover:bg-black'
                : ''
            }`}
            onClick={
              item.content
                ? () => handleOpenNav(item.title, item.content)
                : () => {
                    router.push(item?.href ?? '');
                    handleCloseNav();
                  }
            }
          >
            {item.icon}
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
