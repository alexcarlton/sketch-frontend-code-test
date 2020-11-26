import { Navigation } from "../components/Layout/Navigation/Navigation";
import { Main } from "../components/Layout/Main";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_DOCUMENT } from "../gql/queries/getDocumentQuery";
import { ArtboardNavigation } from "../components/ArtboardNavigation/ArtboardNavigation";

function Artboard() {
  const {
    query: { documentShortId, artboardIndex },
  } = useRouter();

  const { error, data } = useQuery(GET_DOCUMENT, {
    variables: { shortId: documentShortId },
  });

  const numberOfArtboards =
    data?.share.version.document.artboards.entries.length;

  if (error) {
    return <p>Whoops, something went wrong 😭</p>;
  }

  return (
    <>
      <Navigation>
        <ArtboardNavigation
          artboardIndex={parseInt(artboardIndex)}
          numberOfArtboards={numberOfArtboards}
        />
      </Navigation>
      <Main></Main>
    </>
  );
}

export { Artboard };
