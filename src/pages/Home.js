import Carousel from "../components/UI/Carousel";
import carousel_image from "../assets/img/carousel-image.webp";
import classes from "./Home.module.css";
import { Link } from "react-router-dom";
import Features from "../components/Features/Features";

function HomePage({ images }) {
  // const navigate = useNavigate();

  // function navigateHandler() {
  //   navigate("/otc-medicine");
  // }

  const imagesList = images.map((currImage) => (
    <figure className={classes[`gallery-item`]}>
      <Link to={`/category/${currImage.name}`}>
        <img src={currImage.src} alt={currImage.name}></img>
      </Link>
    </figure>
  ));

  return (
    <main>
      <div className={classes.container}>
        <Carousel image={carousel_image} />
        <section>
          <h2 className={classes["monthly-sale-txt"]}>Месечни предложения</h2>
          <section className="grid--3-cols">{imagesList}</section>
        </section>
        <Features />
      </div>
    </main>
  );
}

export default HomePage;
