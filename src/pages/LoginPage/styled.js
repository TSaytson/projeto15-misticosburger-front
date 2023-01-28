import styled from "styled-components"
import background from "../../assets/wallpaper2.jpg"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${background});
  background-size: cover;
  background-repeat:  no-repeat;
  background-position: center center; 
  height: 800px;
  img{
    width: 250px;
  }
  h1 {
    color: white;
    font-family: 'Saira Stencil One', cursive;
    font-size: 32px;
  }

  @media screen and (min-width: 800px) {
    img {
      margin-top: 100px;
    }
  }
`