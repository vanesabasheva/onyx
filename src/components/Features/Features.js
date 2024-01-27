import { Link } from "react-router-dom";
import classes from "./Features.module.css";

function Features() {
  return (
    <section className="grid--3-cols grid--gap-md">
      <div className={classes.feature}>
        <ion-icon name="storefront-outline"></ion-icon>
        <p className={classes["feature-title"]}>Вземи от аптеката</p>
        <p className={classes["feature-text"]}>
          Избери опция <span>"Вземи от аптеката"</span> и ела на адрес{" "}
          <span>"Гр. София, кв. Обеля , бул. Дмитрий Лихачов 31"</span>, за да
          вземеш вече готовата си опакована поръчка.
        </p>
      </div>
      <div className={classes.feature}>
        <ion-icon name="cube-outline"></ion-icon>
        <p className={classes["feature-title"]}>Доставка днес</p>
        <p className={classes["feature-text"]}>
          В София доставяме поръчките още на същия ден. За други населени места
          доставката е на следващия ден. За повече информация виж:
          <Link to={"/"}> Доставка &rarr;</Link>
        </p>
      </div>
      <div className={classes.feature}>
        <ion-icon name="pricetags-outline"></ion-icon>
        <p className={classes["feature-title"]}>Купи и спести</p>
        <p className={classes["feature-text"]}>
          С всяка покупка на място в аптеката, получаваш ваучер с отстъпка за
          следващата си поръчка в нашия онлайн магазин.
        </p>
      </div>
    </section>
  );
}

export default Features;
