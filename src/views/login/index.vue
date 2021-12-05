<template>
  <div id="login">
    <a-form-model
      ref="loginForm"
      :model="loginForm"
      :rules="rules"
      v-bind="layout"
      class="login-form"
    >
      <a-form-model-item has-feedback prop="user">
        <a-input
          v-model="loginForm.user"
          autocomplete="off"
          placeholder="请输入用户名"
          size="large"
        >
          <a-icon slot="prefix" type="user" />
        </a-input>
      </a-form-model-item>
      <a-form-model-item has-feedback prop="pass">
        <a-input
          v-model="loginForm.pass"
          type="password"
          autocomplete="off"
          placeholder="请输入密码"
          size="large"
        >
          <a-icon slot="prefix" type="lock" />
        </a-input>
      </a-form-model-item>
      <a-form-model-item>
        <a-button
          type="primary"
          @click="submitForm('loginForm')"
          style="width: 100%"
        >
          登录
        </a-button>
      </a-form-model-item>
    </a-form-model>

    <span class="copyright">Copyright© 广州市科信软件开发有限公司版权所有</span>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
import routeList from '@/router/router-mock'
// import jsEncrypt from 'jsencrypt'
import Cookies from 'js-cookie'
import { encryptPublicKey } from '@/static/js/constants'
export default {
  data() {
    return {
      loginForm: {
        user: '',
        pass: ''
      },
      rules: {
        user: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        pass: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      },
      layout: {
        wrapperCol: { span: 24 }
      }
    }
  },
  computed: {
    ...mapState('menu', ['currMenu'])
  },
  methods: {
    ...mapMutations('menu', ['setAllMenuList']),
    // 提交登录表单，发起登录
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // const encrypt = new jsEncrypt()
          // encrypt.setPublicKey(encryptPublicKey)
          // const data = encrypt.encrypt(JSON.stringify(this.loginForm))
          this.setAllMenuList(routeList)
          Cookies.set('cookie', encryptPublicKey)
          setTimeout(() => {
            this.$router.push(this.currMenu.path || '/index')
          }, 1000)
          // this.$api('login', data).then((res) => {
          //   if (res.data.code === 200) {
          //     Cookies.set('cookie', encryptPublicKey)
          //     // 登录之后需要带出路由参数信息
          //     this.setAllMenuList(routeList)
          //     setTimeout(() => {
          //       this.$router.push('/index')
          //     }, 1000)
          //   }
          // })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
#login {
  background: #f0f2f5;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  .login-form {
    width: 300px;
    height: 600px;
  }
  .copyright {
    height: 30px;
  }
}
</style>
