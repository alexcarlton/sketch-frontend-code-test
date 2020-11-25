import styled from "styled-components";

const Header = styled.header`
  display: flex;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;

export { Header };
