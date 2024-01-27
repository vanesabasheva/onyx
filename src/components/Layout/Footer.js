import { Link, NavLink } from "react-router-dom";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer className={`grid--3-cols grid--gap-lg ${classes.footer}`}>
      <div className={classes.logo}>
        <h2>
          Onyx <span>by V&N Pharma®</span>
        </h2>
        <ul className={classes["social-links"]}>
          <li>
            <Link to={"/"}>
              <ion-icon name="logo-instagram"></ion-icon>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <ion-icon name="logo-facebook"></ion-icon>
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <ion-icon name="logo-twitter"></ion-icon>
            </Link>
          </li>
        </ul>
        <p className={classes.copyright}>
          Copyright &copy; 2027, V&N Pharma Inc. Всички права запазени
        </p>
      </div>
      <div className={classes.address}>
        <p className={classes["footer-heading"]}>Контакти</p>
        <address className={classes.contacts}>
          <p>
            {" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.google.com/maps/place/%D0%90%D0%BF%D1%82%D0%B5%D0%BA%D0%B0+Onyx/@42.7431073,23.272677,17z/data=!4m14!1m7!3m6!1s0x40aa91007506199f:0x40470f86f8ce12b6!2z0JDQv9GC0LXQutCwIE9ueXg!8m2!3d42.7431034!4d23.2752519!16s%2Fg%2F11vs01b599!3m5!1s0x40aa91007506199f:0x40470f86f8ce12b6!8m2!3d42.7431034!4d23.2752519!16s%2Fg%2F11vs01b599?entry=ttu">
              гр. София, ж.к. Обеля, ул. Дмитрий Лихачoв 31
            </a>
          </p>
          <p>
            <a href="tel:+359884986484">+359884986484</a>
            <br />
            <br></br>
            <a href="mailto: vanesabasheva1@gmail.com">
              vanesabasheva1@gmail.com
            </a>
          </p>
        </address>
      </div>
      <nav className={classes.links}>
        <p className={classes["footer-heading"]}>Информация</p>
        <ul>
          <li>
            <NavLink to="/">Общи условия</NavLink>
          </li>
          <li>
            <NavLink to="/">Доставка</NavLink>
          </li>
          <li>
            <NavLink to="/">Често Задавани Въпроси</NavLink>
          </li>
          <li>
            <NavLink to="/">Рекламации</NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
