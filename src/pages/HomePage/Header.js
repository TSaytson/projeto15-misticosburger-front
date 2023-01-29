import styled from "styled-components";
import background from "../../assets/wallpaper2.jpg";


export default function Header() {
    return (
        <HeaderStyle>
        <h1>Ola, Fulano!</h1>
        <p>Os melhores burgers da cidade</p>
        </HeaderStyle>
    );
}

const HeaderStyle = styled.div`
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;
`