<style>
    form h3{
        font-size: 16px;
        color: #d2ab66;
        padding-left: 10px;
        line-height: 16px;
        margin: 10px 0;
        border-left: 4px solid #d2ab66;
    }
    .formitemBox{
        width: 100%;
        min-width: 1056px;
        background: #fff;
        padding-top: 40px;
    }
    .longInp{
        min-width: 560px;
        width: 66%;        
    }
    .shortInp{
        min-width: 155px;
        width: 19%;
    }
    .shorterInp{
        min-width:90px;
        width:10%;
    }
    .middleInp{
        min-width:255px;
        width: 30%;
    }
    .cutLine{
        border-bottom: 1px solid #eee;
        padding-bottom: 30px;
    }
</style>
<template>
  <div>
    <Content :style="{margin: '30px', background: '#f5f7f9'}">
        <Form :model="formValidate" :rules="ruleValidate">
            <h3>企业基本信息</h3>
            <div class="formitemBox">
                <FormItem label="企业注册名称" prop="companyName"  :label-width="200">
                    <Input v-model.trim="formValidate.companyName" class="longInp"></Input>
                </FormItem>
                <FormItem label="法人" prop="person" :label-width="200">
                    <Input v-model.trim="formValidate.person" class="longInp"></Input>
                </FormItem>
                <FormItem label="英文版" prop="english" :label-width="200">
                    <Input v-model.trim="formValidate.english" class="longInp"></Input>
                </FormItem>
                <FormItem label="合同来源" prop="source" :label-width="200">
                    <Select v-model.trim="formValidate.source" class="shortInp">
                        <Option value="1">003 李丹</Option>
                        <Option value="2">003 李丹</Option>
                        <Option value="3">003 李丹</Option>
                    </Select>
                </FormItem>
                <FormItem label="注册资本" prop="capital"  :label-width="200">
                    <Input v-model.trim="formValidate.capital" class="shortInp"></Input>
                    <Select v-model.trim="formValidate.level" class="shorterInp">
                        <Option value="1">万人民币</Option>
                        <Option value="2">万美元</Option>
                    </Select>
                </FormItem>
                <FormItem label="社会信用/组织机构代码" prop="code"  :label-width="200" class="cutLine">
                    <Input v-model.trim="formValidate.code" class="middleInp"></Input>                    
                </FormItem>
                <FormItem label="注册地址" prop="address"  :label-width="200">
                    <!-- <Input v-model.trim="formValidate.address" class="middleInp"></Input>                     -->
                </FormItem>
            </div>
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
              person:'',
              english:'',
              source:'1',
              capital:'',
              level:'1',
              code:'',
          },
          ruleValidate:{
            companyName:[
                {required:true,message:'企业注册名称不能为空',trigger: 'blur'},
            ],
            person:[
                {required:true,message:'法人不能为空',trigger: 'blur'},
            ], 
            capital:[
                {required:true,message:'注册资本不能为空',trigger: 'blur'},
                {validator(rule, value, callback, source, options){
                    var error = [];
                    if(!/^[0-9]+(.[0-9]{1,3})?$/.test(value)){
                        callback('请输入正确的注册资本')
                    }
                    callback(error)
                },trigger: 'blur' }
            ],
            code:[
                {required:true,message:'社会信用/组织机构代码不能为空',trigger: 'blur'},
            ]
          }
      }
  }
}
</script>

