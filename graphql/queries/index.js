import gql from 'graphql-tag'

const GET_LISTS = gql`
  query {
    investigation_types {
      id
      title
      investigations {
        id
        title
      }
    }
  }
`

const ME = gql`
  query {
    me {
      id
      email
      name
      records {
        id
        investigations {
          id
          title
        }
        mri
        ctscan
        created_at
      }
    }
  }
`

export { GET_LISTS, ME }
