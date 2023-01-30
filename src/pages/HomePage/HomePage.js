import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Products from './Products';
import Header from './Header';
import Footer from './Footer';
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";

export default function HomePage() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { cart } = useContext(UserContext);

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
            {cart.length >0 && <Footer />}
        </>
    );
}
