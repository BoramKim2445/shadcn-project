'use client';

import { useState } from 'react';
import DashboardDropDowns from './DashboardDropdowns';
import DragLayout from './DragLayout';
import { Chart } from '@/app/(main)/dashboard/[id]/page';
import AddCard from './AddCard';

export default function Dashboard({ charts }: { charts: Chart[] }) {
  const [sampleCharts, setSampleCharts] = useState(charts);

  return (
    <>
      <DashboardDropDowns />
      <DragLayout charts={charts} />
    </>
  );
}
