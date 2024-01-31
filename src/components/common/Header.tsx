import UserNav from './UserNav';

export default function Header() {
  return (
    <header className='w-full p-4 flex justify-between'>
      <h1 className='text-lg font-semibold'>goyoai</h1>
      <UserNav />
    </header>
  );
}
