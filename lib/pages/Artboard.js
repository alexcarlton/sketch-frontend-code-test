import styled from "styled-components";
import { Navigation } from "../components/Layout/Navigation/Navigation";
import { Main } from "../components/Layout/Main";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { GET_DOCUMENT } from "../gql/queries/getDocumentQuery";
import { ArtboardNavigation } from "../components/ArtboardNavigation/ArtboardNavigation";

const ArtboardTitle = styled(Navigation.Title)`
  flex: 0 1 auto;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

function Artboard() {
  const {
    query: { documentShortId, artboardIndex },
  } = useRouter();

  const { error, data } = useQuery(GET_DOCUMENT, {
    variables: { shortId: documentShortId },
  });

  const artboards = data?.share.version.document.artboards.entries;

  const numberOfArtboards = artboards?.length;

  const artboard = artboards ? artboards[artboardIndex] : [];

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
        <ArtboardTitle>{artboard.name}</ArtboardTitle>
      </Navigation>
      <Main></Main>
    </>
  );
}

export { Artboard };