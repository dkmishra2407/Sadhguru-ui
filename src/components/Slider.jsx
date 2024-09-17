import React, { useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Slider.model.css"; 
import slid1 from '../assets/Slider/banner_img1.jpg'
import slid2 from '../assets/Slider/banner_img2.jpg'
import slid3 from '../assets/Slider/banner_img3.jpg'
import slid4 from '../assets/Slider/banner_img4.jpg'

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
                        src={slid1}
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
                        src={slid2}
                        alt="Banner 1"
                        className="slide-image"
                        style={{height:'90vh',objectFit:'cover',marginTop:'1px'}}
                    />
                  
                </div>
                <div className="slide">
                    <img
                        src={slid3}
                        alt="Banner 1"
                        className="slide-image"
                        style={{height:'90vh',objectFit:'cover',marginTop:'1px'}}
                    />
                  
                </div>
                <div className="slide">
                    <img
                        src={slid4}
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
