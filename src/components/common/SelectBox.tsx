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
  list: { id: number; value: string; icon?: ReactNode; disabled?: boolean }[];
  triggerClass?: string; //선택박스 꾸미기
  contentWidth?: string;
  check?: boolean; //선택사항 체크
}

//className='w-[102px] h-[30px] px-1.5 rounded-full'
export default function SelectBox({
  icon,
  label,
  list,
  triggerClass,
  contentWidth = '16rem',
  check = false,
}: SelectBoxProps) {
  return (
    <Select>
      <SelectTrigger className={`${triggerClass}`}>
        {icon}
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent className={`${`min-w-[${contentWidth}]`}`}>
        {list.map((item) => (
          <SelectItem
            key={item.id}
            value={item.value}
            className='pl-2.5 rounded-md'
            // check={true}
            disabled={item?.disabled}
          >
            <div className='flex items-center gap-1.5'>
              {item?.icon}
              {item.value}
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
