import classes from "./Pagination.module.css";
import { Link } from "react-router-dom";
function Pagination() {
  return (
    <div className={classes.pagination}>
      <button>
        <ion-icon name="chevron-back-outline"></ion-icon>
      </button>
      <div className={classes.pages}>
        <Link href="#" className={classes[`current-page`]}>
          1
        </Link>
        <Link href="#">2</Link>
        <Link href="#">3</Link>
        <Link href="#">4</Link>
        <Link href="#">5</Link>
        <span>...</span>
        <Link href="#">20</Link>
      </div>
      <button>
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </button>
    </div>
  );
}

export default Pagination;
