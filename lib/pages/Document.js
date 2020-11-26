import { useRouter } from "next/router";
import { Navigation } from "../components/Layout/Navigation/Navigation";
import { Main } from "../components/Layout/Main";

function Document() {
  const {
    query: { documentShortId },
  } = useRouter();

  return (
    <>
      <Navigation>
        <Navigation.SketchLogo />
        <Navigation.Divider />
        <Navigation.Breadcrumb>{documentShortId}</Navigation.Breadcrumb>
      </Navigation>
      <Main>Hello</Main>
    </>
  );
}

export { Document };
