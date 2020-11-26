import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { Navigation } from "../components/Layout/Navigation/Navigation";
import { Main } from "../components/Layout/Main";
import { ArtboardList } from "../components/ArtboardList/ArtboardList";
import { GET_DOCUMENT } from "../gql/queries/getDocumentQuery";
import { ArtboardListItem } from "../components/ArtboardList/ArtboardListItem";

function Document() {
  const {
    query: { documentShortId },
  } = useRouter();

  const { loading, error, data } = useQuery(GET_DOCUMENT, {
    variables: { shortId: documentShortId },
  });

  if (error) {
    return <p>Whoops, something went wrong 😭</p>;
  }

  return (
    <>
      <Navigation>
        <Navigation.SketchLogo />
        <Navigation.Divider />
        <Navigation.Breadcrumb>
          {loading ? "" : data.share.version.document.name}
        </Navigation.Breadcrumb>
      </Navigation>
      <Main>
        <ArtboardList>
          {data?.share.version.document.artboards.entries.map(
            (artboard, index) => (
              <ArtboardListItem
                key={artboard.name}
                artboard={artboard}
                index={index}
              />
            )
          )}
        </ArtboardList>
      </Main>
    </>
  );
}

export { Document };
