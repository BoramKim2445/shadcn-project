import SearchInput from '../common/SearchInput';
import { Card, CardContent } from '../ui/card';

export default function SearchContent() {
  return (
    <>
      <SearchInput />
      <Card className='grow py-6'>
        <CardContent className='text-sm text-gray-text text-center'>
          아직 생성된 차트가 없습니다.
        </CardContent>
      </Card>
    </>
  );
}
