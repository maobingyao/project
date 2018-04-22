 <style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    /* 头部 */

    .loginHeader{
        width: 100%;
        min-height: 98px;
        background: #14090f;
        border-bottom: 1px solid rgba(255,255,255,.8);
        position: absolute;
        top: 0;
        z-index: 3;
    }
    .headerIndex{
        width: 100%;
        max-width: 1280px;
        min-width: 1030px;
        margin: 0 auto;
        padding-top: 24px;
        padding-left: 53px;
    }
    .logo img{
        float: left;
        margin-right: 14px;
    }
    .logoText{
        float: left;
        margin-top: -4px;
    }
    .logoText p:nth-of-type(1){
        font-size: 24px;
        color: #d7b779;
    }
    .logoText p:nth-of-type(2){
        font-size: 12px;
        color: #d7b779;
    }
    /* 主内容区 */
    .loginContent{
        background: #14090f;
        position: absolute;
        top: 98px;
        bottom: 160px;
        min-height:510px;
        width: 100%;
        z-index: 2;
    }
    .contentIndex{
        width: 100%;
        max-width: 1280px;
        min-width: 1030px;
        margin: 0 auto;
        height: 100%;
        overflow: hidden;
        position: relative;
    }
    /* 登录表单 */
    .login-form {
        position: absolute;
        z-index: 11111111;
        top: 50%;
        transform: translateY(-50%);
        right: 50px;
    }
    /* 底部 */
    .loginFoot{
        position: absolute;
        bottom: 0;
        min-height: 160px;
        width: 100%;
        overflow: hidden;
        z-index: 1;
    }
    .footIndex{
        margin: 0 auto;
        max-width: 1280px;
        min-width: 1030px;
        padding-top: 62px;
    }
    .footIndex p{
        text-align: center;
        font-size: 12px;
        color: #b0b0b0;
    }
    .footIndex p i{
        display: inline-block;
        width: 20px;
        height: 16px;
        background: url('../assets/img/login_footIcon4.png') center right no-repeat;
        position: relative;
        top: 2px;
    }
    .footIndex div{
        width: 250px;
        margin: 20px auto 0;
    }
    .footIndex div a{
        margin-right: 8px;
    }
    .footIndex div a:nth-of-type(3){
        margin-right: 0;
    }


    /* 登录页面轮播login.vue */
    .autoPlay{
        height: 100%;
        min-height:510px;
    }
    .playFirst,.playSecond,.playFirst_box{
        min-height: 510px;
        height: 100%!important;
    }
    .playFirst{
        background: url('../assets/img/autoPlay_first.png') #14090f center left no-repeat;
    }
    .playSecond{
        background: url('../assets/img/autoPlay_second.png') #14090f  center left no-repeat;
    }
    .ivu-carousel-track,.ivu-carousel-list{
        height: inherit;
    }
    /* 登录表单样式 */
    .formIndex{
        width: 100%;
        height: 40px;
    }
    .loginUser{
        width: 24px;
        height: 24px;
        background: url('../assets/img/user.png') center center no-repeat;
    }
    .loginPassword{
        width: 24px;
        height: 24px;
        background: url('../assets/img/password.png') center center no-repeat;
    }
    .userForm,.userForm input{
        height: 35px;
    }
    .passwordForm,.passwordForm input{
        height: 35px;
    }
    .loginButton{
        width: 100%;
        height: 40px;
        color: #fff;
        line-height: 40px;
        text-align: center;
    }
    .ivu-btn-primary{
        background: #cea762;
        border-color: #cea762;
        width: 100%;
        height: 40px;
        font-size: 14px;
    }
    .ivu-btn-primary:hover{
        background: #cea762;
        border-color: #cea762;
    }
    .ivu-checkbox-inner{
        margin-right: 8px;
    }
</style>

<template>
    <div class="loginIndex">
        <div class="loginHeader">
            <div class="headerIndex">
                <div class="logo">
                    <img src="../assets/img/logo.png" alt="">
                    <div class="logoText">
                        <p>认证精灵</p>
                        <p>智能的认证云平台</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="loginContent">
            <div class="contentIndex">
                <Carousel   loop  class="autoPlay" ref="autoPlay"
                    :autoplay="setting.autoplay"
                    :autoplay-speed="setting.autoplaySpeed"
                    :dots="setting.dots"
                    :radius-dot="setting.radiusDot"
                    :arrow="setting.arrow">
                    <CarouselItem class="playFirst_box">
                        <div class="demo-carousel playFirst playEle1"></div>
                    </CarouselItem>
                    <CarouselItem class="playFirst_box">
                        <div class="demo-carousel playSecond playEle1"></div>
                    </CarouselItem>
                </Carousel>
                <LoginForm class="login-form"></LoginForm>
            </div>
        </div>
        <div class="loginFoot">
            <div class="footIndex">
                <p>Copyright© 2016-<span>{{getDate()}}</span> XXXX 浙ICP 16004303号 <i></i>浙公网安备 33010802003968号</p>
                <div>
                    <a href="javascript:;">
                        <img src="../assets/img/login_footIcon1.png" alt="">
                    </a>
                    <a href="javascript:;">
                        <img src="../assets/img/login_footIcon2.png" alt="">
                    </a>
                    <a href="javascript:;">
                        <img src="../assets/img/login_footIcon3.png" alt="">
                    </a>
                </div>
            </div>
        </div>
        
    </div>
    
</template>
<script>
    import LoginForm from "./loginForm.vue";
    export default {
        components: {
            'LoginForm': LoginForm,
        },
        data () {
            return {
                value2: 0,
                setting: {
                    autoplay: true,
                    autoplaySpeed: 8000,
                    dots: 'none',
                    radiusDot: false,
                    arrow: 'never',
                },
            }
        },
        methods: {
            getDate(){
                let date=new Date;  
                let year=date.getFullYear(); 
                return year;
            }
        }
    }
</script>