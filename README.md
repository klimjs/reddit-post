# Reddit Post App

POC covering the main functionality of allowing users to post on Reddit into a specific community.

## Tech stack

The goal is to align the stack with the one [Buffer](https://buffer.com) has as an idea came up exploring [Buffer suggestions board](https://suggestions.buffer.com).

[TanStack Start](https://tanstack.com/start/latest) is used as a full stack react framework because of 2 reasons:

- client-side first (one `graphql` endpoint is needed only on the backend)
- exploring some new fancy stuff just for fun

### Frontend

- React (TS)
- Apollo Client
- Radix UI with CSS modules

### Backend

- GraphQL with Apollo
- MongoDB
