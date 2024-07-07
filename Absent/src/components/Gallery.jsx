import "./gallery.css";
import Carousel from "react-bootstrap/Carousel";
function Gallery({ event, title, about }) {
  return (
    <div className="cont">
      <div className="txt">
        <h1 className="tit">{title}</h1>
        <p className="abt">{about}</p>
      </div>

      <div className="gallery_div">
        <Carousel className="gallery" slide={false} interval={5000}>
          <Carousel.Item>
            <img className="galimg" src={event.img1} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="galimg" src={event.img2} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="galimg" src={event.img3} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="galimg" src={event.img4} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="galimg" src={event.img5} />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Gallery;
