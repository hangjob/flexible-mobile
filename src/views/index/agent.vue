<template>
    <div class="index">
        <Tab :active="2" />
        <ListTextAgent />
    </div>
</template>
<script>
// 代理季度考核结果
import Tab from "@/views/index/components/Tab";
import ListTextAgent from "@/views/index/components/ListTextAgent";
export default {
    components: {
        Tab,
        ListTextAgent,
    },
};
</script>
<style lang="less" scoped></style>
