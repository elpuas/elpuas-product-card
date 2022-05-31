# elpuas-product-card

## Example

```
import { ProductCard. ProductImage, ProductTitle, ProductButtons } from 'do-product-card'
```

```

<ProductCard
    key={product.id}
    product={product}
    className='bg-dark'
    initialValues={{
        count: 4,
        maxCount: 10
    }}
>
    {
        ({reset, count, isMaxCountReached, maxCount, increaseBy }) => (
            <div>
                <ProductImage className="custom-image" />
                <ProductTitle className="text-white text-bold" />
                <ProductButtons className="custom-buttons" />

                <button onClick={reset}>Reset</button>
                <button onClick={ () => increaseBy(-2)}> -2 </button>
                {
                    ( !isMaxCountReached && <button onClick={ () => increaseBy(+2)}> +2 </button> )
                }

                <span>{count} - {maxCount}</span>
            </div>
        )
    }
</ProductCard>

```
