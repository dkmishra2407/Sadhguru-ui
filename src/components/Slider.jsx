import React, { useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Slider.model.css"; 
import slid1 from '../assets/KEPL-1-CmgRZD4B.png'
import slid2 from '../assets/KEPL-1-CmgRZD4B.png'
import slid3 from '../assets/KEPL-1-CmgRZD4B.png'
import slid4 from '../assets/KEPL-1-CmgRZD4B.png'

function Responsive() {
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    }, []);

    var settings = {
        autoplay: true,
        autoplaySpeed: 2500,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div className="slide">
                    <img
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1joe_bW21q6ibJh8fbsAaNDIzBYNiPsFY8sVNZxf9Hppver4UR5vEBmE6xA&s'
                        alt="Banner 1"
                        className="slide-image"
                        style={{height:'90vh',objectFit:'cover',marginTop:'1px'}}
                    />
                  
                </div>
                {/* <div className="slide">
                    <img
                        src={slid2}
                        alt="Banner 2"
                        className="slide-image"
                    />
                    <div className="text-overlay" data-aos="fade-up">
                        <h1>& Manufacturing</h1>
                        <h1>Innovation in Research</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Exercitationem, optio? Aspernatur saepe magnam quo sint ea, qui
                            repudiandae.
                        </p>
                    </div>
                </div>
                <div className="slide">
                    <img
                       src={slid3}
                        alt="Banner 3"
                        className="slide-image"
                    />
                    <div className="text-overlay" data-aos="fade-up">
                        <h1>Engineering Products and</h1>
                        <h1>Solutions</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Exercitationem, optio? Aspernatur saepe magnam quo sint ea, qui
                            repudiandae.
                        </p>
                    </div>
                </div> */}
                  <div className="slide">
                    <img
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFIgLsMRJkD10DplCVjnPlwPr-Tlrvm4dEqoEzMv__St_-abmrzN7bjZfsg&s'
                        alt="Banner 1"
                        className="slide-image"
                        style={{height:'90vh',objectFit:'cover',marginTop:'1px'}}
                    />
                  
                </div>
                <div className="slide">
                    <img
                        src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8oGonbc0KQSr8s7eyvcf_b8IyVL20oiOsEw7moBC8DEuByWvD1OvlYjvrCg&s'
                        alt="Banner 1"
                        className="slide-image"
                        style={{height:'90vh',objectFit:'cover',marginTop:'1px'}}
                    />
                  
                </div>
                <div className="slide">
                    <img
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReCqZLqCI8GROZhOj25QK3Bb6Il5rR7B2W-cZk17Cq8lUPLu-qAq_OzzBEww&s'
                        alt="Banner 1"
                        className="slide-image"
                        style={{height:'90vh',objectFit:'cover',marginTop:'1px'}}
                    />
                  
                </div>
            </Slider>
        </div>
    );
}

export default Responsive;
