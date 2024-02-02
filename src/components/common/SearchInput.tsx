import { Search } from 'lucide-react';
import { Input } from '../ui/input';

export default function SearchInput() {
  return (
    <div className='relative'>
      <Search className='absolute left-2 top-3 h-4 w-4 text-muted-foreground' />
      <Input placeholder='Search' className='pl-8' />
    </div>
  );
}
