import { useEffect } from "react";
import Genres from "./Genres";

const PreviewCard = ({ movie, setModalVisible, setModalContentId, type, tilesDataMovie, tilesDataTv}) => {
//  console.log('esto es la peli', movie.id)
    return (
        <div>
            <div 
                className="shrink-0 w-[230px] h-[140px] bg-white rounded bg-cover bg-center hover:scale-125 cursor-pointer transition ease-in-out p-2 flex justify-end relative flex-col z-10 hover:z-20"
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
                }}
                onClick={() => {
                    setModalVisible(true)
                    setModalContentId(movie?.id)
                }}
                type={type}
                key={movie?.id}
                >
                <div className="flex flex-col z-10">
                    <h4 className="text-white text-sm p-1">{movie.original_title ? movie.original_title : movie.original_name}</h4>
                    <Genres id={movie.id} />
                </div>
                <div className="absolute h-20 inset-0 bg-gradient-to-t from-black/90 z-0 mt-auto"/>
            </div>
        </div>
    )
}

export default PreviewCard;