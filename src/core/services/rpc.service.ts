import axios from 'axios'
import RpcErrorCodesEnum from '@/core/enums/rpc-error-codes.enum'
import RpcInvalidParamsError from '@/core/errors/rpc-invalid-params.error'

interface ErrorType<E = any|undefined> {
  code: number,
  message: string,
  data: any
}

interface ResponseType {
  result: any,
  error: ErrorType|undefined
}

const request = async (method: string, params: object|undefined = undefined) => {
  const { data } =  await axios.post<ResponseType>('api/rpc', { method, params })

  if (data.error !== undefined) {
    if (data.error.code === RpcErrorCodesEnum.INVALID_PARAMS) {
      throw new RpcInvalidParamsError(data.error.data)
    }

    throw Error(data.error.message)
  }

  return data
}

const RpcService = {
  request
}

export default RpcService
