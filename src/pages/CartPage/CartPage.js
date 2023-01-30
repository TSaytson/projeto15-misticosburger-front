import styled from "styled-components";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CartPage() {

    const navigate = useNavigate();

    const { cart, setCart, totalValue, setTotalValue } = useContext(UserContext);

    const userId = localStorage.getItem("userId");

    const newCart = cart.map(p => {
        return {
            name: p.name,
            quantity: p.quantity,
            total: (p.value * p.quantity).toFixed(2),   
        }
    })

    const dbCart = {newCart, total: totalValue.toFixed(2), userId}

    console.log(dbCart);

    function removeProduct(name) {

        const newCart = cart.filter(p => p.name !== name);
        setCart(newCart);

        const product = cart.find(p => p.name === name);

        setTotalValue(totalValue - (product.value * product.quantity));

        navigate(`/home`);

    }

    function placeOrder() {

        const request = axios.post(process.env.REACT_APP_API_URL +"/orders", dbCart);

        request.then(() => {
            alert("Pedido realizado com sucesso!");
            setCart([]);
            setTotalValue(0);
            navigate(`/home`);
        });

        request.catch(() => {
            alert("Ocorreu um erro ao realizar o pedido.");
        });

    }

    return (
        <Cart>

            <ul>
                {cart.map(p => (
                    <li key={p.id}>
                        <img src={p.urlImage} alt={p.name} />
                        <p>{p.name}</p>
                        <p>R${p.value.toString().replace(".", ",")}0</p>
                        <p>{p.quantity}</p>
                        <ion-icon name="close-circle-outline" onClick={() => removeProduct(p.name)}></ion-icon>
                    </li>
                ))}
            </ul>
            <footer>
                <p>Total: R${totalValue.toFixed(1).toString().replace(".", ",")}0</p>
                <button onClick={ () => placeOrder() }>Finalizar pedido</button>
            </footer>
        </Cart>
    );
}

const Cart = styled.div`
    img{
        width: 100px;
    }
`