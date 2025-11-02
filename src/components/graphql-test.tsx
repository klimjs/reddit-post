'use client'

import { gql } from '@apollo/client'
import { useQuery } from '@apollo/client/react'
import { Code } from '@radix-ui/themes'

interface FetchHelloData {
  hello: string
}

const FETCH_HELLO = gql`
  query Hello {
    hello
  }
`

export const GraphqlTest = () => {
  const { loading, error, data } = useQuery<FetchHelloData>(FETCH_HELLO)

  if (loading) return <Code variant="outline">Loading...</Code>
  if (error) return <Code color="crimson">Error : {error.message}</Code>

  return (
    <Code variant="outline">
      GraphqlTest component [FETCH_HELLO]: {data?.hello}
    </Code>
  )
}
