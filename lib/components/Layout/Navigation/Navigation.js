import styled from "styled-components";
import { NavigationDivider } from "./NavigationDivider";
import { NavigationSketchLogo } from "./NavigationSketchLogo";
import { NavigationBreadcrumb } from "./NavigationBreadcrumb";

const Navigation = styled.header`
  display: flex;
  align-items: center;

  padding: 1rem;

  z-index: 1;

  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;

Navigation.Divider = NavigationDivider;
Navigation.SketchLogo = NavigationSketchLogo;
Navigation.Breadcrumb = NavigationBreadcrumb;

export { Navigation };
