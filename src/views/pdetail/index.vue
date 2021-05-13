<template>
    <div class="pdetail">
        <div class="pdetail-container">
            <div class="pdetail-content">
                <Parting text="企业信息" />
                <div class="info">
                    <div class="item" v-for="(item,index) in items" :key="index">
                        <InfoText :title="item.title" :des="item.des" />
                    </div>
                </div>
                <Parting text="企业业绩信息" />
                <div class="info mb0">
                    <div class="info-border">
                        <div
                            class="item"
                            v-for="(item,index) in items2"
                            :key="index"
                        >
                            <InfoText :title="item.title" :des="item.des" />
                        </div>
                        <div class="tag">
                            <span>1</span>
                            <i class="iconfont icon-paimingbiaoqian"></i>
                        </div>
                    </div>
                </div>
                <div class="info mb0">
                    <div class="info-border">
                        <div
                            class="item"
                            v-for="(item,index) in items2"
                            :key="index"
                        >
                            <InfoText :title="item.title" :des="item.des" />
                        </div>
                        <div class="tag">
                            <span>2</span>
                            <i class="iconfont icon-paimingbiaoqian"></i>
                        </div>
                    </div>
                </div>
                <div class="info">
                    <div class="info-border">
                        <div
                            class="item"
                            v-for="(item,index) in items2"
                            :key="index"
                        >
                            <InfoText :title="item.title" :des="item.des" />
                        </div>
                        <div class="tag">
                            <span>3</span>
                            <i class="iconfont icon-paimingbiaoqian"></i>
                        </div>
                    </div>
                </div>
                <Parting text="代理人员信息" />
                <div class="info mb0">
                    <div class="info-border">
                        <div
                            class="item"
                            v-for="(item,index) in items2"
                            :key="index"
                        >
                            <InfoText :title="item.title" :des="item.des" />
                        </div>
                    </div>
                </div>
                <div class="info">
                    <div class="info-border">
                        <div
                            class="item"
                            v-for="(item,index) in items2"
                            :key="index"
                        >
                            <InfoText :title="item.title" :des="item.des" />
                        </div>
                    </div>
                </div>
                <Parting text="企业证书" />
                <div class="info">
                    <div class="download">
                        <div class="img">
                            <img src="@/assets/images/2.png" alt="" />
                            <span>营业执照.pdf</span>
                        </div>
                        <div class="img">
                            <img src="@/assets/images/2.png" alt="" />
                            <span>森威资质证书.pdf</span>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</template>
<script>
import Parting from "./components/parting";
import InfoText from "./components/infoText";
export default {
    components: {
        Parting,
        InfoText,
    },
    data() {
        return {
            items: [
                {
                    title: "企业名称",
                    des: "浙江浙坤工程管理有限公司浙江浙坤工程管理有限公司",
                },
                { title: "企业名称", des: "浙江浙坤工程管理有限公司" },
                { title: "是否有分支机构", des: "否" },
                { title: "是否有分支机构", des: "否" },
                { title: "法定代表人", des: "马成龙" },
                { title: "法定代表人", des: "马成龙" },
                { title: "企业联系人", des: "0571****2991" },
                { title: "法定代表人", des: "马成龙" },
                {
                    title: "企业名称",
                    des: "建筑装修装饰工程(二级),工程造价(甲级备份",
                },
                {
                    title: "企业名称",
                    des: "建筑装修装饰工程(二级),工程造价(甲级备份",
                },
                {
                    title: "企业名称",
                    des: "建筑装修装饰工程(二级),工程造价(甲级备份",
                },
                {
                    title: "企业名称",
                    des: "建筑装修装饰工程(二级),工程造价(甲级备份",
                },
            ],
            items2: [
                { title: "企业名称", des: "浙江浙坤工程管理有限公司" },
                { title: "企业名称", des: "浙江浙坤工程管理有限公司" },
                { title: "是否有分支机构", des: "否" },
                { title: "是否有分支机构", des: "否" },
                { title: "法定代表人", des: "马成龙" },
            ],
        };
    },
};
</script>
<style lang="less" scoped>
.pdetail {
    &-content {
        .info {
            padding: 24px 32px;
            background-color: #fff;
            margin-bottom: 24px;
            .item {
                padding-bottom: 10px;
                padding-top: 10px;
            }
            &-border {
                border: 2px solid #eeeeee;
                position: relative;
                .tag {
                    position: absolute;
                    top: 20px;
                    left: 30px;
                    i {
                        color: #facc14;
                        font-size: 40px;
                    }
                    span {
                        position: absolute;
                        top: 8px;
                        left: 14px;
                        font-size: 15px;
                        z-index: 10;
                        color: #fff;
                    }
                }
            }
            .download {
                display: flex;
                .img {
                    flex: 1;
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    span {
                        margin-top: 24px;
                        font-size: 28px;
                        color: #3196fa;
                    }
                }
            }
        }
        .mb0 {
            margin-bottom: 0;
        }
    }
}
</style>
