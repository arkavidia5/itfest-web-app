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
      var rect = L.rectangle([params.start_point, end_point], {color: params.color, fillColor: params.fillColor, fillOpacity: params.fillOpacity, weight: params.weight}).addTo(params.map)
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

      var legend = L.control({position: 'topright'})

      legend.onAdd = function (map) {
        var div = L.DomUtil.create('div', 'info legend'),
        grades = ['A. Registrasi', 'B. Panggung', 'C. Stand Arkav', 'D. Photo Box', '',
        '1. Cicil', '2. Jojonomics', '3. Danacita', '4. Halofina', '5. Amartha', '6. Proofn', '7. Aimsis', '8. Squiline', '9. Noompang', '10. -', '11. Agate', '12. -', '13. Emago', '14. Inkubator IT',
        '15. Shopee', '16. Xtremax', '17. Sirclo', '18. Chatbiz', '19. Futsaloka', '20. HijUp', '21. Kadoqu', '22. GO-JEK',
        '23. Tokopedia', '24. GDP Labs', '25. E-Health', '26. Kakilima', '27. IdCloudHost', '28. Matagi', '    Informasi', '    Pertiwi', '29. Warung Pintar', '30. JULO'],
        labels = []

        for (var i = 0; i < grades.length; i++) {
          if (i == 33 || i == 34) {
            div.innerHTML += '<h6>' + grades[i] + '</h6>' + '<br>';
          } else {
            div.innerHTML += '<h5>' + grades[i] + '</h5>' + '<br>';
          }
        }
        return div
      }

      legend.addTo(mymap)

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
        'start_point': [-6.8915240, 107.609970],
        'width': 21,
        'height': 25,
        'fillColor': "green",
        'fillOpacity': "0.1"
      }).bindPopup("Lapangan Cinta ITB")

      var lapcin_group = this.insertRect({'map': mymap,'start_point': [-6.8915010-2*meter, 107.609950+2*meter],'width': 20,'height': 28,'color': "#f8d700", 'fillColor': "white",'weight': 5,'fillOpacity': 0.8})

      var lapcin_15 = this.insertRect({'map': mymap,'start_point': [-6.8915010-3*meter, 107.609970+3*meter],'width': 1.5,'height': 1.5,'color': "black",'divIcon': "15",'weight': 1,'fillColor': "#00b922"}).bindPopup("Shopee")
      var lapcin_16 = this.insertRect({'map': mymap,'start_point': [-6.8915010-4.5*meter, 107.609970+3*meter],'width': 1.5,'height': 1.5,'color': "black",'divIcon': "16",'weight': 1,'fillColor': "#00b922"}).bindPopup("Xtremax")
      var lapcin_17 = this.insertRect({'map': mymap,'start_point': [-6.8915010-6*meter, 107.609970+3*meter],'width': 1.5,'height': 1.5,'color': "black",'divIcon': "17",'weight': 1,'fillColor': "#00b922"}).bindPopup("Sirclo")
      var lapcin_18 = this.insertRect({'map': mymap,'start_point': [-6.8915010-7.5*meter, 107.609970+3*meter],'width': 1.5,'height': 1.5,'color': "black",'divIcon': "18",'weight': 1,'fillColor': "#00b922"}).bindPopup("Chatbiz")
      var lapcin_19 = this.insertRect({'map': mymap,'start_point': [-6.8915010-9*meter, 107.609970+3*meter],'width': 1.5,'height': 1.5,'color': "black",'divIcon': "19",'weight': 1,'fillColor': "#00b922"}).bindPopup("Futsaloka")
      var lapcin_20 = this.insertRect({'map': mymap,'start_point': [-6.8915010-10.5*meter, 107.609970+3*meter],'width': 1.5,'height': 1.5,'color': "black",'divIcon': "20",'weight': 1,'fillColor': "#00b922"}).bindPopup("HijUp")
      var lapcin_21 = this.insertRect({'map': mymap,'start_point': [-6.8915010-12*meter, 107.609970+3*meter],'width': 1.5,'height': 1.5,'color': "black",'divIcon': "21",'weight': 1,'fillColor': "#00b922"}).bindPopup("Kadoqu")
      var lapcin_22 = this.insertRect({'map': mymap,'start_point': [-6.8915010-13.5*meter, 107.609970+3*meter],'width': 2.5,'height': 2.5,'color': "black",'divIcon': "22",'weight': 1,'fillColor': "#00b922"}).bindPopup("GO-JEK")

      var lapcin_23 = this.insertRect({'map': mymap,'start_point': [-6.8915010-16*meter, 107.609970+3*meter],'width': 2.5,'height': 2.5,'color': "black",'divIcon': "23",'weight': 1,'fillColor': "#00b922"}).bindPopup("Tokopedia")
      var lapcin_24 = this.insertRect({'map': mymap,'start_point': [-6.8915010-18.5*meter, 107.609970+3*meter],'width': 1.5,'height': 1.5,'color': "black",'divIcon': "24",'weight': 1,'fillColor': "#00b922"}).bindPopup("GDP Labs")
      var lapcin_25 = this.insertRect({'map': mymap,'start_point': [-6.8915010-20*meter, 107.609970+3*meter],'width': 1.5,'height': 1.5,'color': "black",'divIcon': "25",'weight': 1,'fillColor': "#00b922"}).bindPopup("E-Health")
      var lapcin_26 = this.insertRect({'map': mymap,'start_point': [-6.8915010-21.5*meter, 107.609970+3*meter],'width': 1.5,'height': 1.5,'color': "black",'divIcon': "26",'weight': 1,'fillColor': "#00b922"}).bindPopup("Kakilima")
      var lapcin_27 = this.insertRect({'map': mymap,'start_point': [-6.8915010-23*meter, 107.609970+3*meter],'width': 1.5,'height': 1.5,'color': "black",'divIcon': "27",'weight': 1,'fillColor': "#00b922"}).bindPopup("IdCloudHost")
      var lapcin_28 = this.insertRect({'map': mymap,'start_point': [-6.8915010-24.5*meter, 107.609970+3*meter],'width': 1.5,'height': 1.5,'color': "black",'divIcon': "28",'weight': 1,'fillColor': "#00b922"}).bindPopup("Matagi Informasi Pertiwi")
      var lapcin_29 = this.insertRect({'map': mymap,'start_point': [-6.8915010-26*meter, 107.609970+3*meter],'width': 1.5,'height': 1.5,'color': "black",'divIcon': "29",'weight': 1,'fillColor': "#00b922"}).bindPopup("Warung Pintar")
      var lapcin_30 = this.insertRect({'map': mymap,'start_point': [-6.8915010-27.5*meter, 107.609970+3*meter],'width': 1.5,'height': 1.5,'color': "black",'divIcon': "30",'weight': 1,'fillColor': "#00b922"}).bindPopup("JULO")

      var lapbas = this.insertRect({
        'map': mymap,
        'start_point': [-6.891487, 107.610500],
        'width': 22.7,
        'height': 28.3,
        'color': "#f8d700",
        'fillColor': "white",
        'weight': 5,
        'fillOpacity': 0.8
      }).bindPopup("Lapangan Voli ITB")

      var lapbas_lu = this.insertRect({'map': mymap,'start_point': [-6.891487, 107.610505],'width': 9,'height': 8,'color': "black", 'fillColor': "#b4d5ed",'weight': 1})
      var lapbas_ru = this.insertRect({'map': mymap,'start_point': [-6.891487, 107.610505+13*meter],'width': 9,'height': 8,'color': "black",'fillColor': "#b4d5ed",'weight': 1})
      var lapbas_1 = this.insertRect({'map': mymap,'start_point': [-6.891487-4*meter, 107.610505],'width': 2,'height': 2,'color': "black",'fillColor': "#ee0136",'divIcon': "1",'weight': 1}).bindPopup("Cicil")
      var lapbas_2 = this.insertRect({'map': mymap,'start_point': [-6.891487-2*meter, 107.610505],'width': 2,'height': 2,'color': "black",'fillColor': "#ee0136",'divIcon': "2",'weight': 1}).bindPopup("Jojonomics")
      var lapbas_3 = this.insertRect({'map': mymap,'start_point': [-6.891487, 107.610505+2*meter],'width': 2,'height': 2,'color': "black",'fillColor': "#ee0136",'divIcon': "3",'weight': 1}).bindPopup("Danacita")
      var lapbas_4 = this.insertRect({'map': mymap,'start_point': [-6.891487, 107.610505+4*meter],'width': 2,'height': 2,'color': "black",'fillColor': "#ee0136",'divIcon': "4",'weight': 1}).bindPopup("Halofina")
      var lapbas_5 = this.insertRect({'map': mymap,'start_point': [-6.891487, 107.610505+6*meter],'width': 2,'height': 2,'color': "black",'fillColor': "#ee0136",'divIcon': "5",'weight': 1}).bindPopup("Amartha")

      var lapbas_6 = this.insertRect({'map': mymap,'start_point': [-6.891487, 107.610505+14*meter],'width': 2,'height': 2,'color': "black",'fillColor': "#ee0136",'divIcon': "6",'weight': 1}).bindPopup("Proofn")
      var lapbas_7 = this.insertRect({'map': mymap,'start_point': [-6.891487, 107.610505+16*meter],'width': 2,'height': 2,'color': "black",'fillColor': "#ee0136",'divIcon': "7",'weight': 1}).bindPopup("Aimsis")
      var lapbas_8 = this.insertRect({'map': mymap,'start_point': [-6.891487, 107.610505+18*meter],'width': 2,'height': 2,'color': "black",'fillColor': "#ee0136",'divIcon': "8",'weight': 1}).bindPopup("Squline")
      var lapbas_9 = this.insertRect({'map': mymap,'start_point': [-6.891487-2*meter, 107.610505+20*meter],'width': 2,'height': 2,'color': "black",'fillColor': "#ee0136",'divIcon': "9",'weight': 1}).bindPopup("Noompang")
      var lapbas_10 = this.insertRect({'map': mymap,'start_point': [-6.891487-4*meter, 107.610505+20*meter],'width': 2,'height': 2,'color': "black",'fillColor': "#ee0136",'divIcon': "10",'weight': 1})

      var lapbas_11 = this.insertRect({'map': mymap,'start_point': [-6.891487-26*meter, 107.610505+0*meter],'width': 5,'height': 2,'color': "black",'divIcon': "11",'weight': 1,'fillColor': "#ee0136"}).bindPopup("Agate")
      var lapbas_12 = this.insertRect({'map': mymap,'start_point': [-6.891487-26*meter, 107.610505+5*meter],'width': 4,'height': 2,'color': "black",'divIcon': "12",'weight': 1,'fillColor': "#ee0136"})
      var lapbas_13 = this.insertRect({'map': mymap,'start_point': [-6.891487-27*meter, 107.610505+12*meter],'width': 2,'height': 1,'color': "black",'divIcon': "13",'weight': 1,'fillColor': "#ee0136"}).bindPopup("Emago")
      var lapbas_14 = this.insertRect({'map': mymap,'start_point': [-6.891487-27*meter, 107.610505+14*meter],'width': 2,'height': 1,'color': "black",'divIcon': "14",'weight': 1,'fillColor': "#ee0136"}).bindPopup("Inkubator IT")

      var lapbas_regis = this.insertRect({'map': mymap,'start_point': [-6.891487-26*meter, 107.610505+20*meter],'width': 2,'height': 2,'color': "orange",'divIcon': "A",'weight': 1,'fillColor': "#ee8217"}).bindPopup("Registrasi")
      var lapbas_panggung = this.insertRect({'map': mymap,'start_point': [-6.891487-13*meter, 107.610505],'width': 3,'height': 8,'color': "black",'divIcon': "B",'fillColor': "#10a6a8",'weight': 1}).bindPopup("Panggung")
      var lapbas_stand = this.insertRect({'map': mymap,'start_point': [-6.891487-15*meter, 107.610505+8*meter],'width': 6,'height': 3,'color': "black",'divIcon': "C",'fillColor': "#10a6a8",'weight': 1}).bindPopup("Stand Arkav")
      var lapbas_photobox = this.insertRect({'map': mymap,'start_point': [-6.891487-15*meter, 107.610505+19*meter],'width': 3,'height': 3,'color': "black",'divIcon': "D",'fillColor': "#10a6a8",'weight': 1}).bindPopup("Photo Box")
    }
  }
}
</script>

<style>
.my-div-icon {
  text-align: center;
  color: white;
}

h2 {
  color: white;
}

h5 {
  color: white;
  font-size: 14px;
}

h6 {
  color: white;
  font-size: 14px;
  padding-left: 24px;
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

.legend {
  background-color: 'white';
  line-height: 10px;
  padding-top: 5px;
  padding-left: 3px;
  width: 123px;
  color: #fff;
  overflow: scroll;
  height: 150px;
}
</style>
