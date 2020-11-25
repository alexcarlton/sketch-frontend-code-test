import styled from "styled-components";

const Header = styled.header`
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;

export { Header };
