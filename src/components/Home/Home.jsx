import HomeImg from '../../assets/HomeImage.jpg'
import styles from './Home.module.css';
function Home(){
    return(
        <div className={styles.mainCnt}>
            <div className={styles.cnt1}>
                <p>Discover the perfect blend of elegance, comfort, and trend with our exclusive fashion collections.</p>
            </div>
            <div className={styles.cnt2}>
                <img src={HomeImg} alt="homepage-mainImage" className={styles.homeImg}/>
            </div>
        </div>
    )
}
export default Home;