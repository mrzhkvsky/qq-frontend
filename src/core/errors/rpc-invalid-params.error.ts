import InvalidParamType from '@/core/types/invalid-param.type'

class RpcInvalidParamsError extends Error {
  public errors: InvalidParamType[]
  constructor(errors: InvalidParamType[]) {
    super()

    this.errors = errors
  }
}

export default RpcInvalidParamsError
