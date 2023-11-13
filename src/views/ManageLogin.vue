<template>
    <div class="login">
        <div class="login-card">
            <div class="card-left"> </div>
            <div class="card-right">
                <strong style="font-size: 3vh; font-weight: 800">欢迎登录</strong>
                <el-input
                    v-model="userInfo.username"
                    placeholder="用户名"
                    prefix-icon="iconfont icon-Union-46"
                    maxlength="11"
                ></el-input>
                <el-input
                    v-model="userInfo.password"
                    placeholder="密码"
                    show-password
                    prefix-icon="iconfont icon-Union-47"
                    maxlength="20"
                    class="password"
                    @keyup.enter.native="login()"
                ></el-input>
                <el-button
                    type="primary"
                    style="
                        width: 70%;
                        height: 50px;
                        border-radius: 25px;
                        font-size: 20px;
                        font-weight: 500;
                        background-color: #4460ef;
                    "
                    @click="login()"
                    >登录</el-button
                >
            </div>
        </div>
    </div>
</template>

<script>
import { reqLogin } from '@/api/login';
export default {
    created() {},
    data() {
        return {
            userInfo: {
                username: '',
                password: ''
            }
        };
    },
    methods: {
        async login() {
            if (this.userInfo.userName === '') {
                this.$message.error('请输入账号！');
                return;
            }
            if (this.userInfo.password === '') {
                this.$message.error('请输入密码！');
                return;
            }
            const res = await reqLogin(this.userInfo).catch((err) => {
                // 提示错误, 终止执行
                return console.error(err);
            });
            if (res.data.code !== '00000') {
                // console.log(res);
                this.$message.error(res.data.message);
            }
            console.log('res', res);
            this.$message.success('登录成功');
            localStorage.setItem('token', res.data.data.token);
            localStorage.setItem('userId', res.data.data.userId);
            localStorage.setItem('activePath', '/show/waterQuality');
            this.$router.push('/show');
        }
    }
};
</script>

<style lang="scss" scoped>
.login {
    width: 100%;
    height: 100%;
    background-size: 100% 101%;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;

    .login-card {
        min-width: 1200px;
        min-height: 600px;
        width: 65%;
        height: 60%;
        background-color: #fff;
        border-radius: 0 15vh 0 15vh;
        box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.12), 0 0 20px rgba(0, 0, 0, 0.04);
        overflow: hidden;
        display: flex;

        .card-left {
            box-sizing: border-box;
            width: 55%;
            height: 100%;
            padding: 3% 5%;
            background-size: 65% 55%;
            background-repeat: no-repeat;
            background-position: center;
            .logo {
                display: flex;
                align-items: center;
                width: 10%;
                height: 10%;
            }
        }

        .card-right {
            box-sizing: border-box;
            width: 45%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            padding: 10% 5% 10% 0;

            ::v-deep .el-input__inner {
                height: 50px;
                padding: 0 15% 0 15%;
                background-color: #fcfbfe;
            }
            ::v-deep .el-input__prefix {
                width: 12%;
                .iconfont {
                    font-size: 22px;
                }
            }
            ::v-deep .el-input__suffix {
                width: 12%;
                .iconfont {
                    font-size: 22px;
                }
            }
            .verify {
                ::v-deep .el-input-group__append {
                    width: 40%;
                    line-height: 40%;
                }
                ::v-deep .el-input__inner {
                    padding-left: 22%;
                }
            }
            .el-input {
                width: 70%;
            }
        }
    }
}
</style>