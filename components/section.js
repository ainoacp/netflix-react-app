import { InformationCircleIcon, PlayIcon } from '@heroicons/react/20/solid';
import N from '../public/images/N.svg'
import Top from '../public/images/Top10.svg'

const Section = ({ heroMovie }) => {

  console.log(heroMovie);

  return (
    <div className="text-white border-white w-2/3 max-h-xs mt-14 mb-10 z-10">
      <div className='flex items-center'>
        <div className='mr-6 mb-6 gap-4 flex items-center'>
          <N/>
          <div>
          <p className='text-lg text-slate-300 font-semibold tracking-widest'>MOVIES</p>
          </div>
        </div>
      </div>
      <div className='font-serif text-6xl mt-6 mb-8'>
        {heroMovie?.title}
      </div>
      <div className='flex items-center gap-3 mb-3'>
        <Top/>
        <p className='text-lg'>#1 in Movies Today</p>
      </div>
      <div className='text-[10px]'>
        {heroMovie?.overview}
      </div>
      <div className='flex gap-3 mt-3'>
        <button className='flex items-center justify-center rounded-sm bg-slate-100 p-2 text-black w-20 h-8 text-sm'>
          <PlayIcon className='text-black mr-2 h-5'/>
          Play
        </button>
        <button className='flex items-center justify-center rounded-sm bg-gray-700/90 p-2 w-28 h-8 text-sm'>
          <InformationCircleIcon className='text-white mr-2 h-5'/>
          More info
        </button>
      </div>
      <div>

      </div>
    </div>
  );
}

export default Section;