import React from 'react';
import renderer from 'react-test-renderer';
import {ProductTitle} from '../../src/components';

describe('ProductTitle', () => {
    test('Show title', () => {
        const component = renderer.create(
            <ProductTitle title="Coffee Mug" className='product-test' />
        );
        console.log(component.toJSON());
    });
});
