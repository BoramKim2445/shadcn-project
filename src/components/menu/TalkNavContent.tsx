import TalkItem from './TalkItem';

export default function TalkNavContent() {
  return (
    <div className='space-y-4'>
      {TalkSampleDatas?.map((item) => (
        <TalkItem
          key={item.id}
          name={item.name}
          content={item.content}
          imgSrc={item.imgSrc}
          time={item.time}
        />
      ))}
    </div>
  );
}

const TalkSampleDatas = [
  {
    id: 1,
    name: 'Olivia Martin',
    time: '오전 08:41',
    imgSrc: 'https://ui.shadcn.com/avatars/01.png',
    content: 'test',
  },
  {
    id: 2,
    name: 'Jackson Lee',
    time: '1월 3일',
    imgSrc: 'https://ui.shadcn.com/avatars/02.png',
    content: 'test',
  },
  {
    id: 3,
    name: 'Isabella Nguyen',
    time: '오전 08:41',
    imgSrc: 'https://ui.shadcn.com/avatars/03.png',
    content: 'test',
  },
  {
    id: 4,
    name: 'William Kim',
    time: '오전 08:41',
    imgSrc: 'https://ui.shadcn.com/avatars/04.png',
    content: 'test',
  },
  {
    id: 1,
    name: 'Sofia Davis',
    time: '오전 08:41',
    imgSrc: 'https://ui.shadcn.com/avatars/05.png',
    content: 'test',
  },
];
