import { useEffect, useState } from "react"

const Genres = ({ id }) => {

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
        <div className="text-white/60 gap-x-3 text-xs flex flex-row flex-wrap relative z-20">{
            genres?.map((genre) => {
                return (
                    <div key={genre.id}>{genre.name}</div>
                )
            })
        }</div>
    )
}

export default Genres