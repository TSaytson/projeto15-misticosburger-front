import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Footer() {

    const navigate = useNavigate();

    function goToCart() {
            
            navigate(`/cart`);
    }
    return (
        <FooterStyle onClick={() => goToCart()}>
        <p>Ir para carrinho</p>
        </FooterStyle>
    );
}

const FooterStyle = styled.footer`
    background-color: #E86E5A;
    color: white;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
        cursor: pointer;
    }
`