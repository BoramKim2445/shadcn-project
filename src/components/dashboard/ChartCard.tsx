import { Chart } from '../../app/(main)/dashboard/[id]/page';
import { Card, CardContent, CardDescription, CardHeader } from '../ui/card';
import { Checkbox } from '../ui/checkbox';

import CommentIcon from '../../assets/icon/view/dashboard/comment.svg';
import DownLoadIcon from '../../assets/icon/view/dashboard/down.svg';
import ChartSettingIcon from '../../assets/icon/view/dashboard/chart-setting.svg';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

interface ChartCardProps {
  chart: Chart;
}

export default function ChartCard({ chart }: ChartCardProps) {
  return (
    <div className='w-full h-full'>
      <Card
        className={`cancelDrag w-full h-full flex flex-col p-4 cursor-default`}
      >
        <CardHeader className='flex-row justify-between items-center p-0 pb-4'>
          <div className='flex items-center gap-2 z-1000'>
            <Checkbox id={chart.id} className='' />
            <label htmlFor={chart.id} className='font-semibold text-md'>
              {chart.title}
            </label>
          </div>
          <CardDescription className='flex gap-2 mr-8'>
            <CommentIcon
              width='1rem'
              height='1rem'
              className='cursor-pointer'
            />
            <DownLoadIcon
              width='1rem'
              height='1rem'
              className='cursor-pointer'
            />
            <ChartSettingIcon
              width='1rem'
              height='1rem'
              className='cursor-pointer'
            />
          </CardDescription>
        </CardHeader>
        <CardContent className='flex-grow  bg-gray-border p-2'>
          <p>description</p>
        </CardContent>
      </Card>
      <button className='fixed top-6 right-5'>
        <HamburgerMenuIcon className='h-4 w-4' />
      </button>
    </div>
  );
}
