import { useRouter } from "next/router";
import { Header } from "../components/Layout/Header";

function Document() {
  const {
    query: { documentShortId },
  } = useRouter();

  return (
    <Header>
      <h1>{documentShortId}</h1>
    </Header>
  );
}

export { Document };
