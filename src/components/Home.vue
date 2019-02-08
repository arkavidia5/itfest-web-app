<template>
  <div id="home">
     <v-toolbar dark color="primary" v-if="this.$route.path != '/login'">
        <v-spacer></v-spacer>
          <v-toolbar-title class="white--text futura-bt">
            <v-layout class="row">
            <img src="https://static.arkavidia.id/5/images/logo.svg" alt="logo" height="30">
            <div class="ml-2">ARKAVIDIA 5.0</div>
            </v-layout>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-menu offset-y>
            <v-btn
              slot="activator"
              icon
            >
              <v-icon>more_vert</v-icon>
            </v-btn>
            <v-list>
              <v-list-tile
                @click="deleteCookie"
              >
                <v-list-tile-title>Log Out</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>

        </v-toolbar>
      <v-flex>
        <v-tabs
          v-model="active"
          color="primary"
          dark
          slider-color="accent"
          centered
          fixed-tabs
        >
          <v-tab ripple>
            Points
          </v-tab>
          <v-tab ripple>
            Maps
          </v-tab>
          <v-tab-item
            key="0"
          >
          </v-tab-item>
          <v-tab-item key="1">
          </v-tab-item>
        </v-tabs>
      </v-flex>
       <div id="content" v-if="active==0">
        <div id="points">
          <h1>Your Points</h1>
          <div id="point">{{ $store.getters.point }}</div>
          <h3>Visit all cluster and get<br>additional point!</h3>
        </div>
        <barcode :value="$cookie.get('user_id')" format="code128"></barcode>
        <hr>
        <div id="history">
        <h1 class="primary--text">History</h1>
        <v-layout class="row">
          <v-flex class="md8 offset-md2 xs12">
          <v-data-table
            v-if="$store.getters.transaction"
            :headers="headers"
            :items="$store.getters.transaction"
          >
            <template slot="items" slot-scope="props">
              <td align="center">{{ props.item.item }}</td>
              <td align="center" v-if="props.item.total_price > 0" class="tpointr">-{{props.item.total_price}}</td>
              <td align="center" v-else class="tpointg">+{{props.item.point}}</td>
              <td align="center">{{formatTime(props.item.created_at)}}</td>
              <!-- <td><span class="tpointr"><b>-{{ prop.item.total_price }} Points</b></span>{{props.item.point}}</td> -->
              <!-- <td class="text-xs-right">{{ props.item.total_price}}</td> -->
            </template>
          </v-data-table>
          </v-flex>
        </v-layout>
        <br>
        </div>
      </div>
      <Map v-if="active == 1"></Map>
    </div>

</template>

<script>
import Map from './Map'
import VueBarcode from 'vue-barcode'

export default {
  name: 'home',
  components: {
    Map,
    'barcode': VueBarcode
  },
  data: () => ({
    active: 0,
    headers: [
      {
        text: 'Transaction History',
        value: 'history',
        sortable: false,
        align: 'center'
      },
      {
        text: 'Points',
        value: 'points',
        sortable: false,
        align: 'center'
      },
      {
        text: 'Time',
        value: 'time',
        sortable: false,
        align: 'center'
      }
    ]
  }),
  methods: {
    deleteCookie () {
      this.$cookie.delete('user_id')
      this.$router.push('/login')
    },
    formatTime (time) {
      return new Date(time).toLocaleString()
    }
  }
}
</script>

<style>
hr {
  border: none;
  width: 90%;
  height: 1px;
  background-color: #cccccc;
  margin-left: 5%;
}

h1 {
  color: #646464;
}

h2 {
  color: white;
}

h3 {
  color: #a2b0bd;
}

h4 {
  margin-top: 10px;
  margin-left: 5%;
  float: left;
  font-size: 15px;
}

a {
  font-size: 13px;
  color: white;
  text-decoration: none;
}

#head {
  background-color: #0b6ad6;
}

html, body {
  background-color: white;
}

#head, #content {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.nav {
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
}

.nav li {
  display: inline;
  padding: 10%;
}

.nav a {
  display: inline-block;
  padding: 4px;
}

#points {
  padding: 20px 0 20px 0;
}

#point {
  color: #fdbc02;
  font-size: 75px;
  font-weight: bold;
}

.tpointg {

  color: #369fb2;
}

.tpointr {

  color: #c8101a;
}

.tname {
  float: right;
  margin-top: 8px;
  margin-right: 5%;
  color: #999999;
  font-size: 16px;
}
svg>rect {
  fill: none !important;
}

</style>
