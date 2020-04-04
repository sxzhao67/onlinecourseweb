<template>
  <div id="nav-bar">


    <div class="left" @click="itemClick">
      <slot name="left">
        <el-link :underline="false" type="default"><i class="el-icon-s-platform"></i>在线课程</el-link>
      </slot>
    </div>
    <div class="center">
      <slot name="center">
        <el-input placeholder="请输入内容" v-model="input" class="input-with-select" style="width: 450px">

          <el-button slot="append" icon="el-icon-search" @click="itemClick2"></el-button>
        </el-input>
      </slot>
    </div>
    <div class="right">
      <slot name="right">

        <el-link :underline="false" type="default" @click="itemClick3">登录</el-link><i class="el-icon-loading"></i>
        <el-link :underline="false" type="default" @click="itemClick4">注册</el-link>
      </slot>
    </div>


  </div>
</template>

<script>
    export default {
        name: "TabBar",

        data() {
            return {
                input: '',
                path: "/home",
                path2: "/querycourse",
                path3: "/login",
                path4:"/personal"



            }
        },
        methods: {
            itemClick() {

                this.$router.replace(this.path)


            },
            itemClick2() {
                this.$router.replace(this.path2)

            },
            itemClick3() {
                this.$router.replace(this.path3)


            },
            itemClick4() {
                this.$router.replace(this.path4)


            }
        }
    }
</script>

<style scoped>
  #nav-bar {
    display: flex;

    line-height: 60px;
    background-color: #B3C0D1;
    text-align: center;
  }

  .left, .right {
    width: 300px;


  }

  .center {
    flex: 1;
    text-align: center;
  }
.el-link{
  font-size: 20px;
}

</style>
