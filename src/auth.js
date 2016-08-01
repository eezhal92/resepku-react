export default function makeAuth(accountsState) {
  return {
    isLoggedIn: () => {
      return accountsState.loggedIn
    },
    token: () => {
      return accountsState.token
    }
  }
}
