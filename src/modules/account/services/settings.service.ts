import RpcService from '@/core/services/rpc.service'

const updatePassword = async (currentPassword: string, newPassword: string, confirmPassword: string) => {
  return await RpcService.request('account.changePassword', { currentPassword, newPassword, confirmPassword })
}

const SettingsService = {
  updatePassword
}

export default SettingsService
