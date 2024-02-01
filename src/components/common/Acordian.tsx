import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ReactNode, SVGProps } from 'react';

interface AcordianProps {
  title: string;
  contents: ReactNode;
  triggerIcon?: ReactNode;
}

export default function Acordian({
  title,
  contents,
  triggerIcon,
}: AcordianProps) {
  return (
    <Accordion type='single' collapsible>
      <AccordionItem value='item-1'>
        <AccordionTrigger icon={triggerIcon} className='text-sm'>
          {title}
        </AccordionTrigger>
        <AccordionContent>{contents}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
