import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ReactNode } from 'react';

interface SelectBoxProps {
  icon?: ReactNode;
  label: string;
  list: { id: number; value: string }[];
}

export default function SelectBox({ icon, label, list }: SelectBoxProps) {
  return (
    <Select>
      <SelectTrigger className='w-[102px] h-[30px] px-1 rounded-full'>
        {icon}
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent>
        {list.map((item) => (
          <SelectItem key={item.id} value={item.value}>
            {item.value}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
