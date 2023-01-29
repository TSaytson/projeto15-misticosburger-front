import styled from "styled-components";

export default function SingleProduct({ product }) {

    return (
        <Product>
            <ProductImage src={product.urlImage} alt={product.name} />
            <ProductName>{product.name}</ProductName>      
            <ProductValue>R${product.value.toString().replace(".", ",")}</ProductValue>
        </Product>
    );
}

const Product = styled.div`

    
`
const ProductImage = styled.img``
const ProductName = styled.h2``
const ProductDescription = styled.p``
const ProductValue = styled.p``
