
$(document).ready(function() {
$('#map').goMap({
    latitude : 35.595027,
	longitude :  -82.551664,
    zoom : 16,
    
    maptype : 'ROADMAP'
}); // end goMap


var markers = [ 
	   
		{
			latitude: 35.594551,
			longitude: -82.553574,
			title: 'DrHumor Building',
				html: {
					content: '<h3>DrHumor Building</h3><p>Location 3</p>',
					popup: true
				}
		},
		{
			latitude: 35.594753,
			longitude: -82.552648,
			title: 'Top Hat',
				html: {
					content: '<img src="./img/haticon.jpg"><h3>Top Hat</h3><p>Location 2</p>',
					popup: true
				}
		},
		{
			latitude: 35.595194,
			longitude: -82.554869,
			title: 'Flat Iron',
				html: {
					content: '<h3>Flat Iron</h3><p>Location 4</p>',
					popup: true
				}
		},
		{
			latitude: 35.594495,
			longitude: -82.556310,
			title: 'Cats',
				html: {
					content: '<h3>Cats</h3><p>Location 5</p>',
					popup: true
				}
		},
		{
	   latitude : 35.595027,
	   longitude :  -82.551664,
	   title : 'ho',
		   html : {
		     content : '<img src="./img/monumenticon.jpg"><h3>Pack Monument</h3><p>Location 1</p>',
			 popup : true  
		   }
		}

	]	
$('#map').goMap({
	latitude : 35.595027,
	longitude :  -82.551664,
    zoom : 16,
}); // end goMap
$.each(markers,function(i,marker){
	$.goMap.createMarker(marker);
}); //end each

}); // end ready








