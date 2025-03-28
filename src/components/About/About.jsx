import styles from './About.module.css';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';

function About(){
    return (
        <div className={styles.mainCnt}>
            <div className={styles.aboutHeading}>
                <p>The Legacy of Style & Sophistication</p>
            </div>
            <div className={styles.cnt}>
                <div className={styles.miniCnt}>
                    <p className={styles.header}>Our Story</p>
                    <p className={styles.txt}>Founded with a passion for sophistication, we curate the finest fashion and jewelry that blend elegance with modern trends. Our mission is to bring you luxurious styles that stand the test of time.</p>
                </div>
                <img src={img1} alt="image1" className={styles.photo}/>
            </div>

            <div className={styles.cnt}>
                <div className={styles.miniCnt}>
                    <p className={styles.header}>Our Collection</p>
                    <p className={styles.txt}>From exquisite designer wear to stunning jewelry pieces, every item is handpicked for its quality, craftsmanship, and timeless appeal. Whether it's everyday chic or red-carpet glam, we have something for everyone.</p>
                </div>
                <img src={img2} alt="image2" className={styles.photo}/>
            </div>

            <div className={styles.cnt}>
                <div className={styles.miniCnt}>
                    <p className={styles.header}>Our Promise</p>
                    <p className={styles.txt}>We believe in providing authentic, high-quality fashion with exceptional customer service. Your satisfaction is our priority, and we strive to make luxury accessible, effortless, and truly unforgettable.</p>
                </div>
                <img src={img3} alt="image3" className={styles.photo}/>
            </div>

        </div>
    )
}
export default About;