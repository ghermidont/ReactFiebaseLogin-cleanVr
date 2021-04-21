import React, {useState} from 'react';
import SwiperCore, {EffectCoverflow} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';
import ReactPlayer from "react-player/youtube";
import {useDataFromFirestore} from "../../customHooks/useFirestore";
import {Button} from 'react-bootstrap';

SwiperCore.use([EffectCoverflow]);

//CONTENT PAGE Swiper
export default function EntertainmentSwiper() {

  console.log("EntertainmentSwiper component worked");

  const {docsFromHook} = useDataFromFirestore('entertainment');

  let mainSlide;

  const [entertainmentVidUrl, setEntertainmentVidUrl] = useState(mainSlide);

  return (
    <>
      <ReactPlayer
        url={entertainmentVidUrl}
        controls={true}
        playing={false}
        onStart={() => console.log("hello")}
      />

      <Swiper
        effect={'coverflow'}
        grabCursor={'false'}
        centeredSlides={'true'}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{el: '.swiper-pagination'}}
      >
        <div className="slider__list swiper-wrapper">

          {docsFromHook && docsFromHook.slice(0, 6).map(
            function (doc) {
              if (doc.id === 'mainVideo') {
                mainSlide = doc.videoURL;
              }

              return (
                <>
                  <SwiperSlide className="slider__item" key={doc.id}>
                    <Button onClick={() => setEntertainmentVidUrl(doc.videoURL)}>
                      <img
                        src="https://firebasestorage.googleapis.com/v0/b/simplelogin-405ec.appspot.com/o/images%2Fphoto-1531525645387-7f14be1bdbbd.jpg?alt=media&token=872b25c4-c4ea-434c-95cd-b73cd9328ab9"
                        alt="button"/>
                    </Button>
                  </SwiperSlide>
                </>
              );
            }
          )}

        </div>
      </Swiper>
    </>
  );
}
