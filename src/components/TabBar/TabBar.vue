<template>
  <div id="nav-bar">

    <el-header>


      <el-row>
        <el-col :span="5" style="text-align: right">
          <el-link :underline="false" type="default" @click="itemClick" style="font-size: 25px">在线课程</el-link>

        </el-col>
        <el-col :span="14">
          <div class="grid-content bg-purple-light">
            <el-input placeholder="请输入内容" v-model="input" class="input-with-select" style="width: 450px">

              <el-button slot="append" icon="el-icon-search" @click="itemClick2"></el-button>
            </el-input>
          </div>
        </el-col>
        <el-col :span="5" style="text-align: left">
          <el-link :underline="false" type="default" @click="itemClick3">登录</el-link>


        </el-col>
      </el-row>


    </el-header>
  </div>
</template>

<script>
    export default {
        name: "TabBar",

        data(){
            return{
                input:'',
                path:"/home",
                path2:"/querycourse",
                path3:"/personal"
            }
        },
        methods:{
            itemClick(){

                this.$router.replace(this.path)

            },
            itemClick2(){
                this.$router.replace(this.path2)
            },
            itemClick3(){
                this.$router.replace(this.path3)
            }
        }
    }
</script>

<style scoped>
  #nav-bar {

    height: 60px;
    line-height: 44px;
  }


  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }


</style>
