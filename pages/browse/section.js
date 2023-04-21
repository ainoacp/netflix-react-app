import N from '../../public/images/N.svg'
import Series from '../../public/images/SERIES.svg'
import Title from '../../public/images/title.svg'


const Section = () => {
  return (
    <div className="text-white border border-white max-w-fit p-8 mt-20">
      <div className='flex items-center'>
        <div className='mr-6'>
          <N/>
        </div>
        <div>
          <Series/>
        </div>
      </div>
      <div>
        <Title/>
      </div>
      <div></div>
      <div></div>
      <div>

      </div>
    </div>
  );
}

export default Section;