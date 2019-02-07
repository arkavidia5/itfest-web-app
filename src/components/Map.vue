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
      }).bindPopup("Lapangan Cinta ITB")

      var lapcin_left_group = this.insertRect({'map': mymap,'start_point': [-6.891487-2*meter, 107.610505+2*meter],'width': 7,'height': 22,'color': "yellow"})
      var lapcin_right_group = this.insertRect({'map': mymap,'start_point': [-6.891487-2*meter, 107.610505+12*meter],'width': 7,'height': 22,'color': "yellow"})

      var lapcin_15 = this.insertRect({'map': mymap,'start_point': [-6.891487-5*meter, 107.610505+3*meter],'width': 2,'height': 2,'color': "grey",'divIcon': "15"}).bindPopup("Shopee")
      var lapcin_16 = this.insertRect({'map': mymap,'start_point': [-6.891487-7*meter, 107.610505+3*meter],'width': 2,'height': 2,'color': "grey",'divIcon': "16"}).bindPopup("Xtremax")
      var lapcin_17 = this.insertRect({'map': mymap,'start_point': [-6.891487-9*meter, 107.610505+3*meter],'width': 2,'height': 2,'color': "grey",'divIcon': "17"}).bindPopup("Sirclo")
      var lapcin_18 = this.insertRect({'map': mymap,'start_point': [-6.891487-11*meter, 107.610505+3*meter],'width': 2,'height': 2,'color': "grey",'divIcon': "18"}).bindPopup("Chatbiz")
      var lapcin_19 = this.insertRect({'map': mymap,'start_point': [-6.891487-13*meter, 107.610505+3*meter],'width': 2,'height': 2,'color': "grey",'divIcon': "19"}).bindPopup("Futsaloka")
      var lapcin_20 = this.insertRect({'map': mymap,'start_point': [-6.891487-15*meter, 107.610505+3*meter],'width': 2,'height': 2,'color': "grey",'divIcon': "20"}).bindPopup("HijUp")
      var lapcin_21 = this.insertRect({'map': mymap,'start_point': [-6.891487-17*meter, 107.610505+3*meter],'width': 2,'height': 2,'color': "grey",'divIcon': "21"}).bindPopup("Kadoqu")
      var lapcin_22 = this.insertRect({'map': mymap,'start_point': [-6.891487-19*meter, 107.610505+3*meter],'width': 3,'height': 3,'color': "grey",'divIcon': "22"}).bindPopup("GO-JEK")

      var lapcin_23 = this.insertRect({'map': mymap,'start_point': [-6.891487-5*meter, 107.610505+14*meter],'width': 3,'height': 3,'color': "grey",'divIcon': "23"}).bindPopup("Tokopedia")
      var lapcin_24 = this.insertRect({'map': mymap,'start_point': [-6.891487-8*meter, 107.610505+14*meter],'width': 2,'height': 2,'color': "grey",'divIcon': "24"}).bindPopup("GDP Labs")
      var lapcin_25 = this.insertRect({'map': mymap,'start_point': [-6.891487-10*meter, 107.610505+14*meter],'width': 2,'height': 2,'color': "grey",'divIcon': "25"}).bindPopup("E-Health")
      var lapcin_26 = this.insertRect({'map': mymap,'start_point': [-6.891487-12*meter, 107.610505+14*meter],'width': 2,'height': 2,'color': "grey",'divIcon': "26"}).bindPopup("Kakilima")
      var lapcin_27 = this.insertRect({'map': mymap,'start_point': [-6.891487-14*meter, 107.610505+14*meter],'width': 2,'height': 2,'color': "grey",'divIcon': "27"}).bindPopup("IdCloudHost")
      var lapcin_28 = this.insertRect({'map': mymap,'start_point': [-6.891487-16*meter, 107.610505+14*meter],'width': 2,'height': 2,'color': "grey",'divIcon': "28"}).bindPopup("Matagi Informasi Pertiwi")
      var lapcin_29 = this.insertRect({'map': mymap,'start_point': [-6.891487-18*meter, 107.610505+14*meter],'width': 2,'height': 2,'color': "grey",'divIcon': "29"}).bindPopup("Warung Pintar")
      var lapcin_30 = this.insertRect({'map': mymap,'start_point': [-6.891487-20*meter, 107.610505+14*meter],'width': 2,'height': 2,'color': "grey",'divIcon': "30"}).bindPopup("Bukalapak")

      var lapbas = this.insertRect({
        'map': mymap,
        'start_point': [-6.8915259, 107.609975],
        'width': 22,
        'height': 28,
        'color': "green",
      }).bindPopup("Lapangan Voli ITB")

      var lapbas_lu = this.insertRect({'map': mymap,'start_point': [-6.8915259, 107.609975],'width': 9,'height': 8,'color': "blue"})
      var lapbas_ru = this.insertRect({'map': mymap,'start_point': [-6.8915259, 107.609975+13*meter],'width': 9,'height': 8,'color': "blue"})
      var lapbas_1 = this.insertRect({'map': mymap,'start_point': [-6.8915259-4*meter, 107.609975],'width': 2,'height': 2,'color': "red",'divIcon': "1"}).bindPopup("Cicil")
      var lapbas_2 = this.insertRect({'map': mymap,'start_point': [-6.8915259-2*meter, 107.609975],'width': 2,'height': 2,'color': "red",'divIcon': "2"}).bindPopup("Jojonomics")
      var lapbas_3 = this.insertRect({'map': mymap,'start_point': [-6.8915259, 107.609975+2*meter],'width': 2,'height': 2,'color': "red",'divIcon': "3"}).bindPopup("Danacita")
      var lapbas_4 = this.insertRect({'map': mymap,'start_point': [-6.8915259, 107.609975+4*meter],'width': 2,'height': 2,'color': "red",'divIcon': "4"}).bindPopup("Halofina")
      var lapbas_5 = this.insertRect({'map': mymap,'start_point': [-6.8915259, 107.609975+6*meter],'width': 2,'height': 2,'color': "red",'divIcon': "5"}).bindPopup("Amartha")

      var lapbas_6 = this.insertRect({'map': mymap,'start_point': [-6.8915259, 107.609975+14*meter],'width': 2,'height': 2,'color': "red",'divIcon': "6"}).bindPopup("Proofn")
      var lapbas_7 = this.insertRect({'map': mymap,'start_point': [-6.8915259, 107.609975+16*meter],'width': 2,'height': 2,'color': "red",'divIcon': "7"}).bindPopup("Aimsis")
      var lapbas_8 = this.insertRect({'map': mymap,'start_point': [-6.8915259, 107.609975+18*meter],'width': 2,'height': 2,'color': "red",'divIcon': "8"}).bindPopup("Squline")
      var lapbas_9 = this.insertRect({'map': mymap,'start_point': [-6.8915259-2*meter, 107.609975+20*meter],'width': 2,'height': 2,'color': "red",'divIcon': "9"}).bindPopup("Noompang")
      var lapbas_10 = this.insertRect({'map': mymap,'start_point': [-6.8915259-4*meter, 107.609975+20*meter],'width': 2,'height': 2,'color': "red",'divIcon': "10"}).bindPopup("Paragon")

      var lapbas_11 = this.insertRect({'map': mymap,'start_point': [-6.8915259-26*meter, 107.609975+0*meter],'width': 5,'height': 2,'color': "red",'divIcon': "11"}).bindPopup("Agate")
      var lapbas_12 = this.insertRect({'map': mymap,'start_point': [-6.8915259-26*meter, 107.609975+5*meter],'width': 4,'height': 2,'color': "red",'divIcon': "12"}).bindPopup("Dicoding")
      var lapbas_13 = this.insertRect({'map': mymap,'start_point': [-6.8915259-27*meter, 107.609975+12*meter],'width': 2,'height': 1,'color': "red",'divIcon': "13"}).bindPopup("Emago")
      var lapbas_14 = this.insertRect({'map': mymap,'start_point': [-6.8915259-27*meter, 107.609975+14*meter],'width': 2,'height': 1,'color': "red",'divIcon': "14"}).bindPopup("Inkubator IT")

      var lapbas_regis = this.insertRect({'map': mymap,'start_point': [-6.8915259-26*meter, 107.609975+20*meter],'width': 2,'height': 2,'color': "orange",'divIcon': "A"}).bindPopup("Inkubator IT")
      var lapbas_panggung = this.insertRect({'map': mymap,'start_point': [-6.8915259-13*meter, 107.609975],'width': 3,'height': 8,'color': "white",'divIcon': "B"}).bindPopup("Inkubator IT")
      var lapbas_stand = this.insertRect({'map': mymap,'start_point': [-6.8915259-15*meter, 107.609975+8*meter],'width': 6,'height': 3,'color': "white",'divIcon': "C"}).bindPopup("Inkubator IT")
      var lapbas_photobox = this.insertRect({'map': mymap,'start_point': [-6.8915259-15*meter, 107.609975+19*meter],'width': 3,'height': 3,'color': "white",'divIcon': "D"}).bindPopup("Inkubator IT")
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
