import styled from "styled-components"

export const SearchBarWrapper = styled.form`
  max-width: 604px;
  align-items: center;
  margin: 0 auto;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.8);
  position: relative;
`
export const Input = styled.input`
  max-width: 500px;
  width: 100%;
  height: 40px;
  line-height: 80px;
  font-size: 2rem;
  /*margin: 0 0 12px 0;*/
  border: 2px solid #3bbd96;
  background: #edf5e1;
  align-content: stretch;
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
`
export const NotFound = styled.h3`
  position: absolute;
  top: 56px;
  text-align: center;
  font-family: "Roboto";
  margin-top: 0;
  color: #000e21;
  width: 604px;
`
