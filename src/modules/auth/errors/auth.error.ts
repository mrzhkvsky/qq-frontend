class AuthError extends Error {
  constructor(message: string = 'Authentication error') {
    super();
  }
}

export default AuthError
