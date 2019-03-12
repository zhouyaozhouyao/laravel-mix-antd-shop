<template>
  <div>
    <a-row style="margin: 0 -12px">
      <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
        <chart-card title="总销售额" total="￥ 189,345">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <trend style="margin-right: 16px" term="同周比" :percent="12" :is-increase="true" :scale="0" />
            <trend term="日环比" :target="100" :value="89" :scale="0" />
          </div>
          <div slot="footer">日均销售额<span> ￥234.56</span></div>
        </chart-card>
      </a-col>

      <a-col :sm="24" :md="12" :xl="6" style="padding: 12px 12px 24px;">
        <chart-card title="总销售额" total="￥ 183,345">
          <a-tooltip title="指标说明" slot="action">
            <a-icon type="info-circle-o" />
          </a-tooltip>
          <div>
            <mini-area />
          </div>
          <div slot="footer">日访问量<span> 123,4</span></div>
        </chart-card>
      </a-col>

      
    </a-row>
  </div>
</template>

<script>
import ChartCard from '../../components/card/ChartCard'
import MiniArea from '../../components/chart/MiniArea'
// import MiniBar from '../../components/chart/MiniBar'
// import MiniProgress from '../../components/chart/MiniProgress'
// import Bar from '../../components/chart/Bar'
// import RankingList from '../../components/chart/RankingList'
// import HotSearch from '../../components/analysis/HotSearch'
// import SalesData from '../../components/analysis/SalesData'
import Trend from '../../components/chart/Trend'

const rankList = [];

for (let i = 0; i < 8; i++) {
  rankList.push({
    name: '桃源村' + i + '号店',
    total: 1234.56 - i * 100
  })
}

export default {
  name: 'analysis',
  data () {
    return {
      rankList
    }
  },
  components: { Trend, MiniArea, ChartCard }
  // components: {Trend, SalesData, HotSearch, RankingList, Bar, MiniProgress, MiniBar, MiniArea, ChartCard}
}
</script>

<style lang="less" scoped>
  .extra-wrap{

  }
  .extra-item{
    display: inline-block;
    margin-right: 24px;
    a{
      margin-left: 24px;
    }
  }
</style>
