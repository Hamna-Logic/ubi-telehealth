import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlickCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        <div>
          <img src="src/assets/banner-1.jpg" className="w-full h-auto object-cover" />
        </div>
        <div>
          <img src="src/assets/banner-2.jpg" className="w-full h-auto object-cover" />
        </div>
        <div>
          <img src="src/assets/banner-3.jpg" className="w-full h-auto object-cover" />
        </div>
        <div>
          <img src="src/assets/banner-4.jpg" className="w-full h-auto object-cover" />
        </div>
      </Slider>
    </div>
  );
};

export default SlickCarousel;

