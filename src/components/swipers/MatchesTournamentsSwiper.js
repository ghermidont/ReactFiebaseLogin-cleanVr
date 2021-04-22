//In future consider implementing the logic of this component through useContext an LocalStorage
import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReactPlayer from "react-player/youtube";
import {useDataFromFirestore} from "../../customHooks/useFirestore";
import {Button} from 'react-bootstrap';

//CONTENT PAGE Swiper
export default function MatchesTournamentsSwiper (){
    console.log("MatchesTournamentsSwiper component worked");

    const {docsFromHook} = useDataFromFirestore('matches-swiper');

    const [mainMatchVid, setMainMatchVid] = useState('');

    return (

        <>
            <ReactPlayer
                url = {mainMatchVid}
                controls = {true}
                playing = {false}
                onStart = {()=>console.log("hello")}
            />
            <Swiper
                effect={'coverflow'}

                grabCursor = {'true'}
                centeredSlides = {'true'}
                initialSlide = {2}
                slidesPerView = {4}
                navigation

                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination= {{el: '.swiper-pagination'}}

            >
                {docsFromHook && docsFromHook.slice(0, 6).map(doc=>
                    <SwiperSlide key={doc.id}>
                        <Button onLoad={() => setMainMatchVid(doc.videoURL)} onClick={() => setMainMatchVid(doc.videoURL)}>
                            <img src={doc.thumbnail} alt="button"/>
                        </Button>
                    </SwiperSlide>
                )}
            </Swiper>
        </>
    );
}