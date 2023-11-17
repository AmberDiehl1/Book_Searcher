import { gql } from '@apollo/client';
export const QUERY_USER = gql`
Query Query {
  me {
    _id
    username
    email
    password
    savedBooks {
      authors
      description
      bookId
      image
      link
      title
    }
  }
}`