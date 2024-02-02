import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface TalkItem {
  name: string;
  content: string;
  imgSrc?: string;
  time: string;
}

export default function TalkItem({ name, content, imgSrc, time }: TalkItem) {
  return (
    <div className='py-2 px-1 flex items-center cursor-pointer hover:bg-gray-white rounded-md'>
      <Avatar className='h-9 w-9'>
        <AvatarImage src={imgSrc} alt='Avatar' />
        <AvatarFallback>{name.slice(0, 2)}</AvatarFallback>
      </Avatar>
      <div className='ml-4 space-y-1'>
        <p className='text-sm font-medium leading-none'>{name}</p>
        <p className='text-sm text-muted-foreground'>{content}</p>
      </div>
      <div className='ml-auto text-xs text-gray-text'>{time}</div>
    </div>
  );
}
