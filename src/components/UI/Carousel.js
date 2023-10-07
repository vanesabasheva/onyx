import classes from "./Carousel.module.css";
import { ReactComponent as ArrowLeft } from "../../assets/icons/ArrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../assets/icons/ArrowRight.svg";

function Carousel(props) {
  return (
    <div className={classes.carousel}>
      <button className={classes.btn}>
        <ArrowLeft />
      </button>
      <img src={props.image} alt="current_sale_image" />
      <button className={classes.btn}>
        <ArrowRight />
      </button>
    </div>
  );
}

export default Carousel;
