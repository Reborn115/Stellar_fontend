<template>
    <div class="container"> myTest </div>
</template>

<script>
// import * as echarts from "echarts";

export default {
    created() {},
    async mounted() {
        this.$nextTick(() => {
            this.updateChart(); // 初始化图表
        });
    },
    filters: {},
    data() {
        return {};
    },
    methods: {
        updateChart() {}
    }
};
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    // justify-content: center;
    // align-items: center;
    width: 100%;
    height: 100%;
}
.textData {
    // display: flex;
    // align-items: center;
    // justify-content: center;
    border-style: outset;
    border-width: 5px;
    width: 100%;
    height: 30vh;
    // background-color: rgba(201, 212, 223, 1);
    // background-color: #1f376b;
    border-radius: 35px;
    // box-shadow: 15px 15px 30px -10px rgba(0, 0, 0, 0.2),
    //   inset 20px 20px 15px #23407d, -15px -15px 35px #23407d,
    //   inset -1px 1px 10px rgba(0, 0, 0, 0.5);
}
</style>
