<template>
  <main>
    <h1>{{ title }}</h1>
    <h2>{{ tagline }}</h2>
    <div class="options-wrapper">
      <credit-option
        v-for="(option, index) in creditOptions"
        :key="option.type"
        :option="option"
        :selected="index === selectedIndex"
        :index="index"
        :creditOption="option"
        @emitSelection="updateSelection"></credit-option>
    </div>
    <div class="clearfix"></div>
    <payment-form
      :price="selectedPrice"></payment-form>
  </main>
</template>

<script>

import CreditOptionsData from '../assets/creditOptions.json';
import CreditOption from '../components/CreditOption';
import PaymentForm from '../components/PaymentForm';

export default {
  name: 'CreditList',
  components: {
    CreditOption,
    PaymentForm
  },
  data() {
    return {
      title: 'Stock up on Credits',
      tagline: 'Save money and get free bonus credits when you buy in bulk',
      creditOptions: [],
      selectedIndex: 2,
      selectedPrice: 100,
      defaultPaymentType: 'Credit Card'
    }
  },
  methods: {
    getCreditOptions() {
      this.creditOptions = CreditOptionsData;
    },
    updateSelection(index, price) {
      this.selectedIndex = index;
      this.selectedPrice = price;
    }
  },
  created: function() {
    this.getCreditOptions();
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

  h1 {
    margin: 0 0 24px;
  }

  h2 {
    margin: 0;
  }

  .options-wrapper {
    margin: 50px auto 0;
  }

</style>