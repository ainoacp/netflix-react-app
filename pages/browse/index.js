import { useEffect } from "react";
import NavBar from "./navBar";
import Section from "./section";

import requests from "@/services/requests";

const baseURL = 'https://api.themoviedb.org/3'

const Browse = () => {

  useEffect(() => {
    fetch(`${baseURL}${requests.fetchTopRated}`).then(res => res.json()).then((data) => {
      
      console.log(data.results[0])
    })
  }, [])
    return (
        <div className="bg-gray-400 w-screen h-screen flex flex-col">
           <NavBar/>
           <Section/>
        </div>
    );
}

export default Browse;