<template>
  <div>
    <hr />
    <!-- Child counter: {{ $store.state.counter }} <br /> -->
    props example(child): {{ props }} <button @click="emitBtn">emit</button>
    <br />
    getter exmaple: {{ gettersChild }} <br />
    <button>+</button>
    <button>-</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["props"],
  computed: mapGetters({
    gettersChild: "gettersCount"
  }),
  methods: {
    emitBtn() {
      this.$emit("subProps");
    }
  }
};
</script>
