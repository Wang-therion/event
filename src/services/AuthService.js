// 处理用户认证相关的逻辑，例如登陆注册、登出等
import api from '@/api'
import TokenService from "@/services/TokenService";

const AuthService = {
    async login(credentials) {
        try {
            const response = await api.auth.login(credentials)
            console.log(response)
            const token = response.token
            TokenService.setToken('authToken', token)
            return response
        } catch (error) {
            console.error("Login failed:", error)
            throw error
        }
    },

    async register(userInfo) {
        try {
            const response = await api.auth.register(userInfo)
            return response.data
        } catch (error) {
            console.error("Register failed:", error)
            throw error
        }
    },

    async logout() {
        try {
            const response = await api.auth.logout()
            return response.data
        } catch (error) {
            console.error('Logout failed:', error)
            throw error
        }
    }

}

export default AuthService