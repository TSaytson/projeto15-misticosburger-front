import styled from "styled-components";
import background from "../../assets/wallpaper2.jpg";


export default function Header() {
    return (
        <HeaderStyle>
        <h1>Místicos Burger</h1>
        <p>Os melhores burgers da cidade</p>
        </HeaderStyle>
    );
}

const HeaderStyle = styled.div`
    background-image: url(${background});
`