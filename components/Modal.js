import { XMarkIcon } from "@heroicons/react/20/solid"
import { useEffect, useState } from "react"

const Modal = ({ modalVisible, setModalVisible }) => {

    const baseURL = 'https://api.themoviedb.org/3'
    const API_KEY = 'b36d0e0e939c02f2df7cb44d16a5d12a'

    const [content, setContent] = useState(modalContentId)

    useEffect(() => {
        fetch(`${baseURL}/${type === 'tv' ? 'tv' : 'movie'}/${modalContentId}?api_key=${API_KEY}`)
            .then(res => res.json())
            .then((data) => { 
                // console.log('CONTENT', data)
                setContent(data)
        })
      }, [modalContentId])

    return (
        <div className={`absolute inset-0 z-50 bg-black/80 flex${modalVisible ? '' : 'hidden'}`}> 
            <div className="relative flex w-9/12 h-4/6 overflow-hidden bg-white rounded-lg shadow-2xl">
                <div className="absolute top-4 right-4 w-8 h-8 bg-scale-200 rounded-full flex items-center justify-center cursor-pointer z-50" onClick={() => setModalVisible(false)}>
                    <XMarkIcon className="w-6 h-6"/>
                </div>
                <div className="w-full">
                    <div 
                    className="bg-cover w-full h-[350px] bg-center flex justify-end relative flex-col z-10"
                    style={{
                        backgroundImage: `url(https://image.tmbd.org/t/p/original/${content?.backdrop_path})`,
                    }}
                    ></div>
                </div>
            </div>
        </div>
    )
}

export default Modal