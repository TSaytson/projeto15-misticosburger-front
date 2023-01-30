import styled from "styled-components";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import axios from "axios";

export default function CartPage() {

    const { cart, setCart, totalValue, setTotalValue } = useContext(UserContext);

    const newCart = cart.map(p => {
        return {
            id: p.id,
            name: p.name,
            quantity: p.quantity,
            total: (p.value * p.quantity).toFixed(2),   
        }
    })

    const dbCart = {...newCart, total: totalValue.toFixed(2)}

    console.log(dbCart);

    function removeProduct(id) {

        const newCart = cart.filter(p => p.id !== id);
        setCart(newCart);

        const product = cart.find(p => p.id === id);

        setTotalValue(totalValue - (product.value * product.quantity));

    }

    function placeOrder() {

        const request = axios.post(process.env.REACT_APP_API_URL +"/orders", dbCart);

        request.then(() => {
            alert("Pedido realizado com sucesso!");
            setCart([]);
            setTotalValue(0);
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
                        <ion-icon name="close-circle-outline" onClick={() => removeProduct(p.id)}></ion-icon>
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