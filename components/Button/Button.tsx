import styled from "styled-components";

interface FormButtonProps {
  $width?: string;
  $margin?: string;
}

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

export const GeneralButton = styled.button`
  background-color: #3897f0;
  border: 1px solid #3897f0;
  border-radius: 3px;
  color: #ffffff;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  padding: 8px 9px;
  text-align: center;
  width: 50%;
  &:disabled {
    opacity: 0.3;
  }
`;

export const FormButton = styled.button<FormButtonProps>`
  background-color: #3897f0;
  border: 1px solid #3897f0;
  border-radius: 3px;
  color: #ffffff;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  padding: 8px 9px;
  text-align: center;
  margin: ${(props: FormButtonProps) => props.$margin ?? "0"};
  width: ${(props: FormButtonProps) => props.$width ?? "100%"};
  &:disabled {
    opacity: 0.3;
  }
`;
