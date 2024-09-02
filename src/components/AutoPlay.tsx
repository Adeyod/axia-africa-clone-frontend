import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { testimonials } from '../constants/courses-data';

const AutoPlay = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3, // On large screens
    slidesToScroll: 1,
    autoplay: true,
    speed: 9000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 9000,
  //   autoplaySpeed: 2000,
  //   cssEase: 'linear',
  //   pauseOnHover: true,

  //   responsive: [
  //     {
  //       breakpoint: 1024, // Medium screen
  //       settings: {
  //         slidesToShow: 2, // Adjust to show 2 slides on medium screens
  //         slidesToScroll: 1,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 800, // Small screen
  //       settings: {
  //         slidesToShow: 1, // Adjust to show 1 slide on mobile screens
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 600, // Small screen
  //       settings: {
  //         slidesToShow: 1, // Adjust to show 1 slide on mobile screens
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 400, // Small screen
  //       settings: {
  //         slidesToShow: 1, // Adjust to show 1 slide on mobile screens
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 200, // Small screen
  //       settings: {
  //         slidesToShow: 1, // Adjust to show 1 slide on mobile screens
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  return (
    <div className="slider-container overflow-hidden px-5">
      {' '}
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="card-container h-[400px] p-6 rounded-lg shadow-md mx-4 bg-gray-50"
          >
            <p className="h-[60%]">{item.comment}</p>
            <div
              className="flex items-center gap-2 mt-[40px]"
              style={{ marginRight: 20 }}
            >
              <img
                className="h-[56px] md:h-auto"
                src={item.photo}
                alt="testimonials"
              />
              <h3 className="font-bold ml-5 md:text-xl text-lg text-gray-700">
                {item.name}
              </h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AutoPlay;
