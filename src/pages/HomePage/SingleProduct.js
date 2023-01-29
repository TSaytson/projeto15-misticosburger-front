import styled from "styled-components";

export default function SingleProduct({ product }) {

    function setProduct() {

    }

    return (
        <Product onClick={setProduct}>
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
