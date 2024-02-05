import { Card, CardContent } from '../ui/card';
import PlusIcon from '../../assets/icon/view/dashboard/plus.svg';

export default function AddCard() {
  return (
    <div className='w-full h-full'>
      <Card className={`cancelDrag w-full h-full flex flex-col p-4`}>
        <CardContent className='h-full p-0 flex flex-col items-center justify-center'>
          <PlusIcon className='fill-black w-12 h-12 cursor-pointer hover:fill-gray-text' />
          <p className='text-gray-text'>차트 추가하기</p>
        </CardContent>
      </Card>
    </div>
  );
}
