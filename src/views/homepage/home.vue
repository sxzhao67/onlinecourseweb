<template>
  <div class="result">
  <div v-for="item in result">
    <div>{{item.username}}</div>
    <div>{{item.pwd}}</div>
  </div>
  </div>
</template>

<script>

    import {getHomeMuItidata} from "network/home";

    export default {
        name: "home",
        components: {},
        data(){
            return{
                result:[]
            }
        },
        created() {
            //请求多个数据

            getHomeMuItidata().then(res => {

                this.result = res;
            })

        }
    }
</script>

<style scoped>

</style>
