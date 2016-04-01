
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
		icon: 'img/icon1.png',
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
		   	latitude : 35.596097,
		   	longitude :  -82.556365,
		   	title : 'Bronze Book',
			   	html : {
			     	content : '<img src="./img/monumenticon.jpg"><h3>Pack Monument</h3><p>Location 1</p>',
				 	popup : true  
			   }
		},
		{
		   	latitude : 35.597109,
		   	longitude :  -82.555620,
		   	title : 'Civic Center',
			   	html : {
			     	content : '<img src="./img/monumenticon.jpg"><h3>Pack Monument</h3><p>Location 1</p>',
				 	popup : true  
			   }
		},
		{
		   	latitude : 35.596101,
		   	longitude :  -82.554954,
		   	title : 'Medicinal Herbs',
			   	html : {
			     	content : '<img src="./img/monumenticon.jpg"><h3>Pack Monument</h3><p>Location 1</p>',
				 	popup : true  
			   }
		},
		{
		   	latitude : 35.596402,
		   	longitude :  -82.553018,
		   	title : 'Market Place',
			   	html : {
			     	content : '<img src="./img/monumenticon.jpg"><h3>Pack Monument</h3><p>Location 1</p>',
				 	popup : true  
			   }
		},
		{
		   	latitude : 35.596917,
		   	longitude :  -82.551124,
		   	title : 'Art In Motion',
			   	html : {
			     	content : '<img src="./img/monumenticon.jpg"><h3>Pack Monument</h3><p>Location 1</p>',
				 	popup : true  
			   }
		},
		{
		   	latitude : 35.595822,
		   	longitude :  -82.550781,
		   	title : 'Civic Price',
			   	html : {
			     	content : '<img src="./img/monumenticon.jpg"><h3>Pack Monument</h3><p>Location 1</p>',
				 	popup : true  
			   }
		},
		{
		   	latitude : 35.595027,
		   	longitude :  -82.551664,
		   	title : 'Monument',
			   	html : {
			     	content : '<img src="./img/monumenticon.jpg"><h3>Pack Monument</h3><p>Location 1</p>',
				 	popup : true  
			   }
		}

	]	
$.each(markers,function(i,marker){
	$.goMap.createMarker(marker);
}); //end each

}); // end ready








