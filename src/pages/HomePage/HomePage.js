import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Products from './Products';
import Header from './Header';

export default function HomePage() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const request = axios.get(`${process.env.REACT_APP_API_URL}/products`);

        request.then(response => {

            setProducts(response.data);

            console.log(response.data);

            setLoading(false);

        });

        request.catch(() => {

            alert("Ocorreu um erro ao carregar os dados");
        });
    }, []);

    return (
        <>
            <Header />
            <Products type="Hamburguer" products={products} />
            <Products type="Combo" products={products} />
            <Products type="Bebida" products={products} />
            <Products type="Sobremesa" products={products} />

        </>
    );
}

const Home = styled.div`

    display: flex;

    img {
        width: 100px;
        height: 100px;
    }
`