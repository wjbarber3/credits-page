<template>
  <div id="app">
    <credit-list></credit-list>
  </div>
</template>

<script>

import CreditList from './components/CreditList.vue';

export default {
  name: 'app',
  components: {
    CreditList
  }
}
</script>

<style lang="scss">

  @import 'styles/typography.scss';
  @import 'styles/variables.scss';

  body {
    background: $light_grey;
    padding-top: 43px;
  }

  * {
    box-sizing: border-box;
  }

  .clearfix:after, .clearfix:before {
    display: table;
    content: '';
    line-height: 0;
  }

  .clearfix:after {
    clear: both;
  }

</style>
