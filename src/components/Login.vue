<template>
  <div id="login">
    <img src="https://static.arkavidia.id/5/images/logo.png" width="100px">
    <br>
    <h2 class="futura-bt bold primary--text">ARKAVIDIA 5.0</h2>
    <br>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-flex>
        <v-text-field
          v-model="code"
          :rules="check"
          label="Code"
          placeholder="Input your ID"
          solo
          required
          type="tel"
          class="centered-input"
        ></v-text-field>
      </v-flex>
      <v-btn
        :disabled="!valid"
        @click="submit"
        color="primary"
      >
        Check points
      </v-btn>

    </v-form>
    <br>
    <a>{{ msg }}</a>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'login',
  data () {
    return {
      valid: true,
      msg: null,
      check: [
        v => !!v || 'Please input your id',
        v => /^[a-zA-Z0-9- ,_]*$/.test(v) || 'Id must be valid'
      ]
    }
  },
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        axios
          .get('https://itfest.arkavidia.id/api/user/' + this.code)
          .then(response => {
            this.$store.commit('changeid', this.code)
            this.$store.commit('changepoint', response.data.point)
            this.checkId(response)
          })
      }
    },
    getTransaction () {
      axios
        .get('https://itfest.arkavidia.id/api/transaction/user/' + this.code)
        .then(response => {
          this.$store.commit('changetrans', response.data)
          this.$cookie.set('user_id', this.code, 1)
          this.$router.push('/')
        })
    },
    checkId (resp) {
      if (resp.data['id'] != null) {
        this.getTransaction()
      } else {
        this.msg = "Id doesn't exist. Please try again!"
      }
    }
  }
}
</script>

<style>
h2 {
  color: white;
}

a {
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

html, body {
  background-color: #FFFFF2;
}
.centered-input input {
  text-align: center !important;
}
</style>
