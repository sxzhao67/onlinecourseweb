<template>
  <div class="hot">
    <div class="hottitle"><i class="el-icon-star-off"></i>最新课程</div>
    <div>
      <el-table
        ref="table"
        :header-cell-style="{'text-align':'center'}"
        :cell-style="{'text-align':'center'}"
        :data="tableData"
        style="width: 100%"
        :row-class-name="tableRowClassName">
        <el-table-column width="310">
          <template slot-scope="scope">
            <a :href="'http://'+scope.row.Address"
               target="_blank"
               class="buttonText"><img :src="scope.row.img" width="300" height="170" class="head_pic"/></a>
            　　　　
            　　
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
          prop="like_couynt"
          label="学习人数"
          width="100">
        </el-table-column>
        <el-table-column
          prop="username"
          label="发布者">
        </el-table-column>
      </el-table>
    </div>
  </div>

</template>

<script>
    export default {
        name: "NewCourse",
        methods: {
            tableRowClassName({row, rowIndex}) {
                if (rowIndex === 1) {
                    return 'warning-row';
                } else if (rowIndex === 3) {
                    return 'success-row';
                }
                return '';
            }
        },
        data() {
            return {
                tableData: [{
                    img: '/img/login-bg.0899ffa6.jpg',
                    coursename: 'Vue.js',
                    description: '2019年最全最新Vue、Vuejs教程，从入门到精通',
                    cursename: 'IT',
                    like_couynt: "666人",
                    username: "张老师"

                }, {
                    img: '/img/login-bg.0899ffa6.jpg',
                    coursename: 'Vue.js',
                    description: '2019年最全最新Vue、Vuejs教程，从入门到精通',
                    cursename: 'IT',
                    like_couynt: "666人",
                    username: "张老师"

                },
                    {
                        img: '/img/login-bg.0899ffa6.jpg',
                        coursename: 'Vue.js',
                        description: '2019年最全最新Vue、Vuejs教程，从入门到精通',
                        cursename: 'IT',
                        like_couynt: "666人",
                        username: "张老师"

                    },
                    {
                        img: '/img/login-bg.0899ffa6.jpg',
                        coursename: 'Vue.js',
                        description: '2019年最全最新Vue、Vuejs教程，从入门到精通',
                        cursename: 'IT',
                        like_couynt: "666人",
                        username: "张老师"

                    },
                ]
            }
        }

    }

</script>

<style scoped>
  .hottitle{

  }
  .hot {
    width: 1000px;
    margin: 0 auto;
    font-size: 25px;
    margin-top: 10px;

  }

  .el-table .warning-row {
    background: oldlace;

  }

  .el-table .success-row {
    background: #f0f9eb;
  }

</style>
