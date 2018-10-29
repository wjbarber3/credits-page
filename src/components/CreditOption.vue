<template>
  <div class="option">
    <div class="option-inner">
      
    </div>
  </div>
</template>

<script>
  
  export default {
    name: 'BookItem',
    props: {
      creditOption: {}
    },
    // methods: {
    //   bookDelete(index) {
    //     this.$emit('removeBook', index)
    //   }
    // }
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
    &:last-of-type {
      margin-right: 0px;
    }
  }

</style>