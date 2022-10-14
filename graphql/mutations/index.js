import gql from 'graphql-tag'

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`

const ADD_RECORD = gql`
  mutation add_medical_record(
    $investigations: [ID!]!
    $ctscan: String!
    $mri: String!
    $developer: String!
  ) {
    add_medical_record(
      investigations: $investigations
      ctscan: $ctscan
      mri: $mri
      developer: $developer
    ) {
      id
      patient {
        id
        email
      }
      ctscan
      mri
      investigations {
        id
        title
      }
      created_at
    }
  }
`

export {LOGIN, ADD_RECORD}
