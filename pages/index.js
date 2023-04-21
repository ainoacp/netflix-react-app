import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="bg-black w-screen h-screen flex flex-col items-center justify-center">
      <p className={'text-white text-[3,5vw]'}>Who's watching?</p>
      <div className="flex flex-row gap-3 mt-6">
        {
          USERS.map((user, index) => (
            <div key={index} className="flex flex-col items-center justify-center rounded-xl overflow-hidden">
              <Link href={user.link} className="w-12 h-12 rounded-md bg-white">
                <Image src={user.avatar} width={120} height={120} alt=''></Image>
              </Link>
              <p className="text-gray-400 mt-3">{user.name}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

//https://www.dicebear.com/how-to-use/http-api

const USERS = [
  { 
    name: 'Ainoa', 
    link: '/browse', 
    avatar: 'https://api.dicebear.com/6.x/pixel-art/jpg?seed=John&hair=short01,short02,short03,short04,short05' 
  },{ 
    name: 'Kids', 
    link: '/', 
    avatar: 'https://api.dicebear.com/6.x/pixel-art/jpg?seed=Jane&hair=long01,long02,long03,long04,long05' 
  },{ 
    name: 'Add Profile', 
    link: '/', 
    avatar: 'https://api.dicebear.com/6.x/pixel-art/jpg?seed=John&hair=short01,short02,short03,short04,short05',
    // icon: '' 
  }
]
