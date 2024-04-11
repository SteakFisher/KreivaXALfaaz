'use client'
import './aboutus.css';
import EventPage from './eventPage';
import "./landingPage.css";
import Plx from "react-plx";
import { useParallax } from 'react-scroll-parallax';

export default function AboutUs() {
    const exampleParallaxData = [
        {
          start:"self",
          duration:600,
          properties: [
            {
              startValue: 0.5,
              endValue: 1.5,
              property: "scale"
            }
          ]
        },
      ]

    return (
        <>
        <div className="aboutus relative min-h-screen custom-scrollbar overflow-x-hidden overflow-y-hidden">
        <header className="mix-blend-multiply relative z-10">
          <div className="nav w-1920" style={{ transform: "translate(0, -70px) rotate(-4.5deg)" }}>
            <img
              className="navBack object-left w-full object-cover h-auto"
              src="EventTopFilm.svg"
            />
          </div>
        </header>
            <Plx className='trumpetimg z-10' parallaxData={exampleParallaxData}><img src="component5.svg" alt="" className='' /></Plx>
            <div className="max-w-4xl mx-auto text-orange-900 px-6 aboutustext relative z-1">
                <div className="text-6xl font-semibold mb-6 pageTitle">About Us</div>
                <div className="grid grid-cols-1 oldenburg-regular sposnorflex">
                    <div className="col-span-6 flex flex-col gap-6 text-md" >
                        <div>
                            Kreiva is the annual cultural festival of Indian Institute of Information Technology, Vadodara. Kreiva serves as a platform for students to show their talents in performing arts and aesthetic arts, where students can collaborate and team up with other students to bring out the best in them.
                        </div>
                        <div>
                            The Annual Cultural Festival of IIIT Vadodara gets its name from the Esperanto word "Kreiva", meaning "Creativity". Since its inception in 2016 as an intra-institute fest in 2016, it has consistently been a huge platform for individuals to showcase their talents. A spectacular extravaganza, Kreiva is home to expression through art, music, drama, dance and culture.
                        </div>
                        <div>
                            Join us to celebrate creativity, join us, to celebrate Kreiva!
                        </div>
                    </div>
                </div>
            </div>
            <img src="drums.svg" alt="" className='drumsimg z-50' />
            <img src="piano.svg" alt="" className='pianoimg z-1' />
            
        </div> 
        <EventPage />
        </>
    );    
}