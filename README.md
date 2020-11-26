## Getting Started
### Prerequisites
- Node
- NPM

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The app has been tested with Chrome, although it is unlikely to have issues in other browsers.
## Framework

The project has been bootstrapped with the React framework [Next.js](https://nextjs.org/).

I am a big fan of this framework for a few reasons:
- Zero config to deployment
- Opinionated
- Server side rendering capabilities

Although server side rendering is not used in this code test, you can server side capabilities being used in `/pages/index.js` where we redirect requests from `/` to `/documents/Y8wDM` 
## Routing
Next.JS uses a [filename routing system](https://nextjs.org/docs/routing/introduction)

The two routes in the app are `/documents/<SHORT_ID>` and `/documents/<SHORT_ID>/artboards/<ART_BOARD_INDEX>`, although you will not need to type these manually as `/` will redirect you to a document!

The app is driven by route data, so you can view the second document with the `shortId` `4W43q`.
## GraphQL
I have used the [Apollo](https://www.apollographql.com/) GraphQL client to fetch the document data.

The `shortId` for the requested document is ascertained from the URL, so changing it to any `shortId` will work!

The client requires some extra work to play nice with server side rendering, as can be seen in `/gql/client.js`.
## Styling
Styling for the project has been applied with [styled-components](https://styled-components.com/).
## Formatting and Linting

The project is formatted with prettier and linted with eslint on pre-commit, using:
- [husky](https://github.com/typicode/husky#readme) to hook into the pre-commit hook
- [lint-staged](https://github.com/okonet/lint-staged) to run linters against staged files
- [prettier](https://github.com/prettier/prettier) to format the code
- [eslint](https://eslint.org/) to lint the code

## Testing
The project uses [jest](https://jestjs.io/) as a test runner, and [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/) for testing React components.

I follow Kent C. Dodds' recommendations for testing, which are:
- [Write tests. Not too many. Mostly integration.](https://kentcdodds.com/blog/write-tests)
- [Avoid testing implementation details](https://kentcdodds.com/blog/testing-implementation-details)
- Test as close to user use as possible

These concepts allow us to write tests that give us confidence that our application works as expected, and are not susceptible to becoming brittle.

The tests in this project are setup to run on pre-push, in lieu of CI setup.

## Further Improvements
Below are a list of further improvements that I would have made to the app given more time:
- Browser testing (currently only tested on Chrome)
- Module alias resolution (who likes typing `../../../../../components/**` when you can type `~/components/**`?)
- Better error states, not just 😭 emojis!
- Improved loading states!
- Better tests: although they are fairly comprehensive, they do not cover all key interactions (particularly on the Document page) 
- Accessibility improvements
- Kill small amount of layout shift (`<ArtboardNavigation />` I'm looking at you 👀)
- The `<ArtboardNavigation />` component could be better composed by being split up

Finally, I would have liked to have fixed the CORS issue on the production deployment! I didn't have time to fix this, but it would have been great to show it off. Oh well, at least you [get to see the error state in action](https://sketch-frontend-code-test.vercel.app/)
