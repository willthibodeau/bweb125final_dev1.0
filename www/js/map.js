$(document).ready(function() {
$('#map').goMap({
    latitude : 45.53940,
    longitude : -122.59025,
    zoom : 16,
    scaleControl : true,
    maptype : 'SATELLITE'
}); // end goMap


$.goMap.createMarker({  
	   latitude : 45.,
	   longitude :  -122.59473,
	   title : 'ho',
	   html : {
	     content : '<h2>Hol</h2><p>Par 4, 346 Yards</p>',
		 popup : true   
	   }
}); // end createMarker

}); // end ready