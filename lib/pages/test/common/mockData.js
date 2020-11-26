const mockShortId = "Y8wDM";

const mockDocumentName = "First document";

const mockGetDocumentResponse = {
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
            {
              name: "Artboard 3",
              isArtboard: true,
              files: [
                {
                  url: "https://images.com/artboard-3-url",
                  height: 10,
                  width: 10,
                  scale: 1,
                  thumbnails: [
                    {
                      url: "https://images.com/artboard-3-thumbnail-url",
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
export { mockGetDocumentResponse, mockShortId, mockDocumentName };
