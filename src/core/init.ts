import authService from '@/modules/auth/services/auth.service'

const init = async () => {
    try {
        await authService.fetchToken()
        await authService.fetchUser()
    } catch (e) {
        await authService.logout()
    }
}

export default init
