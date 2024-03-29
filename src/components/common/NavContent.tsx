import { ReactNode } from 'react';
import ArrowLeftIcon from '../../assets/icon/view/dashboard/arrow-left.svg';
interface NavContentProps {
  title: string;
  closeNav: () => void;
  content?: ReactNode;
}

export default function NavContent({
  title,
  closeNav,
  content,
}: NavContentProps) {
  return (
    <div className='w-9/10 h-full px-4 py-8 flex flex-col border border-gray-border rounded-lg bg-white animate-fade-in-left'>
      <div className='pb-4  flex items-center justify-between font-semibold border-b border-gray-border'>
        {title}
        <button onClick={closeNav} className='pr-2'>
          <ArrowLeftIcon width='0.6rem' height='0.6rem' />
        </button>
      </div>
      <div className='py-4 h-full'>{content}</div>
    </div>
  );
}
