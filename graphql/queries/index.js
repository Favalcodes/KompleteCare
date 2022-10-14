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

// const ME = gql`
//   query {
//     me {
//       id
//       email
//       records {
//         id
//         ctscan
//         mri
//         investigations {
//           id
//           title
//           data {
//             id
//             result
//           }
//         }
//       }
//     }
//   }
// `

export { GET_LISTS }
