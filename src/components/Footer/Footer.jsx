import styles from './Footer.module.css';
import Twitter from '../../assets/twitter.png';
import Facebook from '../../assets/facebook.png';
import Instagram from '../../assets/instagram.png';
import Linkedin from '../../assets/linkedin.png';

function Footer(){
    return (
        <div className={styles.mainCnt}>
            <div className={styles.cnt1}>
                <p className={styles.header}>Company</p>
                <p className={styles.subheading}>About Us</p>
                <p className={styles.subheading}>Our Services</p>
                <p className={styles.subheading}>Privacy Policy</p>
                <p className={styles.subheading}>Affiliate Program</p>
            </div>
            <div className={styles.cnt2}>
                <p className={styles.header}>Online Shop</p>
                <p className={styles.subheading}>Watch</p>
                <p className={styles.subheading}>Bag</p>
                <p className={styles.subheading}>Shoes</p>
                <p className={styles.subheading}>Dress</p>
            </div>
            <div className={styles.cnt3}>
                <p className={styles.header}>Get Help</p>
                <p className={styles.subheading}>FAQ</p>
                <p className={styles.subheading}>Order Status</p>
                <p className={styles.subheading}>Returns</p>
                <p className={styles.subheading}>Payment Options</p>
            </div>
            <div className={styles.cnt4}>
            <p className={styles.header}>Follow Us</p>
            <div className='logo'>
                <img src={Facebook} alt="facebook" className={styles.smlogo} />
                <img src={Twitter} alt="twitter" className={styles.smlogo} />
                <img src={Instagram} alt="instagram" className={styles.smlogo} />
                <img src={Linkedin} alt="linkedin" className={styles.smlogo} />
            </div>
            </div>
        </div>
    )
}
export default Footer;