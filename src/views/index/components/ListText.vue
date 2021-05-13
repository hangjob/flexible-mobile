<template>
    <div class="listText">
        <div class="listText-container">
            <div class="listText-content">
                <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
                    <van-list
                        v-model="loading"
                        :finished="finished"
                        finished-text="没有更多了"
                        @load="onLoad"
                    >
                        <div
                            class="item"
                            v-for="(item, index) in list"
                            :key="index"
                            @click="handDetail"
                        >
                            <div class="item-box">
                                <div class="item-icon">
                                    <i class="iconfont icon-download"></i>
                                </div>
                                <div class="item-info">
                                    <div class="title">
                                        <h6>浙江森威建设管理有限公司</h6>
                                        <p>2021/05/08</p>
                                    </div>
                                    <div class="des">
                                        有信息变更
                                    </div>
                                </div>
                            </div>
                        </div>
                    </van-list>
                </van-pull-refresh>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: [],
            loading: false,
            finished: false,
            refreshing: false,
        };
    },
    methods: {
        onLoad() {
            setTimeout(() => {
                if (this.refreshing) {
                    this.list = [];
                    this.refreshing = false;
                }

                for (let i = 0; i < 10; i++) {
                    this.list.push(this.list.length + 1);
                }
                this.loading = false;

                if (this.list.length >= 40) {
                    this.finished = true;
                }
            }, 500);
        },
        onRefresh() {
            // 清空列表数据
            this.finished = false;

            // 重新加载数据
            // 将 loading 设置为 true，表示处于加载状态
            this.loading = true;
            this.onLoad();
        },
        handDetail() {
            this.$router.push({ path: "/pdetail", query: {} });
        },
    },
};
</script>
<style lang="less" scoped>
.listText {
    &-content {
        .item {
            padding-left: 32px;
            padding-right: 32px;
            background-color: #fff;
            &-box {
                padding-top: 26px;
                padding-bottom: 36px;
                border-bottom: 2px dashed #eeeeee;
                display: flex;
            }
            .item-icon {
                margin-right: 16px;
                i {
                    font-size: 26px;
                    color: #3196fa;
                    line-height: 42px;
                }
            }
            .item-info {
                display: flex;
                flex: 1;
                flex-direction: column;
                .title {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    h6 {
                        line-height: 42px;
                        font-size: 28px;
                        color: #333333;
                        margin-bottom: 6px;
                    }
                    p {
                        font-size: 24px;
                        color: #999999;
                        line-height: 34px;
                    }
                }
                .des {
                    font-size: 24px;
                    color: #666666;
                    line-height: 34px;
                }
            }
        }
        .active {
            background-color: rgba(87, 155, 255, 0.08);
        }
    }
}
</style>
