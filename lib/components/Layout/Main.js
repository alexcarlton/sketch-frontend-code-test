import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex: 1;
  min-height: 0;

  background-color: ${({ theme }) => theme.colors.grey};
`;

export { Main };
