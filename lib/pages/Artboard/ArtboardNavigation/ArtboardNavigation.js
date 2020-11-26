import Link from "next/link";
import styled from "styled-components";
import { Navigation } from "../../../components/Layout/Navigation/Navigation";
import { useRouter } from "next/router";

const ArtboardCountText = styled.p`
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ theme }) => theme.colors.darkGrey};
`;

const ArrowImage = styled.img`
  padding: 0 1rem;
`;

const SlashImage = styled.img`
  padding: 0 0.5rem;
`;

function ArtboardNavigation({ numberOfArtboards }) {
  const {
    query: { artboardIndex, documentShortId },
  } = useRouter();

  const documentUrl = `/documents/${documentShortId}`;

  const parsedArtboardIndex = parseInt(artboardIndex);
  const isFirst = parsedArtboardIndex === 0;
  const isLast = parsedArtboardIndex + 1 === numberOfArtboards;

  return (
    <>
      <Link href={documentUrl}>
        <a>
          <img src="/close.svg" alt="Back to document view" />
        </a>
      </Link>

      <Navigation.Divider />

      {!isFirst && (
        <Link href={`${documentUrl}/artboards/${parseInt(artboardIndex) - 1}`}>
          <a>
            <ArrowImage src="/arrow-left.svg" alt="View previous artboard" />
          </a>
        </Link>
      )}

      <ArtboardCountText>{parsedArtboardIndex + 1}</ArtboardCountText>
      <SlashImage src="/breadcrumb.svg" />
      <ArtboardCountText>{numberOfArtboards}</ArtboardCountText>

      {!isLast && (
        <Link href={`${documentUrl}/artboards/${parseInt(artboardIndex) + 1}`}>
          <a>
            <ArrowImage src="/arrow-right.svg" alt="View next artboard" />
          </a>
        </Link>
      )}
    </>
  );
}

export { ArtboardNavigation };
