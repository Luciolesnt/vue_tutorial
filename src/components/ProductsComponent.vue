<template>
  <tr>
    <td>{{ nom }}</td>
    <button @click="order" :class="affichage">Commander !</button>
  </tr>
</template>

<script>
export default {
  props: {
    nom: String,
    affichage: String,
  },
  emit: ["newOrder"],
  methods: {
    order() {
      this.$emit("newOrder", this.nom);
    },
  },
};
</script>
