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
          placeholder="Input your id.."
          solo
          required
        ></v-text-field>
      </v-flex>
      <v-btn
        :disabled="!valid"
        @click="submit"
      >
        Login
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'login',
  data () {
    return {
      valid: true,
      check: [
        v => !!v || 'Please input your code',
        v => /^[a-zA-Z0-9- ,_]*$/.test(v) || 'Code must be valid'
      ]
    }
  },
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        axios
          .get('http://54.179.163.148/test/user/' + this.$refs.formid.value)
          .then(response => (
            this.$store.commit('changeid', this.$refs.formid.value),
            this.$store.commit('changepoint', response.data.point),
            this.getTransaction()
          ))
      }
    },
    getTransaction () {
      axios
        .get('http://54.179.163.148/test/transaction/user/' + this.$refs.formid.value)
        .then(response => (
          this.$store.commit('changetrans', response.data),
          this.$router.push('/')
        ))
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
