import Title from '@/components/common/Title';
import DragLayout from '@/components/dashboard/DragLayout';
import SelectList from '@/components/dashboard/SelectList';

export interface Chart {
  title: string;
  data: string;
  id: string;
}

async function getCharts(): Promise<Chart[]> {
  const result = await fetch('http://localhost:4000/charts');

  return result.json();
}

export default async function DashboardPage() {
  const charts = await getCharts();

  return (
    <>
      <Title title='Dashboard' />
      <SelectList />
      <DragLayout charts={charts} />
    </>
  );
}
