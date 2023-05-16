import React from "react";
import styles from './products.module.scss'

function Product() {
    return <div className={styles.main}>
        <div className={styles.product}>
            <div className={styles.productImage}>
                <h1>image</h1>
            </div>
            <div className={styles.productText}>
                <h1 className={styles.productTitle}>Lorem ipsum dolor.</h1>
                <ul className={styles.features}>
                    <li className={styles.featureItem}>
                        Lorem ipsum.
                    </li>
                </ul>
            </div>
        </div>
    </div>;
}

export default Product;
