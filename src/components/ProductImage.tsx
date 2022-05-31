import React, { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export interface Props {
    className?: string;
    img?: string;
    style?: CSSProperties;
}

export const ProductImage = ({img, className, style} : Props) => {

    const { product } = useContext(ProductContext);

    let imgToDisplay: string;

    if (img) {
        imgToDisplay = img;
    } else if (product.img) {
        imgToDisplay = product.img;
    } else {
        imgToDisplay = noImage;
    }

    return (
        <img
            className={`${styles.productImg} ${className}`}
            src={ imgToDisplay }
            alt='Product'
            style={ style }
        />
    )
}
