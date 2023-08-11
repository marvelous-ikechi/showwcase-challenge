import styled from "styled-components";

interface RowWrapperProps {
  $marginTop?: string;
}

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RowWrapper = styled.div<RowWrapperProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${(props) => props.$marginTop || "0px"};
`;
