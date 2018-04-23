<style scoped>
    .layout-con{
        height: 100%;
        width: 100%;
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 94px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
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
        margin-left: 14px;
        transform:rotate(90deg);

    }
    .ivu-menu-item{
        background: #362f2c;
        transition: font-size .2s ease, transform .2s ease;
    }
</style>
<template>
    <div class="layout">
        <Layout :style="{minHeight: '100vh'}">
            <Sider  width="180" ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
                <div  @click="collapsedSider" :class="rotateIcon">
                    <i></i>
                    <span>收起</span>
                </div>
                <Menu  theme="dark" width="auto"   :class="menuitemClasses">
                    <Submenu :name ='index' :key="index" v-for="(item,index) in indexForm">
                        <template slot="title">
                            <span>{{item.item}}</span>
                        </template>
                        <MenuItem :key="key" :name='`${index}-${key}`'  v-for="(subitem,key) in item.children"><span>{{subitem.subitem}}</span></MenuItem>
                    </Submenu>
                </Menu>
            </Sider>
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
                    children:[{subitem:'企业信息'},{subitem:'项目申请列表'}]
                },{
                    item:'合同评审',
                    children:[{subitem:'合同评审'}]
                },{
                    item:'审核管理',
                    children:[{subitem:'审核安排列表'},{subitem:'审核任务查询'},{subitem:'审核员行程表'}]
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