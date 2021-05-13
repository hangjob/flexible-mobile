<template>
    <div class="tab">
        <div class="tab-container">
            <div class="tab-content">
                <div
                    :class="['tag', activeClass(1)]"
                    @click="handactive({ url: 'index' })"
                >
                    代理企业基本信息
                </div>
                <div
                    :class="['tag', activeClass(2)]"
                    @click="handactive({ url: 'agent' })"
                >
                    代理季度考核结果
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        active: {
            type: Number || String,
            default: 1,
        },
    },
    computed: {
        activeClass() {
            return function(active) {
                return this.active === active ? "active" : null;
            };
        },
    },
    methods: {
        handactive({ url }) {
            this.$router.push({
                path: url,
            });
        },
    },
};
</script>
<style lang="less" scoped>
.tab {
    background-color: #fff;
    margin-bottom: 2px;
    &-container {
    }
    &-content {
        display: flex;
        height: 96px;
        align-items: center;
        .tag {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 96px;
            font-size: 28px;
            &.active {
                border-bottom: 2px solid #3196fa;
                font-weight: bold;
            }
        }
    }
}
</style>
