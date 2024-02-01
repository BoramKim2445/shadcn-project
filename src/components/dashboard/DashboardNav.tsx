import Acordian from '../common/Acordian';
import LockIcon from '../../assets/icon/menu/dashboard/lock.svg';
import MenuItems from './MenuItems';

export default function DashboardNav() {
  return (
    <>
      <Acordian
        title='오늘 만든 대시보드'
        contents={<MenuItems items={SampleContent} />}
        triggerIcon={<LockIcon width='1.3rem' height='1.3rem' />}
      />
      <Acordian
        title='공유중인 대시보드'
        contents={<MenuItems items={SampleContent} />}
        triggerIcon={<LockIcon width='1.3rem' height='1.3rem' />}
      />
      <Acordian
        title='내가 생성한 대시보드'
        contents={<MenuItems items={SampleContent} />}
        triggerIcon={<LockIcon width='1.3rem' height='1.3rem' />}
      />
    </>
  );
}

const SampleContent = [
  { id: 1, href: '/dashboard', title: 'sample1' },
  { id: 2, href: '/dashboard', title: 'sample2' },
];
