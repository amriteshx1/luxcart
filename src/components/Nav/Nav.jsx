import { Link } from "react-router-dom";
import styles from './Nav.module.css';

function Nav(){
    return (
        <div className={styles.navCnt}>
            <div className={styles.logo}>
                <p>Logo</p>
            </div>
            <div className={styles.pages}>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/about">About</Link>
            </div>
            <div className={styles.cart}>
                <Link to="/cart">Cart</Link>
            </div>
        </div>
    )
};

export default Nav;