<template>
  <div id="login">
    <img src="../assets/logo.png" width="100px">
    <br>
    <h2>Arkavidia 5.0</h2>
    <br>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-flex>
        <v-text-field
          v-model="code"
          :rules="check"
          label="Code"
          ref="formid"
          placeholder="Input your code.."
          solo
          required
        ></v-text-field>
      </v-flex>
      <v-btn
        :disabled="!valid"
        @click="submit"
        v-bind:to="'/'"
      >
        Login
      </v-btn>
    </v-form>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'login',
  data () {
    return {
      valid: true,
      msg: null,
      check: [
        v => !!v || 'Please input your code',
        v => /^[a-zA-Z0-9- ,_]*$/.test(v) || 'Code must be valid'
      ]
    }
  },
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        // axios
        //  .get('/')
        //  .then(response => (this.msg = response))
        this.$store.commit('changeid', this.$refs.formid.value)
        this.$store.commit('changepoint', 453)
        this.$store.commit('changetrans', [
          { name: 'Bukalapak', points: 101 },
          { name: 'Goodie Bag', points: -51 },
          { name: 'Agate', points: 71 }
        ])
        // this.$refs.formid.value
      }
    }
  }
}
</script>

<style>
h2 {
  color: white;
}

.v-messages__message {
  color: white;
  font-size: 12px;
}

.v-form {
  width: 80%;
  margin-left: 10%;
}

#login {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
