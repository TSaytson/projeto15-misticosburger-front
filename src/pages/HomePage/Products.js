import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SingleProduct from './SingleProduct';

export default function Products({ type, products }) {

    return (
        <ProductsStyle>
            <h1>{type}</h1>
            <Item>
                {products.map(p => (

                    <SingleProduct product={p} />
                ))}
            </Item>
        </ProductsStyle>

    );
}

const ProductsStyle = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
`
const Item = styled.div`

    display: flex;

    flex-wrap: wrap;
`