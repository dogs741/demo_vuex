<template>
  <div class="hello">
    <h1>{{ count }}</h1>
    <h2>{{ filters }}</h2>
    <h2>{{ countMap }}</h2>
    <button @click="addNumber">click</button><br>
    <button @click="addNumberMap(1)">clickMap</button>
    <br>
    <br>
    <br>
    <h2>{{ globalCount }}</h2>
    <button @click="addGlobalNumber">clickGlobal</button>
  </div>
</template>

<script>
import * as type from '@/store/account/type'
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
    count() {
      return this.$store.state.account.count;
    },
    filters() {
      return this.$store.getters['account/filters']
    },
    ...mapState('account', {
      countMap: 'count',
    }),
    globalCount() {
      return this.$store.state.count2;
    }
  },
  methods: {
    addNumber() {
      this.$store.dispatch(`account/${type.ACCOUNT_ADD_NUMBER}`).then(val => console.log(`account val : ${val}`));
    },
    ...mapActions('account', {
      addNumberMap: type.ACCOUNT_ADD_NUMBER
    }),
    addGlobalNumber() {
      this.$store.dispatch(type.ACCOUNT_GLOBAL_ADD_NUMBER).then(val => console.log(`global val : ${val}`));
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
