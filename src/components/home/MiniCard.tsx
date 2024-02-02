import { ReactNode } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';

interface MiniCardProps {
  title: string;
  icon?: ReactNode;
  money?: string;
  description?: string;
}

export default function MiniCard({
  title,
  icon,
  money,
  description,
}: MiniCardProps) {
  return (
    <Card className='flex flex-col justify-between'>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-sm font-medium'>{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className='text-2xl font-bold'>{money}</div>
        <p className='text-xs text-muted-foreground'>{description}</p>
      </CardContent>
    </Card>
  );
}
