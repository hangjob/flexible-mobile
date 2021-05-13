<template>
    <div class="parting">
        <div class="parting-container">
            <div class="parting-content">
                <div class="lin"></div>
                <div class="title">{{ text }}</div>
                <div class="lin"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        text: {
            type: String,
            default: "",
        },
    },
};
</script>
<style lang="less" scoped>
.parting {
    background-color: #ffffff;
    &-content {
        display: flex;
        align-items: center;
        color: #3196fa;
        height: 96px;
        justify-content: center;
        border-bottom: 1px solid #eeeeee;
        .lin {
            width: 80px;
            height: 2px;
            background-color: #3196fa;
        }
        .title {
            padding: 0 28px;
            font-size: 28px;
            font-weight: bold;
        }
    }
}
</style>
