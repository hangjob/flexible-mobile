<template>
    <div class="search">
        <div class="search-container">
            <div class="search-content">
                <input type="text" placeholder="请输入"/>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.search {
    background-color: #ffffff;
    padding:  0 32px;
    &-container {
        padding: 28px 0;
        border-bottom: 2px solid #EEEEEE;
    }
    &-content {
        input {
            border: 0; // 去除未选中状态边框
            outline: none; // 去除选中状态边框
            height: 72px;
            background: rgba(238, 238, 238, 0.5);
            border-radius: 36px;
            width: 100%;
            text-indent: 28px;
            font-size: 24px;
        }
    }
}
</style>
