import { Link } from "react-router-dom";
import styles from './Nav.module.css';
import CartLogo from '../../assets/cartLogo.png';
import homeLogo from '../../assets/homeLogo.png';
import shopLogo from '../../assets/shopLogo.png';
import aboutLogo from '../../assets/aboutLogo.png';

function Nav(){
    return (
        <div className={styles.navCnt}>
            <div className={styles.logo}>
                <p>LuxeCart 🟢</p>
            </div>
            <div className={styles.pages}>
                <Link to="/" className={styles.nav}>
                <img src={homeLogo} alt="home-logo" className={styles.sublogo}/>
                Home
                </Link>

                <Link to="/shop" className={styles.nav}>
                <img src={shopLogo} alt="shop-logo" className={styles.sublogo} />
                Shop
                </Link>

                <Link to="/about" className={styles.nav}>
                <img src={aboutLogo} alt="about-logo" className={styles.sublogo} />
                About
                </Link>
            </div>
            <div className={styles.cart}>
                <Link to="/cart" className={styles.nav}>
                <img src={CartLogo} alt="cart-logo" className={styles.sublogo} />
                </Link>
            </div>
        </div>
    )
};

export default Nav;