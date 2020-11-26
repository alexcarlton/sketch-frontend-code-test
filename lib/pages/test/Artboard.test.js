import * as nextRouter from "next/router";
import { render, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { Artboard } from "../Artboard";
import { GET_DOCUMENT } from "../../gql/queries/getDocumentQuery";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import { mockGetDocumentResponse, mockShortId } from "./common/mockData";

const mockArtboardIndex = 1;

describe("Artboard Page", () => {
  beforeEach(() => {
    jest.spyOn(nextRouter, "useRouter").mockImplementation(() => {
      return {
        query: {
          documentShortId: mockShortId,
          artboardIndex: mockArtboardIndex,
        },
      };
    });
  });

  // it("should load the artboard name", async () => {
  //   const gqlMocks = [
  //     {
  //       request: {
  //         query: GET_DOCUMENT,
  //         variables: {
  //           shortId: mockShortId,
  //         },
  //       },
  //       result: {
  //         data: getDocumentResponse,
  //       },
  //     },
  //   ];
  //
  //   const { getByText } = render(
  //     <ThemeProvider theme={theme}>
  //       <MockedProvider mocks={gqlMocks} addTypename={false}>
  //         <Artboard />
  //       </MockedProvider>
  //     </ThemeProvider>
  //   );
  //
  //   await waitFor(() => getByText('Artboard 1'));
  // });

  it("should allow you to go back to the document view", async () => {
    const gqlMocks = [
      {
        request: {
          query: GET_DOCUMENT,
          variables: {
            shortId: mockShortId,
          },
        },
        result: {
          data: mockGetDocumentResponse,
        },
      },
    ];

    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <MockedProvider mocks={gqlMocks} addTypename={false}>
          <Artboard />
        </MockedProvider>
      </ThemeProvider>
    );

    getByRole("link", { name: "Back to document view" });
  });

  it("should allow you to view the next and previous artboards", async () => {
    const gqlMocks = [
      {
        request: {
          query: GET_DOCUMENT,
          variables: {
            shortId: mockShortId,
          },
        },
        result: {
          data: mockGetDocumentResponse,
        },
      },
    ];

    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <MockedProvider mocks={gqlMocks} addTypename={false}>
          <Artboard />
        </MockedProvider>
      </ThemeProvider>
    );

    getByRole("link", { name: "View previous artboard" });
    getByRole("link", { name: "View next artboard" });
  });

  it("should display the index of the artboard and the total artboards in the document", async () => {
    const gqlMocks = [
      {
        request: {
          query: GET_DOCUMENT,
          variables: {
            shortId: mockShortId,
          },
        },
        result: {
          data: mockGetDocumentResponse,
        },
      },
    ];

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <MockedProvider mocks={gqlMocks} addTypename={false}>
          <Artboard />
        </MockedProvider>
      </ThemeProvider>
    );

    await waitFor(() => [getByText("2"), getByText("3")]);
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
          <Artboard />
        </MockedProvider>
      </ThemeProvider>
    );

    await waitFor(() => getByText("Whoops, something went wrong 😭"));
  });
});
