<template>
  <div class="payment-container">
    <h4>Complete Purchase</h4>
      <form v-on:submit.prevent="creditSubmit(price)">

        <div class="radio-group">
          <label class="radio-group-label">Payment Method:</label>
          <div class="radios">
            <div class="radio">
              <input type="radio" id="creditCard" value="Credit Card" v-model="paymentType" checked>
              <label class="credit" for="creditCard">
                <span class="custom-radio" :class="{ checked: paymentType == 'Credit Card' }"></span>
                <i class="credit-card"></i>
                Credit Card</label>
            </div>
            <div class="radio">
              <input type="radio" id="payPal" value="PayPal" v-model="paymentType">
              <label class="paypal" for="payPal">
                <span class="custom-radio" :class="{ checked: paymentType == 'PayPal' }"></span>
                <i class="paypal"></i>
                PayPal</label>
            </div>
          </div>
        </div>

        <div class="fields-wrap">
          <div v-if="paymentType === 'Credit Card'">
            <div class="type-strip"></div>
            <input type="text" name="cardNumber" placeholder="Card Number" v-model="cardNumber">
            <input type="text" name="expiration" placeholder="MM/YY" v-model="expiration">
            <input type="number" name="cvc" placeholder="CVC" v-model="cvc">
          </div>
          <div v-if="paymentType === 'PayPal'">
            <div class="type-strip"></div>
            paypal
          </div>
        </div>

        <button type="submit" name="button"
          :class="buttonClassObject"
          v-html="paymentType === 'Credit Card' ? 'Buy $' + price + ' Credits' : 'Continue on PayPal'">Add Book</button>

      </form>
  </div>
</template>

<script>
  export default {
    name: 'PaymentForm',
    props: {
      price: Number,
      cardNumber: String,
      expiration: String,
      cvc: Number
    },
    methods: {
      bookSubmit(price) {
        this.$emit('confirmCheckout', price);
      }
    },
    data() {
      return {
        paymentType: 'Credit Card'
      }
    },
    computed: {
      buttonClassObject: function () {
        return {
          'credit-card': this.paymentType === 'Credit Card',
          'paypal': this.paymentType === 'PayPal'
        }
      }
    }
  }
</script>

<style scoped lang="scss">

  @import '../styles/variables.scss';

  .payment-container {
    margin: 30px 0 0;
  }

  h4 {
    display: block;
    width: 100%;
    border-bottom: 1px solid $grey;
    padding-bottom: 10px;
  }

  .radio-group {
    max-width: 400px;
    margin: 15px auto 15px;
  }

  .radio-group-label {
    margin-right: 20px;
  }

  .radio {
    margin-right: 15px;
    &:last-of-type {
      margin-right: 0px;
    }
    i {
      vertical-align: top;
      margin: -1px 2px 0 0;
      position: relative;
      display: inline-block;
      width: 30px;
      height: 20px;
      &:before {
        content: ' ';
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        background-size: 533px 509.5px;
        background-image: url('../assets/icon@2x.png');
      }
    }
  }

  .type-strip {
    width: 100%;
  }

  i.credit-card:before {
    background-position: -288px -276px;
    top: 2px;
    left: 0px;
  }

  i.paypal:before {
    background-position: -120px -326px;
    top: 2px;
    left: 0px;
  }

  .fields-wrap {
    padding: 10px 0;
    background: url('../assets/cc-bg.png');
    border: 1px solid $med_grey;
    width: 200px;
    height: 130px;
    margin: 0 auto;
    display: inline-block;
    border-radius: 3px;
  }

  button {
    display: block;
    width: 200px;
    margin: 10px auto;
    text-align: center;
    min-height: 47px;
    color: $white;
    font-weight: 800;
    font-size: 16px;
    cursor: pointer;
    border: none;
    &.credit-card {
      background: $dark_green;
    }
    &.paypal {
      background-color: $med_grey;
      color: $grey;
    }
    &:hover {
      opacity: .7;
    }
  }

</style>