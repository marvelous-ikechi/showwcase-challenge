import styled from "styled-components";

export const SubmitButton = styled.button`
  background-color: #f5f5f5;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  color: #262626;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  padding: 8px 9px;
  text-align: center;
  width: 100%;
  &:disabled {
    opacity: 0.3;
  }
`;
