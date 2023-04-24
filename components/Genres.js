import { useEffect, useState } from "react"

const Genres = ({ id }) => {
    // const [trendingMovie, setTrendingMovie] = useState([])
    const [genres, setGenres] = useState() 

    const baseURL = 'https://api.themoviedb.org/3'
    const API_KEY = 'b36d0e0e939c02f2df7cb44d16a5d12a'

    useEffect(() => {
        fetch(`${baseURL}/movie/${id}?api_key=${API_KEY}`)
            .then(res => res.json())
            .then((data) => {
                console.log(data.genres);  
                setGenres(data.genres)
        })
      }, [])

    return(
        <div className="flex flex-wrap gap-1 px-1 pb-1 text-slate-400 z-10 text-[8px]">{
            genres?.map((genre) => {
                return (
                    <div>{genre.name}</div>
                )
            })
        }</div>
    )
}

export default Genres