import React, { CSSProperties, useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

interface Props {
    className?: string;
    style?: CSSProperties;
}

export const ProductButtons = ({className, style}: Props) => {

    const { increaseBy, counter, maxCount} = useContext(ProductContext);

    // TODO: isMaxReached = useCallback(() => counter.value >= counter.maxCount, [counter.value, counter.maxCount]);
    // Return true if the counter is at max
    const isMaxReached = useCallback(() => !!maxCount && counter === maxCount , [counter, maxCount]);

    return (
        <div
            className={`${styles.buttonsContainer} ${className}`}
            style={ style }
        >
                <button
                    className={styles.buttonMinus}
                    onClick={() => increaseBy(-1)}
                >
                -
                </button>
                <div className={styles.countLabel}> { counter} </div>
                <button
                    className={`${styles.buttonAdd} ${isMaxReached() && styles.disable}`}
                    onClick={() => increaseBy(+1)}
                >
                +
                </button>
            </div>
    )
}