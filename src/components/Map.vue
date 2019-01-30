<template>
  <div id="itfest-map">
    <div id="mapid" v-bind:style="{ height: windowHeight + 'px' }"></div>
  </div>
</template>

<script src="https://unpkg.com/leaflet@1.3.4/dist/leaflet.js"></script>

<script>
import L from 'leaflet'

export default {
  name: 'itfest-map',

  data() {
    return {
      windowHeight: window.innerHeight
    }
  },

  mounted () {
    /* (Bug specific to Chrome) Get rid of automatic focussing when user presses a control button. */

    L.Control.include({
      _refocusOnMap: L.Util.falseFn
    });

    this.initMap()
  },

  methods: {
    insertRect(params) {
      var meter = 0.000014
      var end_point = [params.start_point[0] - params.height*meter, params.start_point[1] + params.width*meter]
      var rect = L.rectangle([params.start_point, end_point], {color: params.color, weight: 1}).addTo(params.map)
      var divIcon = L.divIcon({className: 'my-div-icon', html:params.divIcon})
      if(params.divIcon){
        L.marker(rect.getBounds().getCenter(), {icon: divIcon}).addTo(params.map)
      }
      return rect
    },

    initMap () {
      var meter = 0.000014
      var itb_center = [-6.8917, 107.61038]

      var mymap = L.map('mapid').setView(itb_center, 20)
      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 25,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiYXVkcnlueW9uYXRhIiwiYSI6ImNqcTlnenBudjExdnozeHQ1bnIzN3czdmoifQ.6cGjJzKovHB68ExIIbcCng'
      }).addTo(mymap)

      var marker = L.marker(itb_center).addTo(mymap)

      var customControl = L.Control.extend({
        options: {
          position: 'topright'
        },
        onAdd: function (map) {
          var container = L.DomUtil.create('a')
          container.innerHTML = 'Re-center'
          container.onclick = function(){
            container.style.color = 'grey'
            setInterval(function(){
              container.style.color = '#0078A8'
            }, 300);
            map.setView(itb_center,21)
          }
          return container;
        },
      });

      mymap.addControl(new customControl());

      var lapcin = this.insertRect({
        'map': mymap,
        'start_point': [-6.891487, 107.610505],
        'width': 21,
        'height': 25,
        'color': "green",
      }).bindPopup("EXPO 1. Lapangan Cinta ITB")

      var lapbas = this.insertRect({
        'map': mymap,
        'start_point': [-6.8915259, 107.609975],
        'width': 22,
        'height': 28,
        'color': "green",
        'divIcon': "EXPO 2"
      }).bindPopup("EXPO 2. Lapangan Basket ITB")

      var lapcin_sl_1 = this.insertRect({'map': mymap,'start_point': [-6.891487-1*meter, 107.610505+5*meter],'width': 4,'height': 2,'color': "grey",'divIcon': "SL"}).bindPopup("Stand Lomba")
      var lapcin_ss_1 = this.insertRect({'map': mymap,'start_point': [-6.891487-1*meter, 107.610505+9*meter],'width': 2,'height': 2,'color': "grey",'divIcon': "SS"}).bindPopup("Sponsor Silver")
      var lapcin_1 = this.insertRect({'map': mymap,'start_point':[-6.891487-1*meter, 107.610505+11*meter],'width': 2,'height': 2,'color': "grey",'divIcon': "1"}).bindPopup("Stand 1")
      var lapcin_2 = this.insertRect({'map': mymap,'start_point':[-6.891487-1*meter, 107.610505+13*meter],'width': 2,'height': 2,'color': "grey",'divIcon': "2"}).bindPopup("Stand 2")
      var lapcin_3 = this.insertRect({'map': mymap,'start_point':[-6.891487-6*meter, 107.610505+11*meter],'width': 2,'height': 2,'color': "grey",'divIcon': "3"}).bindPopup("Stand 3")
      var lapcin_4 = this.insertRect({'map': mymap,'start_point':[-6.891487-8*meter, 107.610505+11*meter],'width': 2,'height': 2,'color': "grey",'divIcon': "4"}).bindPopup("Stand 4")
      var lapcin_5 = this.insertRect({'map': mymap,'start_point':[-6.891487-10*meter, 107.610505+11*meter],'width': 2,'height': 2,'color': "grey",'divIcon': "5"}).bindPopup("Stand 5")
      var lapcin_6 = this.insertRect({'map': mymap,'start_point':[-6.891487-12*meter, 107.610505+11*meter],'width': 2,'height': 2,'color': "grey",'divIcon': "6"}).bindPopup("Stand 6")
      var lapcin_7 = this.insertRect({'map': mymap,'start_point':[-6.891487-14*meter, 107.610505+11*meter],'width': 2,'height': 2,'color': "grey",'divIcon': "7"}).bindPopup("Stand 7")
      var lapcin_8 = this.insertRect({'map': mymap,'start_point':[-6.891487-16*meter, 107.610505+11*meter],'width': 2,'height': 2,'color': "grey",'divIcon': "8"}).bindPopup("Stand 8")
      var lapcin_9 = this.insertRect({'map': mymap,'start_point':[-6.891487-6*meter, 107.610505+19*meter],'width': 2,'height': 2,'color': "grey",'divIcon': "9"}).bindPopup("Stand 9")
      var lapcin_10 = this.insertRect({'map': mymap,'start_point':[-6.891487-8*meter, 107.610505+19*meter],'width': 2,'height': 2,'color': "grey",'divIcon': "10"}).bindPopup("Stand 10")
      var lapcin_11 = this.insertRect({'map': mymap,'start_point':[-6.891487-10*meter, 107.610505+19*meter],'width': 2,'height': 2,'color': "grey",'divIcon': "11"}).bindPopup("Stand 11")
      var lapcin_12 = this.insertRect({'map': mymap,'start_point':[-6.891487-12*meter, 107.610505+19*meter],'width': 2,'height': 2,'color': "grey",'divIcon': "12"}).bindPopup("Stand 12")
      var lapcin_13 = this.insertRect({'map': mymap,'start_point':[-6.891487-14*meter, 107.610505+19*meter],'width': 2,'height': 2,'color': "grey",'divIcon': "13"}).bindPopup("Stand 13")
      var lapcin_14 = this.insertRect({'map': mymap,'start_point':[-6.891487-16*meter, 107.610505+19*meter],'width': 2,'height': 2,'color': "grey",'divIcon': "14"}).bindPopup("Stand 14")
      var lapcin_15 = this.insertRect({'map': mymap,'start_point':[-6.891487-22*meter, 107.610505+11*meter],'width': 2,'height': 2,'color': "grey",'divIcon': "15"}).bindPopup("Stand 15")
      var lapcin_16 = this.insertRect({'map': mymap,'start_point':[-6.891487-22*meter, 107.610505+13*meter],'width': 2,'height': 2,'color': "grey",'divIcon': "16"}).bindPopup("Stand 16")
      var lapcin_sg_1 = this.insertRect({'map': mymap,'start_point': [-6.891487-22*meter, 107.610505+9*meter],'width': 2,'height': 2,'color': "grey",'divIcon': "SG"}).bindPopup("Sponsor Gold")
      var lapcin_sl_2 = this.insertRect({'map': mymap,'start_point': [-6.891487-22*meter, 107.610505+5*meter],'width': 4,'height': 2,'color': "grey",'divIcon': "SL"}).bindPopup("Stand Lomba")

      var lapcin_sp_1 = this.insertRect({'map': mymap,'start_point': [-6.891487-6*meter, 107.610505+9*meter],'width': 2,'height': 4,'color': "grey",'divIcon': "SP"}).bindPopup("Sponsor Platinum")
      var lapcin_w_1 = this.insertRect({'map': mymap,'start_point': [-6.891487-10*meter, 107.610505+8*meter],'width': 3,'height': 5,'color': "grey",'divIcon': "W"}).bindPopup("Wahana")
      var lapcin_a_1 = this.insertRect({'map': mymap,'start_point': [-6.891487-15*meter, 107.610505+9*meter],'width': 2,'height': 2,'color': "grey",'divIcon': "A"}).bindPopup("Stand Arkavidia & Panggung")
      var lapcin_a_2 = this.insertRect({'map': mymap,'start_point': [-6.891487-17*meter, 107.610505+9*meter],'width': 2,'height': 2,'color': "grey",'divIcon': "A"}).bindPopup("Stand Arkavidia & Panggung")

    }
  }
}
</script>

<style>
.my-div-icon {
  text-align: center;
  color: white;
  text-shadow: 1px 1px #ddd;
}

h2 {
  color: white;
}

a {
  font-size: 13px;
  color: white;
  text-decoration: none;
}

#head {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body {
  background-color: white;
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
</style>
