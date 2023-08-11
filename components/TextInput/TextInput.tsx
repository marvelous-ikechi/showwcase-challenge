import styled from "styled-components";

interface ModalInputProps {
  $marginTop?: string;
}

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

export const ModalTextInput = styled.input<ModalInputProps>`
  border: 1px solid #e5e7eb;
  padding: 1rem;
  border-radius: 0.375rem;
  width: 100%;
  margin-top: ${(props: ModalInputProps) => props.$marginTop ?? "0"};
`;
