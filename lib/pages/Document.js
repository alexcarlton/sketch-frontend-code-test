import { useRouter } from "next/router";

function Document() {
  const {
    query: { documentShortId },
  } = useRouter();

  return <p>{documentShortId}</p>;
}

export { Document };
