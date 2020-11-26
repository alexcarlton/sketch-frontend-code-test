import styled from "styled-components";

const DividerImage = styled.img`
  margin: 0 1rem;
`;

function NavigationDivider() {
  return (
    <DividerImage src="/separator.svg" alt="Divider" width={1} height={32} />
  );
}

export { NavigationDivider };
