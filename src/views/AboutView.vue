<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>Total : {{ getTotal }}</h2>
  </div>
</template>

<script>
export default {
  computed: {
    getTotal() {
      return this.$store.state.total;
    },
  },
};
</script>
