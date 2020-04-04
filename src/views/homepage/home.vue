<template>
  <div id="home">

    <hot-course></hot-course>
    <new-course></new-course>
    <el-card shadow="always" style="text-align: center">
      路漫漫其修远兮，吾将上下而求索。
    </el-card>
  </div>
</template>

<script>

    import HotCourse from "./hotcourse/HotCourse";
    import NewCourse from "./newcourse/NewCourse";


    export default {
        name: "home",
        components: {
            HotCourse,
            NewCourse
        },


    }
</script>

<style scoped>



</style>
