'use client'

import { useEffect, useState } from "react";

import requests from "@/services/requests";

import NavBar from "../../components/navBar";
import Section from "../../components/section";
import Carousel from "../../components/carousel"
import Modal from "@/components/Modal";
import { useAuthContext } from "@/components/AuthContext";
import { useRouter } from "next/navigation";

const baseURL = 'https://api.themoviedb.org/3'
const imageURL = 'https://image.tmdb.org/t/p/original'

const Browse = () => {
    const [heroMovie, setHeroMovie] = useState()
    const [trendingMovies, setTrendingMovies] = useState()
    const [trendingTv, setTrendingTv] = useState()
    const [modalVisible, setModalVisible] = useState(false)
    const [modalContent, setModalContent] = useState()

    const { user } = useAuthContext()
    const router = useRouter()

    useEffect(() => {
        fetch(`${baseURL}${requests.fetchTopRated}`)
            .then(res => res.json())
            .then((data) => {
                console.log('MOVIES', data.results[0])
                setHeroMovie(data.results[0])
        })
    }, [])

    useEffect(() => {
        fetch(`${baseURL}${requests.fetchTrendingMovies}`)
            .then(res => res.json())
            .then((data) => {
                console.log('TRENDING MOVIES', data.results)
                setTrendingMovies(data.results)
        })
    }, [])

    useEffect(() => {
        fetch(`${baseURL}${requests.fetchTrendingTv}`)
            .then(res => res.json())
            .then((data) => {
                console.log('TRENDING TV', data.results)
                setTrendingTv(data.results)
        })
    }, [])

    useEffect(() => {
        if (!user) {
            router.push('/signin')
        }
    }, [user])

    return (
        <div className="bg-black w-full h-full flex flex-col px-8 overflow-y-auto">
            <NavBar/>
            <Section heroMovie={heroMovie}/>
            <div className="absolute bg-black w-full h-[100vh] max-h-[100vh] bg-white/80 z-0 top-0 left-0 overflow-hidden opacity-50">
                <div className="bg-cover bg-center w-full h-full" style={{backgroundImage: `url(${imageURL}${heroMovie?.backdrop_path})`}}></div>
            </div>
            <Carousel 
                type={'movie'} 
                tilesData={trendingMovies} 
                title={'Trending Movies'} 
                setModalVisible={setModalVisible} 
                setModalContent={setModalContent} 
                style={'mt-[-127px]'}
            />
            <Carousel 
                type={'tv'} 
                tilesData={trendingTv} 
                title={'Trending TV Series'} 
                setModalVisible={setModalVisible} 
                setModalContent={setModalContent}
            />
            <Modal 
                modalVisible={modalVisible} 
                setModalVisible={setModalVisible} 
                modalContent={modalContent}
            />
        </div>
    );
}

export default Browse;