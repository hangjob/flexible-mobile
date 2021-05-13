<template>
    <div class="infoText">
        <div class="title">{{ title }}：</div>
        <div class="des">{{ des }}</div>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: "企业名称：",
        },
        des: {
            type: String,
            default: "浙江浙坤工程管理有限公司",
        },
    },
};
</script>
<style lang="less" scoped>
.infoText {
    width: 100%;
    display: flex;
    color: #333333;
    font-size: 28px;
    justify-content: center;
    .title {
        width: 246px;
        text-align: right;
    }
    .des {
        flex: 1;
        flex-shrink: 0;
        text-align: left;
    }
}
</style>
