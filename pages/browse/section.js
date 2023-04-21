import N from '../../public/images/N.svg'
import Top from '../../public/images/Top10.svg'

const Section = ({heroMovie}) => {

  console.log(heroMovie);

  return (
    <div className="text-white border-white w-1/2 max-h-xs p-8 mt-14 z-10">
      <div className='flex items-center'>
        <div className='mr-6 mb-6 gap-4 flex items-center'>
          <N/>
          <div>
          <p className='text-xl text-slate-300 font-semibold tracking-widest'>MOVIES</p>
          </div>
        </div>
      </div>
      <div className='font-serif text-8xl mt-8 mb-8'>
        {heroMovie?.title}
      </div>
      <div className='flex items-center gap-3 mb-6'>
        <Top/>
        <p className='text-xl'>#1 in TV Movies Today</p>
      </div>
      <div className='text-xs'>
        {heroMovie?.overview}
      </div>
      <div></div>
      <div>

      </div>
    </div>
  );
}

export default Section;