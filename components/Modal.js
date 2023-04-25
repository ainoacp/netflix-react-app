import { useEffect, useState } from 'react'
import { HandThumbUpIcon, XMarkIcon, PlusCircleIcon, SpeakerXMarkIcon } from '@heroicons/react/24/outline'
import { PlayIcon, StarIcon } from '@heroicons/react/20/solid'
import Genres from './Genres'

const Modal = ({ modalVisible, setModalVisible, modalContentId, type }) => {
  
  const baseURL = 'https://api.themoviedb.org/3'
  const API_KEY = 'f247ff737ec8062f3b5e027789eab748'
  
  const [content, setContent] = useState()
  const [similars, setSimilars] = useState()
  
  useEffect(() => {
    fetch(`${baseURL}/${type === 'tv' ? 'tv' : 'movie'}/${modalContentId}?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log('CONTENT', data)
        setContent(data)
      })
  }, [modalContentId])

  useEffect(() => {
    fetch(`${baseURL}/${type === 'tv' ? 'tv' : 'movie'}/${modalContentId}/similar?api_key=${API_KEY}&language=ES`)
      .then((res) => res.json())
      .then((data) => {
        console.log('SIMILAR', data.results)
        setSimilars(data.results)
      })
  }, [modalContentId])
  
  return (
    <div
      className={`absolute inset-0 z-50 bg-black/60 flex justify-center overflow-y-auto ${modalVisible ? '' : 'hidden'}`}
    >
      <div className="relative flex w-9/12 overflow-hidden bg-black shadow-2xl rounded-xl h-4/6 min-h-[750px]">
        <div
          className={'absolute top-4 right-4 w-8 h-8 bg-black rounded-full flex items-center justify-center cursor-pointer z-50'}
          onClick={() => setModalVisible(false)}
        >
          <XMarkIcon className={'w-6 h-6- text-white'} />
        </div>
        <div className={'w-full'}>
          <div className={'bg-cover w-full h-[450px] bg-center flex justify-end relative flex-col z-10 p-8'}
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${content?.backdrop_path})`,
            }}
          >
            <div className='flex flex-col'>
                <h3 className={'text-5xl font-bold text-white'}>{content?.title}</h3>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center my-3'>
                        <button className='flex items-center justify-center rounded-sm bg-slate-100 p-2 text-black w-20 h-7 text-sm mr-1'>
                            <PlayIcon className='text-black mr-2 h-5'/>
                            Play
                        </button>
                        <button className='mr-1'>
                            <PlusCircleIcon className='text-white h-7'/>
                        </button>
                        <button>
                            <HandThumbUpIcon className='text-white h-7'/>
                        </button>
                    </div>
                    <SpeakerXMarkIcon className='text-slate-200 h-6'/>
                </div>
            </div>
          </div>
          <div className={'p-8 w-full overflow-y-auto flex flex-col text-white'}>
            <div>
                <div className='flex gap-2 text-xs'>
                    <p className='text-green-300'>98% Match</p>
                    <p>{content?.release_date}</p>
                    <p>{content?.runtime}min</p>
                    <p className='flex items-center'>{content?.popularity}<StarIcon className='h-3 text-white'/></p>
                </div>
                <div className='text-sm my-2'>{content?.overview}</div>
            </div>
            <div className='my-1'>
                <p>{content?.cast}</p>
                <div>{modalContentId ? <Genres id={modalContentId}/> : ''}</div>
                {/* <p>{content?.revenue}$</p> */}
            </div>
            <h4 className='my-3'>More you might enjoy</h4>
            <div className='flex flex-row gap-2 scrollbar-hide'>
                {
                similars?.map((similar, i) => {
                    return(
                            <div>
                                <div 
                                    className="shrink-0 w-[140px] h-[85px] bg-white rounded bg-cover bg-center hover:scale-125 cursor-pointer transition ease-in-out p-2 flex justify-end relative flex-col z-10 hover:z-20"
                                    style={{
                                        backgroundImage: `url(https://image.tmdb.org/t/p/original/${similar?.backdrop_path})`,
                                    }}
                                >
                                <div className="flex flex-col z-10">
                                    <h4 className="text-white text-[10px] p-1">{similar?.original_title ? similar?.original_title : similar?.original_name}</h4>
                                    {/* <p className='text-[8px]'>{similar?.overview}</p> */}
                                </div>
                                    <div className="absolute h-20 inset-0 bg-gradient-to-t from-black/90 z-0 mt-auto"/>
                                </div>
                            </div>
                    )
                })
                }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal