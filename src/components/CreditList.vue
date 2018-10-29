<template>
  <div>
    <h1>{{ title }}</h1>
    <h2>{{ tagline }}</h2>
  </div>
</template>

<script>

export default {
  name: 'BookList',
  data() {
    return {
      title: 'Stock up on Credits',
      tagline: 'Save money and get free bonus credits when you buy in bulk',
      creditOptions: [],
    }
  }
}

</script>

<style lang="scss">
</style>