<template>
<div>
  <el-row class="panel-group" :gutter="20">
    <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
      <div class='card-panel'>
        <div class="card-panel-icon-wrapper icon-documentation">
          <svg-icon icon-class="documentation" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">任务发布量</div>
           <span class="card-panel-num">5000</span>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-form">
          <svg-icon icon-class="form" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">已结单数量</div>
          <span class="card-panel-num">2000</span>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-star">
          <svg-icon icon-class="star" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">已完成数量</div>
           <span class="card-panel-num">3000</span>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
      <div class='card-panel'>
        <div class="card-panel-icon-wrapper icon-send">
          <svg-icon icon-class="send" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">按时完成数量</div>
           <span class="card-panel-num">2000</span>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-moneys">
          <svg-icon icon-class="moneys" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">已结算数量</div>
          <span class="card-panel-num">3000</span>
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-peoples">
          <svg-icon icon-class="peoples" class-name="card-panel-icon" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">服务商数量</div>
          <span class="card-panel-num">15000</span>
        </div>
      </div>
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {

}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.panel-group {
  // margin-top: 18px;
  .card-panel-col{
    margin-bottom: 20px;
  }
  .card-panel {
    height: 100px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);
    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }
      .icon-documentation {
         background: #40c9c6;
      }
      .icon-form {
        background: #36a3f7;
      }
      .icon-moneys {
        background: #f4516c;
      }
      .icon-star {
        background: #f4516c
      }
      .icon-peoples {
        background: #36a3f7;
      }
      .icon-send{
        background: #e46fea;
      }
    }
    .icon-documentation {
      color: #40c9c6;
    }
    .icon-form {
      color: #36a3f7;
    }
    .icon-moneys {
      color: #f4516c;
    }
    .icon-star {
      color: #f4516c
    }
    .icon-peoples {
      color: #36a3f7;
    }
    .icon-send{
        color: #e46fea;
      }
    .card-panel-icon-wrapper {
      float: left;
      margin: 10px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }
    .card-panel-icon {
      float: left;
      font-size: 48px;
    }
    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;
      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }
      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}
</style>
