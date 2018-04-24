<style scoped>
    .layout-con{
        height: 100%;
        width: 100%;
    }
    .menu-item{
        background: transparent;
    }
    .ivu-menu-submenu-title:hover{
        background: transparent;
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 90px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
        color: #fff;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .autoColl{
        text-align: center;
        font-size: 14px;
        color: #fff;
        line-height: 40px;
        border-bottom: 1px solid #444443;
    }
    .autoColl span{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        display: inline-block;
    }
    .autoColl i{
        display: inline-block;
        width: 14px;
        height: 14px;
        position: relative;
        top: 2px;
        margin-right: 4px;
        background: url('../assets/img/fold.png') center no-repeat;
    }
    .closeColl span{
        width: 0;
        transition: width .2s ease;
    }
    .closeColl i{
        margin-left: -8px;
        transform:rotate(90deg);
    }
    .ivu-menu-item{
        background: #362f2c;
        transition: font-size .2s ease, transform .2s ease;
    }
    .indexHeader{
        background: #fff;
        height: 50px;
        padding: 0 30px;
    }
    .indexLogo{
        padding-left:56px ;
        line-height: 50px;
        float: left;
        background: url('../assets/img/logo_Zhongjiao.png') left center no-repeat;
    }
    .indexLogo p{
        width: 145px;
        color: #333;
        font-size: 16px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .indexExit{
        float: right;
        margin-right: 42px;
        padding-left: 25px;
        line-height: 50px;
        background: url('../assets/img/exit.png') left center no-repeat;
        cursor: pointer;
    }
    .indexExit p{
        color: #a7a7a7;
        font-size: 16px;
    }
    .icon{
        float: left;
        position: relative;
        top: 4px;
        width: 14px;
        height: 14px;
        margin-right: 8px;
        background: url('../assets/img/icon.png') center no-repeat;
    }
    .collapsed-menu .icon{
        margin-left: -8px;
    }
    .indexSider{
        overflow: hidden;
        background: linear-gradient(top,#151311,#2e2822);
    }
    .subMenu{
        border: none;
        color: #fff;
    }
    .indexArrow{
        float: left;
        width: 10px;
        height: 10px;
        background: url('../assets/img/icon_arrow.png') center center no-repeat;
        margin-top: 4px;
    }
    .indexTitle{
        padding-left: 8px;
    }
    .ivu-menu-opened .indexArrow{
        transform:rotate(90deg);
    }
</style>
<template>
    <div class="layout">
        <Layout  :style="{minHeight: '100vh'}">
            <Header class="indexHeader">
                <div class="indexLogo">
                    <p>北京中交远航认证有限公司</p>
                </div>
                <div class="indexExit">
                    <p>退出</p>
                </div>
            </Header>
            <Layout>
                <Sider class="indexSider"  width="180" ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
                    <div  @click="collapsedSider" :class="rotateIcon">
                        <i></i>
                        <span>收起</span>
                    </div>
                    <Menu  :class="menuitemClasses">
                        <Submenu :name ='index' :key="index" v-for="(item,index) in indexForm">
                            <template slot="title"  class="indexTitle">
                                <i class="indexArrow"></i>
                                <span>{{item.item}}</span>
                            </template>
                            <MenuItem class="subMenu" :key="key" :name='`${index}-${key}`'  v-for="(subitem1,key) in item.children">
                                <router-link  :to="subitem1.linkTo || ''">
                                    <i class="icon"></i>
                                    <span>{{subitem1.subitem}}</span>
                                </router-link>
                            </MenuItem>
                        </Submenu>
                    </Menu>
                </Sider>
                <Layout>
                    <router-view></router-view>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
    import {setSession , getSession , removeSession , clearSession , setItem , getItem , removeItem} from '../libs/common';
    export default {
        props: ['permission'],
        data () {
            return {
                indexForm:[{
                    item:'项目受理',
                    children:[{subitem:'企业信息',linkTo:'/index/sub1'},{subitem:'项目申请列表',linkTo:'/index/sub1'}]
                },{
                    item:'合同评审',
                    children:[{subitem:'合同评审',linkTo:'/index/sub1'}]
                },{
                    item:'审核管理',
                    children:[{subitem:'审核安排列表'},{subitem:'审核任务查询',linkTo:'/index/sub1'},{subitem:'审核员行程表',linkTo:'/index/sub1'}]
                }],
                isCollapsed: false
            }
        },
        mounted(){
            if(this.permission){
                setSession('permission',this.permission)                
            };
             if(getItem('Liststate') ==1){
                this.isCollapsed = true;
            }else{
                this.isCollapsed = false;  
            }
            console.log(this.indexForm)
        },
        created () {
            if(getSession('permission') !== null){
                
            }
        },
        computed: {
           menuitemClasses () {
               return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
           },
           rotateIcon () {
                return [
                    'autoColl',
                    this.isCollapsed ? 'closeColl' : ''
                ];
            },
        },
        methods: {
            collapsedSider () {
                this.$refs.side1.toggleCollapse();
                if(this.isCollapsed == true ){
                    setItem('Liststate',1);
                }else{
                    setItem('Liststate',0);
                }
            }
        }
    }
</script>