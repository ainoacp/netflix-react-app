import N from '../../public/images/N.svg'
import Top from '../../public/images/Top10.svg'

const Section = ({ heroMovie }) => {
  return (
    <div className="text-white max-w-fit p-8 mt-20 z-10">
      <div className='flex items-center'>
        <div className='mr-6'>
          <N/>
        </div>
        <div>
          <p className='text-3xl text-slate-300 font-bold tracking-widest'>MOVIES</p>
        </div>
      </div>
      <div className='font-serif text-9xl w1/2 my-8'>{heroMovie?.title}</div>
      <div className='flex items-center gap-3 mb-6'>
        <Top/>
        <p>#1 in TV Movies Today</p>
      </div>
      <div className='text-xs w-1/2'>{heroMovie?.overview}</div>
      <div>

      </div>
    </div>
  );
}

export default Section;