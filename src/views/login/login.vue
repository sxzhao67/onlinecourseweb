<template>
  <div id="login">
    <el-form :model="loginForm" :rules="rules" ref="loginForm" class="demo-loginForm">
      <h2>用户登录|在线课程</h2>
      <el-form-item prop="username">
        <el-input v-model="loginForm.username" placeholder="请输入用户名/手机号"></el-input>
      </el-form-item>

      <el-form-item  prop="pwd">
        <el-input type="password" v-model="loginForm.pwd" placeholder="请输入密码" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>


    export default {
        name: "login",
        data() {

            return {

                loginForm: {
                    username: '',
                    pwd: '',
                },
                rules:{

                    username:[
                        {required: true, message: '请输入用户名', trigger: 'blur'},
                        { min: 1, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
                    ],
                    pwd:[
                        {required: true, message: '请输入密码', trigger: 'blur'},
                    ]
                }

            };
        },

        methods: {
            submitForm(formName) {
                const _this =this

                this.$refs[formName].validate((valid) => {
                    if (valid) {

                        axios.post('http://localhost:8181/TUserController/selectById',_this.loginForm).then(function (resp){
                            console.log(resp)
                        })

                    } else {
                        return false;
                    }
                });
            },

        }

    }
</script>

<style scoped>
  .el-input {
    width:300px;
  }
  .el-form{
    display:inline-block;

  }
  #login{
    width:100%;
    text-align: center;
    margin-top: 100px;

  }


</style>
