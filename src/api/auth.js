import ApiService from '../services/ApiService'

// 登陆接口
export async function login(data) {
    try {
        const response = await ApiService({
            method: 'post',
            url: '/login',
            data
        });
        return response.data;
    } catch
        (error) {
        console.error('Login failed:', error);
        throw error
    }
}

// 注册接口
export function register(userInfo) {
    return ApiService({
        method: 'post',
        url: '/register',
        userInfo
    }).catch(error => {
        console.error('Register failed:', error);
        throw error
    })
}

// 登出接口
export function logout() {
    return ApiService({
        method: 'get',
        url: '/logout'
    }).catch(error => {
        console.log('Logout failed:', error);
        throw error
    })
}