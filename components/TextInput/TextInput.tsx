import styled from "styled-components";

export const TextInput = styled.input`
  width: 100%;
  height: 60px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 10px;
  font-size: 22px;
  margin-bottom: 10px;
  box-sizing: border-box;
  outline: none;
  &:focus {
    border-color: #333;
  }
`;
