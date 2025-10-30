# Reddit Post App

POC covering the main functionality of allowing users to post on Reddit into a specific community.

## Tech stack

The goal is to align the stack with the one [Buffer](https://buffer.com) has as an idea came up exploring [Buffer suggestions board](https://suggestions.buffer.com).

Next.js is used as a full stack react framework because of 2 reasons:

- well-maintained apollo server package [apollo-server-integration-next](https://github.com/apollo-server-integrations/apollo-server-integration-next)
- having a single Vercel deployment without any additional complexity

### Frontend

- React (TS)
- Apollo Client
- Radix UI with CSS modules

### Backend

- GraphQL with Apollo
- MongoDB
