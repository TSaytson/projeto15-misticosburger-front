import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";


export default function SingleProduct({ product }) {

    const navigate = useNavigate();

    const { setSelectedProduct } = useContext(UserContext);

    function setProduct() {

        setSelectedProduct(product);

        navigate(`/productPage`)
    }    

    return (
        <Product onClick={() => setProduct()}>
            <ProductImage src={product.urlImage} alt={product.name} />
            <ProductName>{product.name}</ProductName>
            <ProductValue>R${product.value.toString().replace(".", ",")}0</ProductValue>
        </Product>
    );
}

const Product = styled.div`

    :hover {
        cursor: pointer;
    }

    width: 150px;
    
`
const ProductImage = styled.img``
const ProductName = styled.h2``
const ProductDescription = styled.p``
const ProductValue = styled.p``
