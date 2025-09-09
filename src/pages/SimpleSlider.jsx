import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            <div>
                <img src="https://assets-in.bmscdn.com/discovery-catalog/events/et00420551-ghutzszdyb-landscape.jpg" alt="" />
            </div>
            <div>
                <img src="https://assets-in.bmscdn.com/discovery-catalog/events/et00301886-qxwyelqyjt-landscape.jpg" alt="" />
            </div>
            <div>
                <img src="https://assets.thehansindia.com/h-upload/2021/03/21/1045763-salaga.webp" alt="" />
            </div>
            <div>
                <img src="https://assets-in.bmscdn.com/discovery-catalog/events/et00387652-fvkkjapyhv-landscape.jpg" alt="" />
            </div>
            <div>
                <img src="https://ss-i.thgim.com/public/incoming/jo7sva/article69810184.ece/alternates/LANDSCAPE_1200/ENG%20vs%20IND%20Blog%204.png" alt="" />
            </div>
            <div>
                <img src="https://thebridge.in/h-upload/2022/01/23/22299-live-blog-bfc-vs-fcg.jpg" alt="" />
            </div>
        </Slider>
    );
}