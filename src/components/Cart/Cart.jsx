import { useState, useEffect, use } from 'react';
import { useNavigate } from "react-router-dom";
import styles from './Cart.module.css';
import card from '../../assets/cards.png';
function Cart(){
    const navigate = useNavigate();

    return(
        <div className={styles.mainCnt}>
            <div className={styles.productCnt}>
                <p className={styles.header}>Cart</p>
            </div>
            <div className={styles.billCnt}>
                <p className={styles.header}>Bill</p>
                <div className={styles.billInfo}>
                    <p className={styles.txt}>Subtotal</p>
                    <p className={styles.txt}>$ 0.00</p>
                </div>
                <div className={styles.billInfo}>
                    <p className={styles.txt}>Shipping</p>
                    <p className={styles.txt}>$ 19.99</p>
                </div>
                <div className={styles.billInfo}>
                    <p className={styles.txt}>Platform fee</p>
                    <p className={styles.txt}>$ 2</p>
                </div>
                <div className={styles.billInfo}>
                    <p className={styles.txt}>Discount</p>
                    <p className={styles.txt}>0%</p>
                </div>
                <div className={styles.billInfo}>
                    <p className={styles.miniHeader}>Total</p>
                    <p className={styles.miniHeader}>$ 100</p>
                </div>
                <div className={styles.discount}>
                    <p className={styles.txt}>Discount Coupon</p>
                    <div className={styles.coupon}>
                        <input type="text" placeholder='Enter coupon code' name='coupon' />
                        <button type='button' className={styles.miniHeader}>Apply</button>
                    </div>
                </div>
                <div className={styles.payment}>
                    <p className={styles.txt}>Payment methods</p>
                    <div className={styles.pay}>
                        <img src={card} alt="card-image" />
                        <p className={styles.txt}>All major credit cards accepted</p>
                    </div>
                </div>
                <button className={styles.miniHeader}>Checkout </button>
            </div>

        </div>
    )
}
export default Cart;