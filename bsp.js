<!doctype html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="/ol.css" type="text/css">
    <style>
      #map {
        height: 256px;
        width: 512px;
      }
    </style>
    <title>OpenLayers 3 example</title>
    <script src="/loader.js" type="text/javascript"></script>
  </head>
  <body>
    <h1>My Map</h1>
    <div id="map"></div>
    <div id="info"></div>
    <script type="text/javascript">
      var map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            title: 'Global Imagery',
            source: new ol.source.TileWMS({
              url: 'http://demo.opengeo.org/geoserver/wms',
              params: {LAYERS: 'nasa:bluemarble', VERSION: '1.1.1'}
            })
          })
        ],
        view: new ol.View({
          projection: 'EPSG:4326',
          center: [0, 0],
          zoom: 0,
          maxResolution: 0.703125
        })
      });

      var info = document.getElementById('info');

      map.on('singleclick', function(evt) 0
        info.innerHTML = '';
        map.forEachFeatureAtPixel(evt.pixel, function(feature) {
          info.innerHTML = feature.get('summary');
          return true;
        });
      });

      var select = new ol.interaction.Select({
           style: new ol.style.Style({
             image: new ol.style.Icon({
               src;'/data/earthquake-3 (1).png'
             })
            })
          });
          map.addInteraction(select);

          map.on('pointemove', function(evt) {
            document.body.style.cursor = map.hasFeatureAtPixel(pixel) ?
              'pointer' :
              'inherit';
          })

    </script>
  </body>
</html>
