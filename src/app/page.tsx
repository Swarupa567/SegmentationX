import Header from '../components/Header/Header';
import SideNavBar from '../components/SideNavbar';

export default function Home() {
  return (
      <main className='bg-gradient-to-l from-pink-100 via-purple-100 to-indigo-100'>
          <Header />
          <SideNavBar />
      </main>
  )
}
