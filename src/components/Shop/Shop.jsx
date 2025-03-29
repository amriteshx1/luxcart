import { useState, useEffect } from 'react';
import { useNavigate, useOutletContext } from "react-router-dom";
import styles from './Shop.module.css';

function Shop(){
    const [dataArr, setDataArr] = useState([]);
    const navigate = useNavigate();
    const { cart, setCart } = useOutletContext();

    async function fetchData(){
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            const fashionAndJewelryProducts = data
                .filter(el => 
                    el.category === "men's clothing" || 
                    el.category === "women's clothing" || 
                    el.category === "jewelery"
                )
                .slice(0, 15)
                .map(el => ({
                    id : el.id,
                    image: el.image,
                    title: el.title,
                    rating: el.rating.rate,
                    price: el.price,
                    category: el.category
                }));
            setDataArr(fashionAndJewelryProducts);
            console.log(fashionAndJewelryProducts);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }        

    useEffect(() => {
        fetchData()
    }, []);

    function handleClick(event, product){
        event.preventDefault();
    
        const existingItem = cart.find(item => item.id === product.id);

        if (existingItem) {
            navigate("/cart");
        } else {
            setCart([...cart, { ...product, quantity: 1 }]); 
            event.target.textContent = "Go to Cart";
        }
    }

    return (
        <div className={styles.mainCnt}>
            <div className={styles.header}>
                <p>Timeless Elegance: Fashion & Jewelry</p>
            </div>
            {dataArr.map((el) => (
                <div className={styles.cnt} key={el.id}>

                    <div className={styles.productImg}>
                    <img src={el.image} alt="product-image" />
                    </div>

                    <div className={styles.title}>
                        <p>{el.title}</p>
                    </div>

                    <div className={styles.miniCnt}>
                        <p>⭐ {el.rating}</p>
                        <p>$ {el.price}</p>
                    </div>

                    <div className={styles.miniCnt}>
                        <div className={styles.quantity}>
                            <input type="number" step="1" min="1" name="quantity" placeholder="1" />
                        </div>
                        <div className={styles.btn}>
                            <button onClick={(event) => handleClick(event, el)}>
                                {cart.find(item => item.id === el.id) ? "Go to Cart" : "Add to Cart"}
                            </button>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}
export default Shop;