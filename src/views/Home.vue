<template>
  <div>
    <h1>Welcome to {{ title }}!</h1>
    <input type="text" v-model="input1" />
    <button type="button" @click="getData">Get</button>
    <button type="button" @click="setData">Set</button>
    <select class="from-control" v-model="region" @change="changeRegion()">
      <option v-for="(data, index) in options" :key="index" :value="data.v">
        {{ data.t }}
      </option>
    </select>

    <table class="table table-bordered" v-if="tableShow">
      <tr v-for="(data, index) in options" :key="index" :value="data.v">
        <td>{{ data.v }}</td>
        <td>{{ data.t }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "뷰 세미나",
      title2: "seoul",
      input1: "abcd",
      options: [
        { v: "S", t: "seoul" },
        { v: "J", t: "jeju" },
        { v: "B", t: "busan" }
      ],
      region: "B",
      tableShow: false
    };
  },
  watch: {
    input1() {
      console.log(this.input1);
    }
  },
  methods: {
    getData() {
      alert(this.input1);
    },
    setData() {
      this.input1 = "12345";
    },
    changeRegion() {
      alert(this.region);
    }
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  },
  destroyed() {
    console.log("destroyed");
  }
};
</script>
