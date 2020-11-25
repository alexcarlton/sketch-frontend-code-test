import { useRouter } from "next/router";
import { Header } from "../components/Layout/Header";
import { Main } from "../components/Layout/Main";

function Document() {
  const {
    query: { documentShortId },
  } = useRouter();

  return (
    <>
      <Header>
        <h1>{documentShortId}</h1>
      </Header>
      <Main>Hello</Main>
    </>
  );
}

export { Document };
