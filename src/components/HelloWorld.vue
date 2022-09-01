<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    Return Value from setup : {{ nameKey }}
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  name: "HelloWorld",
  props: {
    msg: { String, require: true },
  },
  // called almost at the same time as created
  // setup can not access this
  setup(_, context) {
    // reactive piece of data, can take a default value
    // If the value change, Vue will be aware of the change
    // And so any computed proprety calculating the value, will be recalculated
    const name = ref("Lucie");
    // lifecycle hooks
    onMounted(() => {
      // .value is used in the javascript code but not in the template code
      console.log(`Hello ${name.value}.`);
      console.log(context);
    });

    return { nameKey: name };
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/homeView.scss";
</style>
