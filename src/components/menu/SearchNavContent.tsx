import { TabsContent } from '@radix-ui/react-tabs';
import SearchContent from '../common/SearchContent';
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs';

export default function SearchNavContent() {
  return (
    <Tabs defaultValue='mine' className='h-full flex flex-col gap-2'>
      <TabsList className='rounded-full'>
        <TabsTrigger value='mine' className='rounded-full'>
          내가 생성한 대시보드
        </TabsTrigger>
        <TabsTrigger value='shared' className='rounded-full'>
          공유받은 대시보드
        </TabsTrigger>
      </TabsList>
      <SearchContent />
    </Tabs>
  );
}
