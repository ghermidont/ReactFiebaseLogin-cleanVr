//https://swiperjs.com/react
//https://www.youtube.com/watch?v=l4kFO6VQPfA&feature=emb_title
//https://github.com/nolimits4web/Swiper/blob/master/demos/240-effect-coverflow.html

import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow } from 'swiper';
import 'swiper/swiper-bundle.css';
import ReactPlayer from "react-player/youtube";
import {useDataFromFirestore} from "../../customHooks/useFirestore";

SwiperCore.use([EffectCoverflow]);

//HOME PAGE Swiper
export default  function LatestStreamsSwiper () {
    console.log("LatestStreamsSwiper component worked");

    const {docsFromHook} = useDataFromFirestore('latest-streams');

  console.log(docsFromHook);

   return (
        <>
            <Swiper
                spaceBetween={5}
                slidesPerView={5}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide changed')}
            >
                {docsFromHook && docsFromHook.slice(0, 6).map(doc => (
                    <SwiperSlide>
                        <ReactPlayer
                        key={doc.id}
                        url = {doc.URL}
                        controls={true}
                        playing={false}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );

}
