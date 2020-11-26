import * as nextRouter from "next/router";
import { render, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { Document } from "../Document/Document";
import { GET_DOCUMENT } from "../../gql/queries/getDocumentQuery";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import {
  mockGetDocumentResponse,
  mockDocumentName,
  mockShortId,
} from "./common/mockData";

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

  afterEach(() => {
    jest.restoreAllMocks();
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
          data: mockGetDocumentResponse,
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
          data: mockGetDocumentResponse,
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
