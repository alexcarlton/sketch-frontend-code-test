## Getting Started
### Prerequisites
- Node
- NPM

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
## Framework

The project has been bootstrapped with the React framework [Next.js](https://nextjs.org/).

I am a big fan of this framework for a few reasons:
- Zero config to deployment (As a result, here is the deployed version https://sketch-frontend-code-test.vercel.app/)
- Opinionated
- Server side rendering capabilities
## Formatting

The project is formatted with prettier on pre-commit, using:
- [husky](https://github.com/typicode/husky#readme) to hook into the pre-commit hook
- [lint-staged](https://github.com/okonet/lint-staged) to run linters against staged files
- [prettier](https://github.com/prettier/prettier) to format the code
## Testing
The project uses [jest](https://jestjs.io/) as a test runner, and [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/) for testing React components.

I follow Kent C. Dodds' recommendations for testing, which are:
- [Write tests. Not too many. Mostly integration.](https://kentcdodds.com/blog/write-tests)
- [Avoid testing implementation details](https://kentcdodds.com/blog/testing-implementation-details)
- Test as close to user use as possible

These concepts allow us to write tests that give us confidence that our application works as expected, and are not susceptible to becoming brittle.

The tests in this project are setup to run on pre-push, in lieu of CI setup.
