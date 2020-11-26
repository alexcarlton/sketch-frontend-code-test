import styled from "styled-components";
import { NavigationDivider } from "./NavigationDivider";
import { NavigationSketchLogo } from "./NavigationSketchLogo";
import { NavigationTitle } from "./NavigationTitle";

const Navigation = styled.header`
  display: flex;
  align-items: center;

  padding: 0 1rem;
  height: 4rem;

  z-index: 1;

  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;

Navigation.Divider = NavigationDivider;
Navigation.SketchLogo = NavigationSketchLogo;
Navigation.Title = NavigationTitle;

export { Navigation };
