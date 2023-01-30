import styled from "styled-components";
import { UserContext } from "../../contexts/UserContext";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductPage() {

    const navigate = useNavigate();
    const { selectedProduct, setTotalValue, totalValue, setCart, cart } = useContext(UserContext);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        setTotalValue(totalValue + selectedProduct.value);
    }, [])
    

    function addQuantity() {

        setQuantity(quantity + 1);
        setTotalValue(totalValue + selectedProduct.value);

    }

    function removeQuantity() {

        if (quantity > 1) {
            setQuantity(quantity - 1);
            setTotalValue(totalValue - selectedProduct.value);
        }
    }

    function addToCart() {

        const product = {
            id: selectedProduct._id,
            name: selectedProduct.name,
            value: selectedProduct.value,
            quantity: quantity,
            urlImage: selectedProduct.urlImage
        }
        if (cart.find(p => p.id === product.id)) {

            const newCart = cart.map(p => {
                if (p.id === product.id) {
                    return {
                        ...p,
                        quantity: p.quantity + product.quantity
                    }
                }
                return p;
            }
            )
            setCart(newCart);
            navigate(`/home`)
            console.log(cart);
            return;
        }
        setCart([...cart, product]);
        navigate(`/home`)
        console.log(cart);
    }
    return (
        <Product >
            <h1>{selectedProduct.name}</h1>
            <img src={selectedProduct.urlImage} alt={selectedProduct.name} />
            <p>{selectedProduct.description}</p>
            <ion-icon name="add-circle-outline" onClick={() => addQuantity()}></ion-icon>
            <span> {quantity} </span>
            <ion-icon name="remove-circle-outline" onClick={() => removeQuantity()}></ion-icon>
            <footer>
                <button onClick={() => addToCart()}>Adicionar ao carrinho</button>
            </footer>
        </Product>
    );

}

const Product = styled.div`
    img {
        width: 20vw;
    }
    footer {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        button {
            width: 100%;
            height: 50px;
            background-color: #E86E5A;
            color: #fff;
            font-size: 20px;
            border: none;
            border-radius: 5px;
            :hover {
                cursor: pointer;
            }

    }
}
    
`