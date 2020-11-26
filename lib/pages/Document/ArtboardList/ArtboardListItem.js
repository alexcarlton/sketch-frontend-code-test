import Link from "next/link";
import styled from "styled-components";
import { useRouter } from "next/router";

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 300px;
  margin: 1rem;
`;

const ItemThumbnailContainer = styled.div`
  height: 350px;
  width: 300px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ItemThumbnail = styled.img`
  max-height: 350px;
  width: auto;
`;

const ItemTextContainer = styled.div`
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ItemText = styled.p`
  font-family: ${({ theme }) => theme.fontFamily};

  color: black;
`;

const ArtboardLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

function ArtboardListItem({ artboard: { name, files }, index }) {
  const thumbnail = files[0].thumbnails[0];

  const {
    query: { documentShortId },
  } = useRouter();

  return (
    <Link href={`/documents/${documentShortId}/artboards/${index}`}>
      <ArtboardLink>
        <ItemContainer>
          <ItemThumbnailContainer>
            <ItemThumbnail
              src={thumbnail.url}
              height={thumbnail.height}
              width={thumbnail.width}
              alt={name}
            />
          </ItemThumbnailContainer>
          <ItemTextContainer>
            <ItemText>{name}</ItemText>
          </ItemTextContainer>
        </ItemContainer>
      </ArtboardLink>
    </Link>
  );
}

export { ArtboardListItem };
