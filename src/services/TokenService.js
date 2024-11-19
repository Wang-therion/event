class TokenService {

    // 设置token
    static setToken(tokenKey, token) {
        try {
            localStorage.setItem(tokenKey, token)
        } catch (error) {
            console.error("Failed to set token:", error)
        }
    }

    // 获取token
    static getToken(tokenKey) {
        try {
            return localStorage.getItem(tokenKey)
        } catch (error) {
            console.error("Failed to get token:", error)
            return null;
        }
    }

    // 移除token
    static removeToken(tokenKey) {
        try {
            localStorage.removeItem(tokenKey)
        } catch (error) {
            console.error("Failed to remove token:", error)
        }
    }
}

export default TokenService