
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
		icon: 'img/icon3.png',
			html: {
				content: '<h3>DrHumor Building</h3><p>DrHumor Building</p>',
				popup: true
			}
		},
		{
			latitude: 35.594753,
			longitude: -82.552648,
			title: 'Top Hat',
			icon: 'img/icon2.png',
				html: {
					content: '<img src="./img/haticon.jpg"><h3>Top Hat</h3><p>Location 2</p>',
					popup: true
				}
		},
		{
			latitude: 35.595194,
			longitude: -82.554869,
			title: 'Flat Iron',
			icon: 'img/icon4.png',
				html: {
					content: '<img src="./img/monumenticon.jpg"><h3>Flat Iron</h3><p>Location 4</p>',
					popup: true
				}
		},
		{
			latitude: 35.594495,
			longitude: -82.556310,
			title: 'Cats',
			icon: 'img/icon5.png',
				html: {
					content: '<img src="./img/monumenticon.jpg"><h3>Cats</h3><p>Location 5</p>',
					popup: true
				}
		},
		
		{
		   	latitude : 35.596097,
		   	longitude :  -82.556365,
		   	title : 'Bronze Book',
		   	icon: 'img/icon6.png',
			   	html : {
			     	content : '<img src="./img/monumenticon.jpg"><h3>Bronze Book</h3><p>Location 1</p>',
				 	popup : true  
			   }
		},
		{
		   	latitude : 35.597109,
		   	longitude :  -82.555620,
		   	title : 'Civic Center',
		   	icon: 'img/icon7.png',
			   	html : {
			     	content : '<img src="./img/monumenticon.jpg"><h3>Civic Center</h3><p>Location 1</p>',
				 	popup : true  
			   }
		},
		{
		   	latitude : 35.596101,
		   	longitude :  -82.554954,
		   	title : 'Medicinal Herbs',
		   	icon: 'img/icon8.png',
			   	html : {
			     	content : '<img src="./img/monumenticon.jpg"><h3>Medicinal Herbs</h3><p>Location 1</p>',
				 	popup : true  
			   }
		},
		{
		   	latitude : 35.596402,
		   	longitude :  -82.553018,
		   	title : 'Market Place',
		   	icon: 'img/icon9.png',
			   	html : {
			     	content : '<img src="./img/monumenticon.jpg"><h3>Market Place</h3><p>Location 1</p>',
				 	popup : true  
			   }
		},
		{
		   	latitude : 35.596917,
		   	longitude :  -82.551124,
		   	title : 'Art In Motion',
		   	icon: 'img/icon10.png',
			   	html : {
			     	content : '<img src="./img/monumenticon.jpg"><h3>Art In Motion</h3><p>Location 1</p>',
				 	popup : true  
			   }
		},
		{
		   	latitude : 35.595822,
		   	longitude :  -82.550781,
		   	title : 'Civic Price',
		   	icon: 'img/icon11.png',
			   	html : {
			     	content : '<img src="./img/monumenticon.jpg"><h3>civic Price</h3><p>Location 1</p>',
				 	popup : true  
			   }
		},
		{
		   	latitude : 35.595076,
		   	longitude :  -82.550687,
		   	title : 'Jackson Building',
		   	icon: 'img/icon12.png',
			   	html : {
			     	content : '<img src="./img/monumenticon.jpg"><h3>Jackson Building</h3><p>Location 1</p>',
				 	popup : true  
			   }
		},
		{
		   	latitude : 35.595027,
		   	longitude :  -82.551664,
		   	title : 'Monument',
		   	icon: 'img/icon1.png',
			   	html : {
			     	content : '<img src="./img/monumenticon.jpg"><h3>Pack Monument</h3><p>Location 1</p>',
				 	popup : true  
			   }
		}

	]	
$.each(markers,function(i,marker){
	$.goMap.createMarker(marker);
}); //end each

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success);
} else {
  error('Geo Location is not supported');
}

}); // end ready








