<template>
  <div class="payment-container">
    <h4>Complete Purchase</h4>
      <form @submit.prevent="validateBeforeSubmit">

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
          
          <!-- If User selected Credit Card -->
          <div v-if="paymentType === 'Credit Card'">
            <div class="type-strip">
              <div class="checkbox">
                <input type="checkbox" id="saveCardInfo" value="true" v-model="saveCardInfo">
                <label for="saveCardInfo">
                  <span class="custom-checkbox" :class="{ checked: saveCardInfo }"></span>
                  Save</label>
              </div>
              <p class="price-indicator">${{ price }}</p>
              <div class="clearfix"></div>
            </div>
            <div class="fields">

              <!-- Card Number -->
              <div class="control">
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  v-model="cardNumber"
                  v-validate="'required|credit_card'"
                  :class="{'input': true, 'is-danger': errors.has('cardNumber') }">
                <span v-show="errors.has('cardNumber')" class="help is-danger">Please enter a valid credit card number</span>
              </div>

              <!-- Expiration Date -->
              <div class="control exp"> 
                <input
                  name="expiration"
                  type="text"
                  placeholder="MM/YY"
                  v-model="expiration"
                  v-validate="'required|date_format:MM/YY'"
                  :class="{'input': true, 'is-danger': errors.has('expiration') }">
                <span v-show="errors.has('expiration')" class="help is-danger">Match MM/YY</span>
              </div>
              
              <!-- CVC -->
              <div class="control cvc">
                <input
                  name="cvc"
                  type="text"
                  placeholder="CVC"
                  v-model="cvc"
                  v-validate="'required|numeric|length:3,4'"
                  :class="{'input': true, 'is-danger': errors.has('cvc') }">
                <span v-show="errors.has('cvc')" class="help is-danger">Must be 3 - 4 numbers</span>
              </div>
            </div>
          </div>
        
          <!-- If User Selects payPal -->
          <div v-if="paymentType === 'PayPal'">
            <div class="type-strip">
              <img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_100x26.png" width="58" height="15" alt="PayPal Logo">
              <i class="fa fa-lock"></i>
              <p class="price-indicator">${{ price }}</p>
              <div class="clearfix"></div>
            </div>
          </div>

        </div>
        
        <!-- Bind button classes and html based on paymentType -->
        <button type="submit" name="button"
          :class="buttonClassObject"
          v-html="paymentType === 'Credit Card' ? 'Buy $' + price + ' Credits' : 'Continue on PayPal'">Add Book</button>

      </form>

  </div>
</template>

<script>

  // import { required, minLength, between, numeric } from 'vuelidate/lib/validators';

  export default {
    name: 'PaymentForm',
    props: {
      price: Number
    },
    data() {
      return {
        cardNumber: null,
        expiration: null,
        cvc: null,
        name: '',
        paymentType: 'Credit Card',
        saveCardInfo: true
      }
    },
    methods: {
      // this.$emit('confirmCheckout', price);
      validateBeforeSubmit() {
        this.$validator.validateAll().then((result) => {
          if (result) {
            // eslint-disable-next-line
            alert('Form Submitted!');
            return;
          }
        });
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
    background-color: $light_grey;
    display: block;
    padding: 5px 20px;
    margin-bottom: 10px;
    .checkbox, img, i {
      float: left;
    }
    .price-indicator {
      float: right;
      color: $grey;
      font-weight: 800;
    }
    i {
      margin-left: 8px;
      font-size: 16px;
      color: $grey;
    }
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
    height: 145px;
    margin: 0 auto;
    display: inline-block;
    border-radius: 3px;
    .fields {
      padding: 0 10px;
    }
    .control {
      width: 100%;
      margin-bottom: 20px;
      position: relative;
      &.exp {
        width: 65px;
        float: left;
      }
      &.cvc {
        width: 55px;
        float: left;
        margin-left: 10px;
        span {
          width: 100px;
        }
      }
      input {
        width: 100%;
      }
      span {
        color: $grey;
        font-size: 9px;
        width: 100%;
        text-align: left;
        display: block;
        margin-top: 1px;
        position: absolute;
        &.is-danger {
          color: $danger
        }
      }
    }
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

  @media(max-width: 767px) {
    .radio-group-label {
      display: block;
      margin: 0 0 10px;
    }
    button {
      width: 100%;
    }
    .fields-wrap {
      width: 100%;
    }
  }

</style>