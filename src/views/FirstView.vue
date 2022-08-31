<template>
  <section>
    <h1 v-if="show">Hello {{ message }}</h1>
    <button @click="increment">{{ getTotal }}</button>
    <p>Le double du total est de {{ getDoubleTotal }}</p>
    <p>Login: <input type="text" v-model="user" /></p>
    <h2>Vous êtes connecté en tant que {{ user }}</h2>
    <section>
      <table>
        <thead>
          <tr>
            <th colspan="1">Produits disponibles</th>
          </tr>
        </thead>
        <tbody>
          <products-component
            v-for="(produit, index) in produits"
            v-bind:key="index"
            :nom="produit"
            :affichage="affichage"
            @newOrder="order"
          />
        </tbody>
      </table>
      <h2 v-if="commandes.length > 0">Produits commandés</h2>
      <ul>
        <li v-for="command in commandes" :key="command.index">
          {{ command }}
        </li>
      </ul>
    </section>
    <img :src="monImage" />
  </section>
</template>

<script>
import ProductsComponent from "../components/ProductsComponent.vue";
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
      user: "Lucie",
      message: "World",
      show: true,
      produits: ["Pizza", "Hamburger", "Cheese", "Tacos"],
      pourcentage: 60.7,
      estActif: true,
      affichage: "",
      commandes: [],
      monImage:
        "https://img.freepik.com/free-vector/cute-corgi-dog-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-4181.jpg?w=826&t=st=1661935723~exp=1661936323~hmac=73916fd3c0834f1947a90ec2db8c7d48e40811300a7474057d1768a8478ee87e",
    };
  },
  computed: {
    getTotal() {
      return this.$store.state.total;
    },
    getDoubleTotal() {
      return this.$store.getters.doubleTotal;
    },
    // TODO ... => implement userName from the store
    getUser() {
      return this.$store.state.userName;
    },
  },
  methods: {
    increment() {
      this.$store.commit("setTotal");
    },
    order(produit) {
      this.commandes.push(produit);
      this.affichage = "selected";
    },
  },
  components: { ProductsComponent },
};
</script>

<style lang="scss" scope>
button {
  color: white;
  background-color: black;
  border: none;
  cursor: pointer;
  &.selected {
    background-color: pink;
  }
}
</style>
