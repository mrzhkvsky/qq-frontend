class HttpError extends Error {
  public response: any

  constructor(response: any) {
    super('Http client error')

    this.response = response
  }
}

export default HttpError
