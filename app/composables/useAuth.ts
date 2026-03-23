// composables/useAuth.ts
export const useAuth = () => {
  const { signIn, signUp, signOut, user, isAuthenticated, fetchUser } = useSanctumAuth()

  return {
    login: signIn,
    register: signUp,
    logout: signOut,
    user,
    isLoggedIn: isAuthenticated,
    refreshUser: fetchUser
  }
}
