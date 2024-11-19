<template>
  <div class="login-container">

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>通后台登陆系统</span>
      </div>

      <el-form :model="form"
               ref="form"
               :rules="rules"
               @submit.native.prevent="handleLogin"
               :label-width="formLabelWidth">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" required></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password" required></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input type="password" v-model="form.confirmPassword" required></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleLogin('form')">登陆</el-button>
        </el-form-item>
        <el-alert v-if="errorMessage" title="错误" type="error" :closable="false">
          {{ errorMessage }}
        </el-alert>
        <div>
          <router-link to="/register">没有账户？点击这里注册</router-link>
        </div>
      </el-form>
    </el-card>
  </div>
</template>


<script>
import {nameRule, passRule} from '@/utils/validate'
import AuthService from "@/services/AuthService"

export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
        confirmPassword: ''
      },
      errorMessage: '',
      formLabelWidth: '80px',
      rules: {
        username: [
          {validator: nameRule, trigger: 'blur'}],
        password: [
          {validator: passRule, trigger: 'blur'}],
        confirmPassword: [
          {required: true, message: '请确认密码', trigger: 'blur'},
          {
            validator: (rule, value, callback) => {
              if (value !== this.form.password) {
                callback(new Error('两次输入的密码不一致'));
              } else {
                callback();
              }
            }, trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    handleLogin(form) {
      this.$refs[form].validate((valid => {
        if (valid) {
          console.log(this.form)
          AuthService.login(this.form).then(response => {
            if (response.status === "success") {
              this.$message({message: response.message, type: 'success'})
              this.$router.push('/home')
            }
          })
          /*          this.apiService.post('/login', this.form)
                        .then(response => {

                          console.log(response)
                        })*/
        } else {
          console.error(this.form)
        }
      }))
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.login-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
