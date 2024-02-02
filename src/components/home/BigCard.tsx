import { ReactNode } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';

interface BigCardProps {
  title: string;
  discription?: string;
  content?: ReactNode;
  color?: 'black';
}

const textColors = {
  black: 'text-white',
};

const bgColors = {
  black: 'bg-black',
};

export default function BigCard({
  title,
  discription,
  content,
  color,
}: BigCardProps) {
  let textColorClasses = color && textColors[color];
  let bgColorClasses = color && bgColors[color];

  return (
    <Card className={`h-full ${textColorClasses} ${bgColorClasses}`}>
      <CardHeader>
        <CardTitle className={`text-lg ${textColorClasses}`}>{title}</CardTitle>
        <CardDescription className={`${textColorClasses}`}>
          {discription}
        </CardDescription>
      </CardHeader>
      <CardContent className={`${textColorClasses}`}>{content}</CardContent>
    </Card>
  );
}
