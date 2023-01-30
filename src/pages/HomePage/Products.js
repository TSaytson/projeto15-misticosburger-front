import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SingleProduct from './SingleProduct';

export default function Products({ type, products }) {

    return (
        <ProductsStyle id={type}>
            <h1>{type}</h1>
            <Item>
                {products.map(p => {
                   if(p.type === type)  return <SingleProduct key={p.id} product={p} />
                
            })}
            </Item>
        </ProductsStyle>

    );
}

const ProductsStyle = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
    }
`
const Item = styled.div`

    display: flex;

    flex-wrap: wrap;

    justify-content: center;

    gap: 20px;

    
`