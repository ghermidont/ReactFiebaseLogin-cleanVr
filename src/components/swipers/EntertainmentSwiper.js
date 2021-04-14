//In future consider implementing the logic of this component through useContext an LocalStorage
import React, {useState} from 'react';
import SwiperCore, {EffectCoverflow} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import ReactPlayer from "react-player/youtube";
import {useDataFromFirestore} from "../../customHooks/useFirestore";
import {Button} from 'react-bootstrap';
SwiperCore.use([EffectCoverflow]);

//CONTENT PAGE Swiper
export default function EntertainmentSwiper() {

    console.log("EntertainmentSwiper component worked");
    const {docsFromHook} = useDataFromFirestore('entertainment');
    //let mainSlide;

    const [mainEntVid, setMainEntVid] = useState('');

    return (
        <>
            <ReactPlayer
                url = {mainEntVid}
                controls = {true}
                playing = {false}
                onStart = {()=>console.log("hello")}
            />
            <Swiper
                effect={'coverflow'}
                //spaceBetween={5}
                grabCursor = {'true'}
                centeredSlides = {'true'}
                initialSlide = {2}
                slidesPerView = {4}
                navigation
                //onSwiper={(swiper) => console.log(swiper)}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination= {{el: '.swiper-pagination'}}
            >
                {docsFromHook && docsFromHook.slice(0, 6).map(doc =>
                    <SwiperSlide key={doc.id}>
                        <Button onLoad={() => setMainEntVid(doc.videoURL)} onClick={() => setMainEntVid(doc.videoURL)}>
                            <img src={doc.thumbnail} alt="button"/>
                        </Button>
                    </SwiperSlide>
                )}
            </Swiper>
        </>
    );
}