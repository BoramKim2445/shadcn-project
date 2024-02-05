import Title from '@/components/common/Title';
import Dashboard from '@/components/dashboard/Dashboard';

export interface Chart {
  title: string;
  data: string;
  id: string;
}

// async function getCharts(): Promise<Chart[]> {
//   const result = await fetch('http://localhost:4000/charts');

//   return result.json();
// }

type Props = {
  params: {
    id: string;
  };
};

export default async function DashboardPage({ params: { id } }: Props) {
  const charts = id === 'sample1' ? sampleCharts : [];

  return (
    <>
      <Title title='Dashboard' />
      <Dashboard charts={charts} />
    </>
  );
}

const sampleCharts = [
  {
    id: '1',
    title: 'Chart 1',
    data: 'A vegetarian twist on the classic Italian pasta dish with eggs, cheese, and vegetarian bacon.',
  },
  {
    id: '2',
    title: 'Chart 2',
    data: 'A quick and healthy vegetarian stir-fry with fresh vegetables and tofu.',
  },
  // {
  //   id: '3',
  //   title: 'Chart 3',
  //   data: 'Creamy pasta with grilled vegetarian chicken and a rich Alfredo sauce.',
  // },
  // {
  //   id: '4',
  //   title: 'Chart 4',
  //   data: 'A comforting vegetarian Italian rice dish with sautéed mushrooms and parmesan cheese.',
  // },
  // {
  //   id: '5',
  //   title: 'Chart 5',
  //   data: 'A hearty and nutritious vegetarian soup made with lentils and a blend of spices.',
  // },
  // {
  //   id: '6',
  //   title: 'Chart 6',
  //   data: 'Flavorful grilled Portobello mushrooms with a lemon and herb marinade.',
  // },
  // {
  //   id: '7',
  //   title: 'Chart 7',
  //   data: 'A colorful vegetarian salad featuring roasted vegetables and a balsamic vinaigrette.',
  // },
  // {
  //   id: '8',
  //   title: 'Chart 8',
  //   data: 'Tasty vegetarian tacos with seasoned plant-based meat and fresh toppings.',
  // },
  // {
  //   id: '9',
  //   title: 'Chart 9',
  //   data: 'Homemade vegetarian chocolate chip cookies that are soft and gooey inside.',
  // },
];
