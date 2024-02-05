import { ReactNode } from 'react';
import DropDown from '../common/DropDown';
import { Button } from '../ui/button';
import DropDownArrow from '../../assets/icon/view/dashboard/dropdown.svg';

interface DashboardDropDownProps {
  icon?: ReactNode;
  label: string;
  list: {
    value: string;
    icon?: ReactNode;
    disabled?: boolean;
    onClick?: () => void;
  }[];
  disabled?: boolean;
}

export default function DashboardDropdown({
  icon,
  label,
  list,
  disabled,
}: DashboardDropDownProps) {
  const button = (
    <Button
      variant='outline'
      className='w-[6.4rem] rounded-full ring-0 focus:ring-0 p-0 h-8 gap-1'
      disabled={disabled}
    >
      {icon}
      {label}
      <DropDownArrow width='1.25rem' height='1.25rem' />
    </Button>
  );

  return <DropDown button={button} list={list} />;
}
