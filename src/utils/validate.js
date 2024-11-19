export function nameRule(rule, value, callback) {
    let reg = /^[a-zA-Z0-9_-]{4,16}$/
    if (value === '') {
        callback(new Error('请输入用户名'))
    } else if (!reg.test(value)) {
        callback(new Error('请输入4-10位字符的用户名'))
    } else {
        callback()
    }
}

export function passRule(rule, value, callback) {
    let pass = /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/
    if (value === '') {
        callback(new Error('请输入密码'))
    } else if (!pass.test(value)) {
        callback(new Error('6-12位密码需要包含大小写字母和数字特殊字符'))
    } else {
        callback()
    }
}