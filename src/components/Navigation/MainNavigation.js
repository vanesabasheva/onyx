import { NavLink } from "react-router-dom";
import { useState } from "react";
import ReactDOM from "react-dom";
import classes from "./MainNavigation.module.css";
import CartButton from "../Cart/CartButton";
import SearchBar from "../Layout/SearchBar";
import Header from "../Layout/Header";
import Backdrop from "../UI/Backdrop";
import Overlay from "../UI/Overlay";
import { categories } from "../../assets/mocks/DummyData";
import DropdownNavigation from "./DropdownNavigation";

export function MainNavigation() {
  const [searchValue, setSearchValue] = useState("");
  const searchHandler = () => {};

  //TO DO: optimize following search state
  const changeSearchInputHandler = (event) => {
    setSearchValue(event.target.value);
  };

  const [activeNav, setActiveNav] = useState(null);

  const categories = {
    Лекарства: [
      "Болки",
      "Грип и настинка",
      "Болно гърло",
      "Кашлица",
      "Хрема",
      "Алергия",
      "Храносмилателна система",
      "Сърдечно-съдова система",
      "Очи и уши",
      "Хомеопатия",
      "Кожни болести",
      "Женско здраве",
      "Мъжко здраве",
    ],
    "Хранителни Добавки": [
      "Билкови продукти",
      "Витамини",
      "Минерали",
      "Храносмилане",
      "Памет и оросяване",
      "Сърце",
      "Кости, стави, мускули",
      "Коса, кожа, нокти",
      "Имунитет",
      "Сън и спокойствие",
      "Спортни добавки",
    ],
    Козметика: [
      "Грижа за коса",
      "Грижа за кожа",
      "Грижа за лице",
      "Ръце",
      "Тяло",
      "Мъже",
    ],
    "Мама и бебе": [
      "Козметика за бебета и деца",
      "Бебешки храни",
      "Бебешки аксесоари",
      "Орална хигиена",
      "Храни и напитки",
    ],
    "Лична Хигиена": [
      "Oрална хигиена",
      "Тяло",
      "Интимна хигиена",
      "Дезодоранти",
      "Консумативи",
      "Бръснене и депилация",
      "Още?",
    ],
    Промоции: [],
  };

  const handleMouseEnter = (category) => {
    setActiveNav(category);
    //document.querySelector(".sticky").classList.add("active-dropdown");
  };

  const handleMouseLeave = () => {
    setActiveNav(null);
    //document.querySelector(".sticky").classList.remove("active-dropdown");
  };

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop></Backdrop>,
        document.getElementById("backdrop-root")
      )}

      {ReactDOM.createPortal(
        <Overlay categories={categories} />,
        document.getElementById("overlay-root")
      )}
      <div className={classes["info-bar"]}>
        <span className={classes.info}>
          <ion-icon name="call-outline"></ion-icon>
          Обадете ни се: <a href="tel:+359884986484">+359884986484</a>
        </span>
        <span className={classes.info}>
          <ion-icon name="location-outline"></ion-icon>
          Посетете ни:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.google.com/maps/place/%D0%90%D0%BF%D1%82%D0%B5%D0%BA%D0%B0+Onyx/@42.7431073,23.272677,17z/data=!4m14!1m7!3m6!1s0x40aa91007506199f:0x40470f86f8ce12b6!2z0JDQv9GC0LXQutCwIE9ueXg!8m2!3d42.7431034!4d23.2752519!16s%2Fg%2F11vs01b599!3m5!1s0x40aa91007506199f:0x40470f86f8ce12b6!8m2!3d42.7431034!4d23.2752519!16s%2Fg%2F11vs01b599?entry=ttu">
            гр. София, ж.к. Обеля, ул. Дмитрий Лихачoв 31
          </a>
        </span>
      </div>
      <div className={classes.sticky}>
        <header className={classes.header}>
          <Header />
          <ul>
            <li>
              <SearchBar
                value={searchValue}
                onSearchChange={changeSearchInputHandler}
                onSearch={searchHandler}
              />
            </li>
            <li>
              <CartButton />
            </li>
          </ul>
        </header>
        <nav
          className={classes.navigation}
          onMouseLeave={() => handleMouseLeave(null)}>
          <ul className={classes.list}>
            {Object.keys(categories).map((categoryKey) => (
              <li
                key={categoryKey}
                onMouseEnter={() => handleMouseEnter(categoryKey)}>
                <NavLink
                  to={`/category/${categoryKey}`}
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }>
                  {categoryKey}
                </NavLink>
              </li>
            ))}
          </ul>
          {activeNav && categories[activeNav].length > 0 && (
            <DropdownNavigation categories={categories} activeNav={activeNav} />
          )}
        </nav>
      </div>
    </>
  );
}

export default MainNavigation;
