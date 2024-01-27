import classes from "./Carousel.module.css";

function Carousel(props) {
  // const productList = products.map((product) => (
  //   <li>
  //     <ProductItem key={product.id} product={product}></ProductItem>
  //   </li>
  // ));

  return (
    <div className={classes.carousel}>
      <button className={`${classes[`btn--left`]} ${classes.btn}`}>
        <ion-icon name="chevron-back-outline"></ion-icon>
      </button>
      <button className={`${classes[`btn--right`]} ${classes.btn}`}>
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </button>
      <img src={props.image} alt="current_sale_image" />
      <div className={classes.dots}>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
      </div>
    </div>
  );
}

export default Carousel;
