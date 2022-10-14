import { ME } from '~/graphql/queries'

export default async function ({ app, redirect }) {
  const hasToken = !!app.$apolloHelpers.getToken()
  if (!hasToken) {
    return redirect('/')
  } else {
    try {
      const {
        data: { me },
      } = await app.apolloProvider.defaultClient.query({
        query: ME,
      })
      if (!Object.keys(me).length) {
        return redirect('/')
      }
    } catch (e) {
      try {
        await app.$apolloHelpers.onLogout()
        return redirect('/')
      } catch (e) {
        console.error(e)
      }
    }
  }
}
