import PreviewCard from './PreviewCard'

const Carousel = ({ tilesData, title }) => {
    
    return(
        <div className='mt-8 z-10'>
            <h2 className='text-white z-20'>{title}</h2>
            <div className='flex flex-row items-end gap-2 w-full overflow-x-auto relative z-10 mt-2 scrollbar-hide rounded'>
                {
                tilesData?.map((movie, index) => {
                    return (
                        <>
                            <PreviewCard movie={movie} key={index}/>
                        </>
                    )
                })
                }
            </div>  
        </div>
    )
}

export default Carousel;