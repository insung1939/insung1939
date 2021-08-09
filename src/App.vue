<template>
  <div id="app">
    <Header />
    <div id="content" class="content">
      <router-view></router-view>
    </div>
    props example(parent) : {{ propsData }}
    <button @click="addProps">props</button>
    <br />

    state example : {{ $store.state.count }} getter example :
    {{ gettersParent }}
    <button @click="addCount">+</button>
    <button @click="subCount">-</button> <br />

    mutation,actions example : {{ $store.state.integer }}
    <button @click="mutations">x3</button>
    <button @click="actions">after 3s</button>
    <br />

    <!-- <button @click="addCounter">+</button>
    <button @click="subCounter">-</button> -->

    <Child :props="propsData" v-on:subProps="substraction" />
  </div>
</template>

<script>
import Header from "./components/layout/Header.vue";
import Child from "./Child.vue";
import { mapGetters, mapMutations, mapActions } from "vuex"; // mapActions 넣어주기, , mapMutations

export default {
  name: "App",
  components: {
    Header,
    Child
  },
  data() {
    return {
      propsData: 100
    };
  },
  computed: mapGetters({
    gettersParent: "gettersCount"
  }),
  methods: {
    ...mapMutations({ mutations: "mutationsTriple" }),
    ...mapActions({ actions: "actionsTime" }),
    // mutations() {
    //   this.$store.commit("mutationsTriple");
    // },
    //  actions() {
    //   this.$store.dispatch("actionsTime");
    // },
    addProps() {
      this.propsData++;
    },
    substraction() {
      this.propsData--;
    },
    addCount() {
      this.$store.state.count++;
    },
    subCount() {
      this.$store.state.count--;
    }

    // getters() {
    //   this.$store.dispatch("gettersCount");
    // }

    // addCounter() {
    //   this.$store.state.count++;
    //   this.$store.dispatch("addCounter");
    // },
    // subCounter() {
    //   // this.counter--;
    //   this.$store.state.count--;
    //   this.$store.state.counter--; //data속성으로 선언한 것들 제외함 그리고 하위컴포넌트로 데이터 전달 x
    // }
  }
};
</script>

<style></style>
