import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";

export default function ProductPage() {

    const { selectedProduct } = useContext(UserContext);

    return (
        <Product >
            <h1>{selectedProduct.name}</h1>
            <img src={selectedProduct.urlImage} alt={selectedProduct.name} />
            <p>{selectedProduct.description}</p>

        </Product>
    );

}

const Product = styled.div`
    img {
        width: 40vw;
    }
    
`