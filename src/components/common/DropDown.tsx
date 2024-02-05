'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { ReactNode } from 'react';

interface DropDownProps {
  button: ReactNode;
  list: {
    value: string;
    icon?: ReactNode;
    disabled?: boolean;
    onClick?: () => void;
  }[];
  content?: ReactNode;
}

export default function DropDown({ button, list, content }: DropDownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{button}</DropdownMenuTrigger>

      <DropdownMenuContent className='w-56' align='end' forceMount>
        {content}
        <DropdownMenuGroup className='text-select'>
          {list.map((item, index) => (
            <DropdownMenuItem
              key={index}
              onClick={item?.onClick}
              className='flex gap-1.5 cursor-pointer group'
              disabled={item?.disabled}
            >
              {item.icon}
              {item.value}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
