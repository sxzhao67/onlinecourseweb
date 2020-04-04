<template>
  <div class="course">
    <div class="c_title">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="float: left;"><i class="el-icon-s-platform" style="font-size: 22px">vue.js</i></span>
          <span style="float: right;"><i class="el-icon-s-custom" style="font-size: 22px">张老师</i></span>
        </div>

      </el-card>

    </div>
    <div class="c_video">
      <div class="c_video_content">
        <video

          id="myVideo"
          class="video-js"
        >
          <source
            src="../../assets/video/何庆原创广场舞《我爱你勐巴拉拉西》.mp4"
            type="video/mp4"
          >

        </video>

      </div>
      <div class="c_video_section">
        <el-card class="box-card_section">
          <div slot="header" class="clearfix">
            <span>章节名称</span>

          </div>
          <div class="box-card_section_bady">
            <div v-for="o in 100" :key="o" class="text item">
              <el-link :underline="false" type="default">{{'列表内容 ' + o }}</el-link>
            </div>
          </div>

        </el-card>

      </div>
    </div>
    <div class="c_information">
      <div class="c_information_like_couynt">
        <el-link :underline="false" type="default"><i class="el-icon-sugar"
                                                      style="font-size: 28px">点赞</i><span>666</span></el-link>
        <el-link :underline="false" type="default" style="font-size: 28px;margin-left: 100px"><i
          class="el-icon-circle-plus"></i>收藏
        </el-link>
      </div>
      <div class="c_information_description">
        <el-tabs type="border-card">
          <el-tab-pane label="描述">2019年最全最新Vue、Vuejs教程，从入门到精通</el-tab-pane>
          <el-tab-pane label="测试题">
            <div v-for="o in 5" :key="o">
              {{'列表内容 ' + o }}
            </div>
          </el-tab-pane>

        </el-tabs>
      </div>
    </div>
    <div class="c_comment">
      <div class="c_comment_fa">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>评论</span>
            <el-button type="primary" style="float: right; padding: 3px 0">发表评论</el-button>

          </div>
          <div class="text item">
            <el-input
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              v-model="textarea">
            </el-input>
          </div>
        </el-card>


      </div>
      <div class="c_comment_kan">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>暴躁学霸</span>

          </div>
          <div class="text item">
            老师你讲的太好了，我太喜欢你的课程了，点赞
          </div>
        </el-card>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>暴躁学霸</span>

          </div>
          <div class="text item">
            老师你讲的太好了，我太喜欢你的课程了，点赞
          </div>
        </el-card>
      </div>

    </div>
    <div class="c_bottom" style="text-align: center">
      <el-card shadow="always">
        喜欢该课程就去点赞留言吧！
      </el-card>
    </div>
  </div>
</template>

<script>
    export default {
        name: "CoursePages",
        data() {
            return {
                textarea: ''

            }
        },
        mounted() {
            this.initVideo();
        },
        methods: {
            initVideo() {
                //初始化视频方法
                let myPlayer = this.$video(myVideo, {
                    //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
                    controls: true,
                    //自动播放属性,muted:静音播放
                    autoplay: "muted",
                    //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
                    preload: "auto",
                    //设置视频播放器的显示宽度（以像素为单位）
                    width: "725px",
                    //设置视频播放器的显示高度（以像素为单位）
                    height: "530px"
                });
            }
        }

    }
</script>

<style scoped>
  .course {
    width: 1100px;
    margin: 0 auto;

  }

  .c_title {
    display: flex;
    text-align: center;
    height: 60px;
    width: 1100px;
    margin-top: 10px;

  }


  .c_video {
    display: flex;

    height: 550px;
    width: 1100px;
  }

  .c_video_content {
    text-align: center;
    line-height: 500px;
    width: 750px;
    margin: 10px;
  }

  .c_video_section {
    text-align: left;
    height: 500px;
    width: 350px;

    margin: 10px;
  }


  .c_information {
    width: 1100px;

  }

  .c_information_like_couynt {
    width: 180px;
    text-align: center;
    width: 1100px;
    margin: 20px;

  }


  .c_comment {
    margin-top: 20px;
    background-color: #E4E7ED;
  }

  .c_comment_fa {
    padding-top: 10px;
  }

  .c_comment_kan {
    margin-top: 15px;
    width: 1000px;
    padding-bottom: 10px;

  }

  .text {
    font-size: 14px;

  }

  .box-card_section_bady {
    margin-left: 10px;
    overflow-y: scroll;
    height: 433px;
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
    width: 1090px;
    margin: 5px;
  }

  .c_bottom {
    margin-top: 30px;
    margin-bottom: 10px;
  }
</style>
