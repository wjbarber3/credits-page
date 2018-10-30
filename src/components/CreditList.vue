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
      :price="selectedPrice"
      @confirmCheckout="alertConfirmation"></payment-form>
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
      selectedBonus: 10,
      defaultPaymentType: 'Credit Card'
    }
  },
  methods: {
    // Mimic Get call to receive initial Data
    getCreditOptions() {
      this.creditOptions = CreditOptionsData;
    },
    updateSelection(index, price, bonus) {
      this.selectedIndex = index;
      this.selectedPrice = price;
      this.selectedBonus = bonus;
    },
    // Recieve the payment type from the child event emitter and alert user based that
    alertConfirmation(paymentType) {
      let message = '';
      if (paymentType === 'Credit Card') {
        // Update message based on whether or not the user will be receiving a bonus
        if ( this.selectedBonus > 0 ) {
          message = "Woohoo! You got " + this.selectedPrice + " bucks worth of credits and a $" + this.selectedBonus + " bonus!!"
        } else {
          message = "Woohoo! You got " + this.selectedPrice + " bucks worth of credits!!"
        }
      }
      if (paymentType === 'PayPal') {
        message = "Woohoo! Off to PayPal for $" + this.selectedPrice;
      }
      alert(message);
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