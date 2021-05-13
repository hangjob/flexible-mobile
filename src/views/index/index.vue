<template>
    <div class="index">
        <Tab />
        <Search />
        <ListText />
    </div>
</template>
<script>
// 代理企业基本信息
import Tab from "@/views/index/components/Tab";
import Search from "@/views/index/components/Search";
import ListText from "@/views/index/components/ListText";
export default {
    components: {
        Tab,
        Search,
        ListText,
    },
};
</script>
<style lang="less" scoped>
p {
    font-size: 28px;
    font-weight: 500;
}
</style>
