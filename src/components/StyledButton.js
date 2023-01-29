import styled from "styled-components"

const StyledButton = styled.button`
  width: 300px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  border: none;
  border-radius: 4.5px;
  font-weight: 700;
  cursor: pointer;
  pointer-events: ${(props) => props.disabled ? "none" : "all"};
  opacity: ${(props) => props.disabled ? 0.7 : 1};
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  background: lightgreen;
  color: white;
`

export default StyledButton