import "./Hero.css";
import { AiOutlineSearch } from "react-icons/ai";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Hero = () => {
  const slideImages = [
    "carsImgs/car1.jpg",
    "carsImgs/car2.jpg",
    "carsImgs/car6.jpg",
  ];
  return (
    <div className="hero-container">
      <div className="slideshow-container">
        <div className="overlay"></div>
        <Slide>
          {slideImages.map((imageUrl, index) => (
            <div key={index} className="each-slide">
              <div
                className="img-div"
                style={{ backgroundImage: `url(${imageUrl})` }}
              />
            </div>
          ))}
        </Slide>
      </div>
      <form className="form-container">
        <div className="where-container ">
          <label htmlFor="where">Where</label>
          <input
            type="text"
            placeholder="Search Location..."
            id="where"
            className="input-text"
          />
        </div>
        <div className="from-container">
          <label htmlFor="from">From</label>
          <input type="date" id="from" className="input-date" />
        </div>
        <div className="until-container">
          <label htmlFor="until">Until</label>
          <input type="date" id="until" className="input-date" />
        </div>
        <div className="btn-container">
          <AiOutlineSearch size={25} className="form-icon-search" />
          <button className="form-btn">Search for cars</button>
        </div>
      </form>
    </div>
  );
};

export default Hero;
