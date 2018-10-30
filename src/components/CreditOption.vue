<template>
  <div class="option" :class="{'selected': selected}" @click.stop="emitSelection">
    <div class="option-inner">
      <div v-if="selected" class="cue-selection"></div>
      <h3>${{ option.price }}</h3>
      <p :class="[ option.bonus > 0 ? 'has-bonus': '' ]"
         v-html="option.bonus > 0 ? '+ $' + option.bonus + ' bonus' : 'No Bonus'"></p>
      <div class="title-container">
        <p>{{ option.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  
  export default {
    name: 'CreditOption',
    props: {
      option: {},
      index: Number,
      selected: false
    },
    methods: {
      emitSelection() {
        this.$emit('emitSelection', this.index, this.option.price);
      }
    }
  }

</script>

<style lang="scss" scoped>
  
  @import '../styles/variables.scss';

  .option {
    background-color: white;
    width: calc(20% - 12px);
    float: left;
    display: inline-block;
    position: relative;
    background: #fff;
    text-align: center;
    padding: 5px;
    margin: 0 15px 0 0;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.25);
    border-radius: 5px;
    transition: all .2s ease-in-out;
    cursor: pointer;
    &:last-of-type {
      margin-right: 0px;
    }
    &:hover {
      transform: translateY(-6px);
    }
    &.selected {
      transform: none;
      .option-inner {
        border-color: $green;
        .title-container p {
          font-weight: 700;
          color: $dark_grey;
        }
      }
    }
  }

  .option-inner {
    border-radius: 5px;
    border: 2px solid $off_white;
    .title-container {
      padding: 14px 16px;
      border-top: 1px solid $off_white;
      margin-top: 40px;
      p {
        font-size: 13px;
      }
    }
  }

  .cue-selection {
    position: absolute;
    width: 37px;
    height: 37px;
    top: 5px;
    right: 5px;
    border-top: 35px solid $green;
    border-left: 35px solid transparent;
    &:after {
      font-family: 'FontAwesome';
      content: '\f00c';
      font-size: 12px;
      color: $white;
      position: absolute;
      top: -28px;
      right: 4px;
    }
  }

  h3 {
    margin: 50px 0 5px;
  }

  p {
    &.has-bonus {
      color: $green;
    }
  }

  @media(max-width: 767px) {
    .option {
      width: 100%;
      margin: 0 0 15px 0;
    }
  }

</style>