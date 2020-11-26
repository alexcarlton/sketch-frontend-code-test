import * as nextRouter from "next/router";
import { render, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { Document } from "../Document";
import { GET_DOCUMENT } from "../../gql/queries/getDocumentQuery";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";

const mockShortId = "Y8wDM";
const mockDocumentName = "First document";

const getDocumentResponse = {
  share: {
    shortId: mockShortId,
    version: {
      document: {
        name: mockDocumentName,
        artboards: {
          entries: [
            {
              name: "Artboard 1",
              isArtboard: true,
              files: [
                {
                  url: "https://images.com/artboard-1-url",
                  height: 10,
                  width: 10,
                  scale: 1,
                  thumbnails: [
                    {
                      url: "https://images.com/artboard-1-thumbnail-url",
                      height: 10,
                      width: 10,
                    },
                  ],
                },
              ],
            },
            {
              name: "Artboard 2",
              isArtboard: true,
              files: [
                {
                  url: "https://images.com/artboard-2-url",
                  height: 10,
                  width: 10,
                  scale: 1,
                  thumbnails: [
                    {
                      url: "https://images.com/artboard-2-thumbnail-url",
                      height: 10,
                      width: 10,
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    },
  },
};

describe("Document Page", () => {
  beforeEach(() => {
    jest.spyOn(nextRouter, "useRouter").mockImplementation(() => {
      return {
        query: {
          documentShortId: mockShortId,
        },
      };
    });
  });

  it("should load the document name", async () => {
    const gqlMocks = [
      {
        request: {
          query: GET_DOCUMENT,
          variables: {
            shortId: mockShortId,
          },
        },
        result: {
          data: getDocumentResponse,
        },
      },
    ];

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <MockedProvider mocks={gqlMocks} addTypename={false}>
          <Document />
        </MockedProvider>
      </ThemeProvider>
    );

    await waitFor(() => getByText(mockDocumentName));
  });

  it("should display artboards", async () => {
    const gqlMocks = [
      {
        request: {
          query: GET_DOCUMENT,
          variables: {
            shortId: mockShortId,
          },
        },
        result: {
          data: getDocumentResponse,
        },
      },
    ];

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <MockedProvider mocks={gqlMocks} addTypename={false}>
          <Document />
        </MockedProvider>
      </ThemeProvider>
    );

    await waitFor(() => [getByText("Artboard 1"), getByText("Artboard 2")]);
  });

  it("should display an error message if the GraphQL endpoint fails", async () => {
    const gqlMocks = [
      {
        request: {
          query: GET_DOCUMENT,
          variables: {
            shortId: mockShortId,
          },
        },
        error: new Error("Something went wrong"),
      },
    ];

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <MockedProvider mocks={gqlMocks} addTypename={false}>
          <Document />
        </MockedProvider>
      </ThemeProvider>
    );

    await waitFor(() => getByText("Whoops, something went wrong 😭"));
  });
});
