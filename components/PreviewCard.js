import Genres from "./Genres";

const PreviewCard = ({ movie }) => {
    return (
        <div>
            <div 
                className="shrink-0 h-28 w-48 bg-cover bg-center hover:scale-125 cursor-pointer transition ease-in-out p-2 relative flex items-end rounded z-10 hover:z-20"
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
                }}
                key={movie?.id}>
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