import NetflixLogo from '../../netflix-react-app/public/images/Vector.svg'
import { BellIcon, MagnifyingGlassIcon, ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link';
import { getAuth, signOut } from 'firebase/auth'

const NavBar = () => {

    const auth = getAuth()

    return (
      <header className='flex justify-between items-center bg-gradient-to-b from-black from-15% to-transparent z-10 pt-4'>
        <div className='flex items-center'>
            <NetflixLogo/>
            <div  className='ml-6'>
                {
                ROUTES.map((routes, i) => (
                    <Link
                    key={i}
                    href={routes.link} 
                    className='text-white mx-2'>
                        {routes.name}
                    </Link >
                ))
                }
            </div>
        </div>
        <div className='flex flex-row gap-4 items-center text-white '>
            <MagnifyingGlassIcon className=' w-6 h-6'/>
            <Link href="#">Kids</Link>
            <BellIcon className=' w-6 h-6'/>
            <div className='flex items-center gap-1'>
                <div className='bg-slate-200 w-7 h-7 rounded'/>
                <button><ChevronDownIcon className='w-6 h-6'/></button>
            </div>
            <p onClick={() => {signOut(auth)}} className='text-white cursor-pointer'>SignOut</p>
        </div>
      </header>
    );
}

const ROUTES = [
    {name: 'Home', link:'/home'},
    {name: 'TV Shows', link:'/tvshows'},
    {name: 'Movies', link:'/movies'},
    {name: 'New & Popular', link:'/new&popular'},
    {name: 'My List', link:'/mylist'},
    {name: 'Browse by Languages', link:'/browsebylanguages'}
]

export default NavBar;