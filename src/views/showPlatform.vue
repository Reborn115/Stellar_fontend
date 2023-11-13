<template>
    <el-container class="all">
        <el-header height="50px">
            <div class="left">
                <view>myTest</view>
            </div>
            <div class="right">
                <div class="personal-details">
                    <p style="font-weight: 600; font-size: 12px">{{ userName }}</p>
                </div>
                <div @click="exit">
                    <p class="exit">退出登录</p>
                </div>
            </div>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <el-menu
                    default-active="/show/myTest"
                    router
                    @select="handleSelect"
                    active-text-color="#c5947c"
                    background-color="#1f376b"
                    text-color="white"
                >
                    <el-menu-item index="/show/myTest">
                        <i class="iconfont icon-jichushujuluru"></i>
                        <span slot="title">myTest</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-main><router-view></router-view></el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
    data() {
        return {
            userName: '默认昵称',
            activePath: '/show/myTest'
        };
    },
    created() {
        this.activePath = localStorage.getItem('activePath');
    },
    mounted() {},
    methods: {
        handleSelect(key) {
            console.log(key);
            localStorage.setItem('activePath', key);
        },
        exit() {
            localStorage.clear();
            this.$router.replace('/login');
            // console.log(this.$router);
        }
    },
    beforeRouteEnter(to, from, next) {
        let token = localStorage.getItem('token');
        if (token === null || token === '') {
            next('/login');
        } else {
            next();
        }
    }
};
</script>

<style lang="scss" scoped>
.el-menu {
    background-color: #1f376b;
    border-right: 0;
    // color: white !important;
}
.all {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}
.el-header {
    background-color: #1f376b;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
        display: flex;
        align-items: center;
    }
    .right {
        display: flex;
        align-items: center;
        .avatar {
            border-radius: 50%;
            height: 40px;
            width: 40px;
        }
        .personal-details {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 90px;
            height: 100%;
            margin-left: 20px;
        }
        .exit {
            color: white;
            font-size: 14px;
            cursor: pointer;
        }
    }
}

.el-aside {
    background-color: #1f376b;
    // color: #333;
    line-height: 200px;
    // margin-right: 21vw !important;

    .el-menu-item {
        // border-top: 1px solid #f2f2f2;
        i {
            font-size: 24px;
            margin-right: 10px;
        }
    }
}

.el-main {
    // background-color: #fcfbfe;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

body > .el-container {
    margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}
</style>
