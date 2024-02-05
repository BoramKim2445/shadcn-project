import { Metadata } from 'next';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card';
import MiniCard from '@/components/home/MiniCard';
import BigCard from '@/components/home/BigCard';
import Title from '@/components/common/Title';
// import {
//   Tabs,
//   TabsContent,
//   TabsList,
//   TabsTrigger,
// } from '@/registry/new-york/ui/tabs';
// import { CalendarDateRangePicker } from '@/app/examples/dashboard/components/date-range-picker';
// import { MainNav } from '@/app/examples/dashboard/components/main-nav';
// import { Overview } from '@/app/examples/dashboard/components/overview';
// import { RecentSales } from '@/app/examples/dashboard/components/recent-sales';
// import { Search } from '@/app/examples/dashboard/components/search';
// import TeamSwitcher from '@/app/examples/dashboard/components/team-switcher';
// import { UserNav } from '@/app/examples/dashboard/components/user-nav';

export const metadata: Metadata = {
  title: 'HomePage',
  description: 'HomePage app built using the components.',
};

export default async function HomePage() {
  return (
    // <div className='flex-col md:flex'>
    <>
      <Title title='Home' />

      <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 '>
        <div className='col-span-1'>
          <BigCard
            title='오늘 매출실적이 좋아요'
            color='black'
            discription='불라불라'
            content={<p className='text-xl font-semibold '>132.7억원</p>}
          />
        </div>
        {sampleDatas.map((item) => (
          <MiniCard
            key={item.id}
            title={item.title}
            icon={item.icon}
            money={item.money}
            description={item.description}
          />
        ))}
      </div>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-7'>
        <div className='col-span-4'>
          <BigCard title='Overview' />
        </div>
        <div className='col-span-3'>
          <BigCard
            title='Recent Sales'
            discription='You made 265 sales this month.'
          />
        </div>
      </div>
    </>
    // </div>
  );
}

const sampleDatas = [
  {
    id: 1,
    title: '오늘의 이익',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        className='h-4 w-4 text-muted-foreground'
      >
        <path d='M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
      </svg>
    ),
    money: '$45,231.89',
    description: '+20.1% from last month',
  },
  {
    id: 2,
    title: '월 경비 사용',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        className='h-4 w-4 text-muted-foreground'
      >
        <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
        <circle cx='9' cy='7' r='4' />
        <path d='M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75' />
      </svg>
    ),
    money: '+2350',
    description: '+180.1% from last month',
  },
  {
    id: 3,
    title: '오늘의 자금',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        className='h-4 w-4 text-muted-foreground'
      >
        <rect width='20' height='14' x='2' y='5' rx='2' />
        <path d='M2 10h20' />
      </svg>
    ),
    money: '+12,234',
    description: '+19% from last month',
  },
  {
    id: 4,
    title: '새로운 연체',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        className='h-4 w-4 text-muted-foreground'
      >
        <path d='M22 12h-4l-3 9L9 3l-3 9H2' />
      </svg>
    ),
    money: '+573',
    description: '+201 since last hour',
  },
];
