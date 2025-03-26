import styles from './Nav.module.css';

function Nav(){
    return (
        <div className={styles.navCnt}>
            <div className={styles.logo}>
                <h1>Logo</h1>
            </div>
            <div className={styles.pages}>
                <h1>Home</h1>
                <h1>Shop</h1>
                <h1>About</h1>
            </div>
            <div className={styles.cart}>
                <h1>Cart</h1>
            </div>
        </div>
    )
};

export default Nav;