import { gql } from "@apollo/client";

const GET_DOCUMENT = gql`
  query getDocument($shortId: String!) {
    share(shortId: $shortId) {
      shortId
      version {
        document {
          name
          artboards {
            entries {
              name
              isArtboard
              files {
                url
                height
                width
                scale
                thumbnails {
                  url
                  height
                  width
                }
              }
            }
          }
        }
      }
    }
  }
`;

export { GET_DOCUMENT };
