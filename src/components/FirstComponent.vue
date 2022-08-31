<template>
  <section>
    <h1 v-if="show">Hello {{ message }}</h1>
    <button @click.prevent="execute">Chiffre {{ compteur }}</button>
    <img :src="monImage" />
  </section>
</template>

<script>
export default {
  beforeCreate: () => console.log("Before Created"),
  created: () => console.log("Created"),
  beforeMount: () => console.log("Before Mount"),
  mounted: () => console.log("Mounted"),
  beforeUpdate: () => console.log("Before Update"),
  updated: () => console.log("Updated"),
  beforeUnmount: () => console.log("Before Destroy / Unmount"),
  unmounted: () => console.log("Destroyed / Unmounted"),

  data() {
    return {
      message: "World",
      show: true,
      compteur: 13,
      pourcentage: 60.7,
      estActif: true,
      tableauVide: [],
      monImage:
        "https://img.freepik.com/free-vector/cute-corgi-dog-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-4181.jpg?w=826&t=st=1661935723~exp=1661936323~hmac=73916fd3c0834f1947a90ec2db8c7d48e40811300a7474057d1768a8478ee87e",
    };
  },

  methods: {
    execute: () => {
      return this.compteur++;
    },
  },
};
</script>

<style lang="scss"></style>
