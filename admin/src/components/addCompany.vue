<style>
    .companyInfo{
        color: #333;
        font-size: 18px;
        text-align: left;
        line-height: 40px;
    }
    .ivu-input{
        /* height: 20px; */
    }
    .left{
        float: left;
    }
    .right{
        float: right;
    }
</style>
<template>
  <div>
    <Content :style="{margin: '20px', background: '#f5f7f9'}">
        <Form :model="formValidate" :rules="ruleValidate">
            <h3 class="companyInfo">企业基本信息</h3>
            <FormItem label="企业注册名称" prop="name" :label-width="100" class="left">
                <Input :model.trim="formValidate.companyName" :style="{width:'200px'}"></Input>
            </FormItem>
            <FormItem label="法人" prop="person" :label-width="100" class="right">
                <Input :model.trim="formValidate.person" :style="{width:'200px'}"></Input>
            </FormItem>
        </Form>
    </Content>
  </div>
</template>

<script>
export default {
  data () {
      return {
          formValidate:{
              companyName:'',
              person:''
          },
          ruleValidate:{
            name:[
                {required:true,message:'企业注册名称不能为空',trigger: 'blur'},
            ],
            person:[
                {required:true,message:'法人不能为空',trigger: 'blur'},
            ], 
          }
      }
  }
}
</script>

