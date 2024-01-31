'use client';

import { Chart } from '@/app/page';
import ChartCard from './ChartCard';
import { Responsive, WidthProvider } from 'react-grid-layout';

const ResponsiveGridLayout = WidthProvider(Responsive);

const LAYOUTS = {
  lg: [
    { i: '1', x: 0, y: 0, w: 1, h: 2, minW: 1, minH: 2 },
    { i: '2', x: 1, y: 0, w: 1, h: 2, minW: 1, minH: 2 },
    { i: '3', x: 2, y: 0, w: 1, h: 2, minW: 1, minH: 2 },
    { i: '4', x: 0, y: 1, w: 1, h: 2, minW: 1, minH: 2 },
    { i: '5', x: 1, y: 1, w: 1, h: 2, minW: 1, minH: 2 },
    { i: '6', x: 2, y: 1, w: 1, h: 2, minW: 1, minH: 2 },
    { i: '7', x: 0, y: 2, w: 1, h: 2, minW: 1, minH: 2 },
    { i: '8', x: 1, y: 2, w: 1, h: 2, minW: 1, minH: 2 },
    { i: '9', x: 2, y: 2, w: 1, h: 2, minW: 1, minH: 2 },
  ],
};

export default function DragLayout({ charts }: { charts: Chart[] }) {
  return (
    <ResponsiveGridLayout
      draggableCancel='.cancelDrag'
      className='layout'
      layouts={LAYOUTS}
      breakpoints={{ lg: 1200, sm: 768, xs: 480 }}
      cols={{ lg: 3, sm: 2, xs: 1 }}
    >
      {charts.map((item) => (
        <div key={item.id}>
          <ChartCard chart={item} />
        </div>
      ))}
    </ResponsiveGridLayout>
  );
}
