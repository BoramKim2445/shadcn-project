import SearchContent from '../common/SearchContent';

export default function HistoryNavContent() {
  return (
    <div className='h-full flex flex-col gap-2'>
      <h4 className='text-sm'>차트 검색하기</h4>
      <SearchContent />
    </div>
  );
}
