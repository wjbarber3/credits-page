<template>
  <main>
    <h1>{{ title }}</h1>
    <h2>{{ tagline }}</h2>
    <div class="options-wrapper">
      <credit-option
        v-for="option in creditOptions"
        v-bind:key="option.type"
        :creditOption="option"></credit-option>
    </div>
  </main>
</template>

<script>

import CreditOptionsData from '../assets/creditOptions.json';
import CreditOption from '../components/CreditOption.vue';


export default {
  name: 'CreditList',
  components: {
    CreditOption
  },
  data() {
    return {
      title: 'Stock up on Credits',
      tagline: 'Save money and get free bonus credits when you buy in bulk',
      creditOptions: [],
    }
  },
  methods: {
    getCreditOptions() {
      this.creditOptions = CreditOptionsData;
    }
  },
  created: function() {
    this.getCreditOptions();
    console.log(this.creditOptions);
  },
}

</script>

<style lang="scss" scoped>

  main {
    text-align: center;
    width: 960px;
    margin: 0 auto;
    max-width: 95%;
  }

  h2 {
    margin: 0;
  }

  .options-wrapper {
    margin: 50px auto 0;
  }

</style>