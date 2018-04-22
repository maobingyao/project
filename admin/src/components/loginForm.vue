<style>
    .loginForm{
        width: 368px;
        height: 380px;
        box-sizing: border-box;
        padding: 0 44px;
        overflow: hidden;
        background: #fff;
        font-family: "微软雅黑";
    }
    .loginForm h4{
        font-size: 16px;
        color: #333;
        text-align: center;
        line-height: 70px;
        margin-bottom: 30px;
    }
</style>
<template>
    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline class="loginForm">
        <h4>账号登录</h4>
        <FormItem prop="user" class="formIndex">
            <Input type="text" class="userForm" v-model="formInline.user" placeholder="用户名/手机号码">
                <Icon class="loginUser" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password" class="formIndex">
            <Input type="password" class="passwordForm" v-model="formInline.password" placeholder="请输入密码">
                <Icon class="loginPassword" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="rememberUser">
            <CheckboxGroup v-model="formInline.rememberUser" ref="checkBox">
                <Checkbox label="记住登录名" ></Checkbox>
            </CheckboxGroup>
        </FormItem>
        <FormItem class="loginButton">
            <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
        </FormItem>
    </Form>
</template>
<script>
// 公共函数里面获取或设置localstorage
import { setItem , getItem , removeItem } from '../libs/common.js';
export default {
    data () {
        return {
            formInline: {
                user: '',
                password: '',
                rememberUser:[],
            },
            ruleInline: {
                user: [
                    { required: true, message: '请输入手机号', trigger: 'blur' },
                    {validator(rule, value, callback, source, options){
                        var error = [];
                        if(!/(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/.test(value)){
                            callback('请输入正确的手机号码')
                        }
                        callback(error)
                    },trigger: 'blur' }                        
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { type: 'string', min: 6, message: '密码长度不能小于6个', trigger: 'blur' }
                ]
            },
        }
    },
    methods: {
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    const setData = this.formInline
                    this.$axios.post('http://127.0.0.1:3306/login',{user:setData.user,password:setData.password}).then(res => {
                        if(res.data.code == 1){
                            this.$Message.success('登录成功!');
                            if(this.formInline.rememberUser.length == 1){
                                setItem('userid',this.formInline.user)
                            }else{
                                removeItem('userid')
                            }
                            this.$router.push({name: "index", params: {permission: res.data.permission}})
                        }else{
                            this.$Message.error('账号或密码错误!');
                        }
                    })                       
                } else {
                    this.$Message.error('输入有误!');
                }
            })
        }
    },
    mounted () {
        if(getItem('userid') !== null){
            this.formInline.user = getItem('userid');
            this.formInline.rememberUser = ['记住登录名'];
        }
    }
}
</script>


