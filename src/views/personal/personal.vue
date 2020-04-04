<template>
    <div class="personal">
      <div class="p_img"><img src="../../assets/img/p_img.jpg" height="200" width="100%"/></div>
      <div class="p_centent">
        <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="主页" name="first">
          <el-card class="box-card">

            <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
        </el-tab-pane>
        <el-tab-pane label="收藏" name="second"><el-card class="box-card">

          <div class="text item">
            <el-table
              ref="table"
              :header-cell-style="{'text-align':'center'}"
              :cell-style="{'text-align':'center'}"
              :data="tableData"
              style="width: 100%"
              @row-click="openCoures"
            >
              <el-table-column width="210">
                <template slot-scope="scope">

                  <img :src="scope.row.img" width="200" height="130" class="head_pic"/>
                  　　　　
                  　　
                </template>
              </el-table-column>
              <el-table-column
                prop="coursename"
                label="课程名称"
                width="180">
              </el-table-column>
              <el-table-column
                prop="description"
                label="课程简介"
                width="200">
              </el-table-column>
              <el-table-column
                prop="cursename"
                label="类型"
                width="110">
              </el-table-column>

              <el-table-column
                prop="username"
                label="发布者">
              </el-table-column>
              <el-table-column
                fixed="right"
                label="操作"
                width="120">
                <template slot-scope="scope">
                  <el-button
                    @click.native.prevent="deleteRow(scope.$index, tableData)"
                    type="text"
                    size="small">
                    取消收藏
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card></el-tab-pane>
        <el-tab-pane label="我的课程" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="设置" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs></div>

    </div>
</template>

<script>
    export default {
        name: "personal",
        data() {
            return {
                activeName: 'first',
                tableData: [{
                    img: '/img/login-bg.0899ffa6.jpg',
                    coursename: 'Vue.js',
                    description: '2019年最全最新Vue、Vuejs教程，从入门到精通',
                    cursename: 'IT',

                    username: "张老师"

                }, {
                    img: '/img/login-bg.0899ffa6.jpg',
                    coursename: 'Vue.js',
                    description: '2019年最全最新Vue、Vuejs教程，从入门到精通',
                    cursename: 'IT',

                    username: "张老师"

                },
                    {
                        img: '/img/login-bg.0899ffa6.jpg',
                        coursename: 'Vue.js',
                        description: '2019年最全最新Vue、Vuejs教程，从入门到精通',
                        cursename: 'IT',

                        username: "张老师"

                    },
                    {
                        img: '/img/login-bg.0899ffa6.jpg',
                        coursename: 'Vue.js',
                        description: '2019年最全最新Vue、Vuejs教程，从入门到精通',
                        cursename: 'IT',

                        username: "张老师"

                    },
                ]
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            },
            deleteRow(index, rows) {
                rows.splice(index, 1);
            }
        }
    }
</script>

<style>
  .personal {
    width: 100%;
    margin: 0 auto;

  }
  .p_img{
    width: 100%;
  }
  .p_centent{
    width: 70%;
    margin: 0 auto;

  }
  .el-tabs__item{
    font-size: 25px !important;
  }

  .text {
    font-size: 14px;

  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 99%;
    height: 100%;
  }
</style>
