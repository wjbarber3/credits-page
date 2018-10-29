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
  },
  data () {
    return {
      headline: 'Stock up on Credits',
      subhead: 'Save money and get free bonus credits when you buy in bulk'
    }
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

</style>
