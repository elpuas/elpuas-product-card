import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard. ProductImage, ProductTitle, ProductButtons } from '../.';

const product = {
  id: '1',
  title: 'Coffee Mug - Uno',
  // img: './coffee-mug.png'

}


const App = () => {
  return (
    <>
      <ProductCard
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
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
