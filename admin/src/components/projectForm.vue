<style>
    .contentForm{
        min-width: 1060px;
    }
    .ivu-table-overflowX{
        overflow-x:hidden; 
    }
    .ivu-table-tbody tr td{
        width: 20%!important;
    }
    .partPage{
        float: right;
        margin-top: 20px;
        margin-right: 10px;
    }
</style>

<template >
    <div>
        <Content :style="{margin: '20px', background: '#f5f7f9'}">
            <Table :stripe="true" border :columns="columns" :data="historyData" class="contentForm"></Table>
            <Page class="partPage" :total="dataCount" show-elevator :page-size="pageSize" show-total  @on-change="changepage"></Page>     
        </Content>
    </div>
    <!-- <Page :total="100" show-elevator></Page> -->
</template>
<script>
let testData = {
    "histories": [
        {
            companyName: '杭州证客信息科技有限公司',
            pactSource: '0001张三',
            linkMan: '李四',
            linkNumber:'15658119999',
            companyPhone:'0574-86729899'
        },
        {
            companyName: '杭州证客信息科技有限公司',
            pactSource: '0001张三',
            linkMan: '李四',
            linkNumber:'15658119999',
            companyPhone:'0574-86729899'
        },
        {
            companyName: '杭州证客信息科技有限公司',
            pactSource: '0001张三',
            linkMan: '李四',
            linkNumber:'15658119999',
            companyPhone:'0574-86729899'
        },
        {
            companyName: '杭州证客信息科技有限公司',
            pactSource: '0001张三',
            linkMan: '李四',
            linkNumber:'15658119999',
            companyPhone:'0574-86729899'
        },
        {
            companyName: '杭州证客信息科技有限公司',
            pactSource: '0001张三',
            linkMan: '李四',
            linkNumber:'15658119999',
            companyPhone:'0574-86729899'
        },
        {
            companyName: '杭州证客信息科技有限公司',
            pactSource: '0001张三',
            linkMan: '李四',
            linkNumber:'15658119999',
            companyPhone:'0574-86729899'
        },
        {
            companyName: '杭州证客信息科技有限公司',
            pactSource: '0001张三',
            linkMan: '李四',
            linkNumber:'15658119999',
            companyPhone:'0574-86729899'
        },
        {
            companyName: '杭州证客信息科技有限公司',
            pactSource: '0001张三',
            linkMan: '李四',
            linkNumber:'15658119999',
            companyPhone:'0574-86729899'
        },
        {
            companyName: '杭州证客信息科技有限公司',
            pactSource: '0001张三',
            linkMan: '李四',
            linkNumber:'15658119999',
            companyPhone:'0574-86729899'
        },
        {
            companyName: '杭州证客信息科技有限公司',
            pactSource: '0001张三',
            linkMan: '李四',
            linkNumber:'15658119999',
            companyPhone:'0574-86729899'
        },
        {
            companyName: '杭州证客信息科技有限公司',
            pactSource: '0001张三',
            linkMan: '李四',
            linkNumber:'15658119999',
            companyPhone:'0574-86729899'
        },
        {
            companyName: '杭州证客信息科技有限公司',
            pactSource: '0001张三',
            linkMan: '李四',
            linkNumber:'15658119999',
            companyPhone:'0574-86729899'
        },
        {
            companyName: '杭州证客信息科技有限公司',
            pactSource: '0001张三',
            linkMan: '李四',
            linkNumber:'15658119999',
            companyPhone:'0574-86729899'
        },
        {
            companyName: '杭州证客信息科技有限公司',
            pactSource: '0001张三',
            linkMan: '李四',
            linkNumber:'15658119999',
            companyPhone:'0574-86729899'
        },
        {
            companyName: '杭州证客信息科技有限公司',
            pactSource: '0001张三',
            linkMan: '李四',
            linkNumber:'15658119999',
            companyPhone:'0574-86729899'
        },
        {
            companyName: '杭州证客信息科技有限公司',
            pactSource: '0001张三',
            linkMan: '李四',
            linkNumber:'15658119999',
            companyPhone:'0574-86729899'
        },
        {
            companyName: '杭州证客信息科技有限公司',
            pactSource: '0001张三',
            linkMan: '李四',
            linkNumber:'15658119999',
            companyPhone:'0574-86729899'
        },
        {
            companyName: '杭州证客信息科技有限公司',
            pactSource: '0001张三',
            linkMan: '李四',
            linkNumber:'15658119999',
            companyPhone:'0574-86729899'
        },
        {
            companyName: '杭州证客信息科技有限公司',
            pactSource: '0001张三',
            linkMan: '李四',
            linkNumber:'15658119999',
            companyPhone:'0574-86729899'
        },
        {
            companyName: '杭州证客信息科技有限公司',
            pactSource: '0001张三',
            linkMan: '李四',
            linkNumber:'15658119999',
            companyPhone:'0574-86729899'
        },
        {
            companyName: '杭州证客信息科技有限公司',
            pactSource: '0001张三',
            linkMan: '李四',
            linkNumber:'15658119999',
            companyPhone:'0574-86729899'
        },
        {
            companyName: '杭州证客信息科技有限公司',
            pactSource: '0001张三',
            linkMan: '李四',
            linkNumber:'15658119999',
            companyPhone:'0574-86729899'
        },
    ]
}
export default {
    data () {
            return {
                ajaxHistoryData:[],
                // 初始化信息总条数
                dataCount:0,
                // 每页显示多少条
                pageSize:15,
                historyData: [],
                columns: [
                    {
                        title: '企业名称',
                        key: 'companyName',
                        minWidth:300
                    },
                    {
                        title: '合同来源',
                        key: 'pactSource',
                        minWidth:100,
                        maxWidth:150                                                    
                        
                    },
                    {
                        title: '联系人',
                        key: 'linkMan',
                        minWidth:100,
                        maxWidth:200                            
                    },{
                        title: '联系手机',
                        key: 'linkNumber',
                        minWidth:200,
                    },{
                        title: '企业电话',
                        key: 'companyPhone',
                        minWidth:200
                    },
                    {
                        title: '操作',
                        key: 'action',
                        minWidth: 160,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            // this.show(params.index)
                                            // 点击编辑进行相关操作
                                        }
                                    }
                                }, '编辑'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
            }
        },
    methods: {
        show (index) {
            this.$Modal.info({
                // title: 'User Info',
                // content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
            })
        },
        remove (index) {
            this.data6.splice(index, 1);
        },
        // 获取历史记录信息
        handleListApproveHistory(){
            // 保存取到的所有数据
            this.ajaxHistoryData = testData.histories
            this.dataCount = testData.histories.length;
            // 初始化显示，小于每页显示条数，全显，大于每页显示条数，取前每页条数显示
            if(testData.histories.length < this.pageSize){
                this.historyData = this.ajaxHistoryData;
            }else{
                this.historyData = this.ajaxHistoryData.slice(0,this.pageSize);
            }
        },
        changepage(index){
            var _start = ( index - 1 ) * this.pageSize;
            var _end = index * this.pageSize;
            this.historyData = this.ajaxHistoryData.slice(_start,_end);
        }
    },
    created () {
        this.handleListApproveHistory();
    }
}
</script>


