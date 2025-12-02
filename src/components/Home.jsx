// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Home.css";
import Corusel from "./Corusel";
import Cardlist from "./cardlist";

const Home = () => {
  return (
    <div className="Home">
      <Corusel />
      <Cardlist />
    </div>
  );
};

export default Home;
