import axios from 'axios'
import router from '@/plugins/router'
import RpcErrorCodesEnum from '@/core/enums/rpc-error-codes.enum'

interface ErrorType {
  code: number,
  message: string,
  data: any|undefined
}

interface ResponseType {
  result: any,
  error: ErrorType|undefined
}

const request = async (method: string, params: object|undefined = undefined) => {
  const { data } =  await axios.post<ResponseType>('api/rpc', { method, params })

  if (data.error !== undefined) {
    if (data.error.code === RpcErrorCodesEnum.AUTHENTICATION_FAILED) {
      return Promise.reject(router.push({ name: 'auth-login' }))
    }

    if (data.error.code === RpcErrorCodesEnum.SERVER_ERROR) {
      new Error(data.error.message)
    }

    if (data.error.code === RpcErrorCodesEnum.PARSE_ERROR) {
      new Error(data.error.message)
    }

    if (data.error.code === RpcErrorCodesEnum.METHOD_NOT_FOUND) {
      new Error(data.error.message)
    }

    if (data.error.code === RpcErrorCodesEnum.INVALID_REQUEST) {
      new Error(data.error.message)
    }
  }

  return data
}

const RpcService = {
  request
}

export default RpcService
