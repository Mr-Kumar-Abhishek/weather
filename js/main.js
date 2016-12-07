if ("geolocation" in navigator) {
	$("#weather-data").show();
	/*	navigator.geolocation.getCurrentPosition(function(position) {
		load_weather(position.coords.latitude+','+position.coords.longitude);}); */
	load_weather("30.2676,-97.74298");
}else {
	$("#aww-snap").show();
}


function load_weather(location) {
  $.simpleWeather({
    location: location,
    unit: 'c',
    success: function(w) {
		console.log(w.code);
		console.log(w.temp);
		console.log(w.units.temp);
		console.log(w.city);
		console.log(w.currently);
		console.log(w.region);
		console.log(w.alt.temp); 
    },
    error: function(error) {
       console.log(error);
    }
  });
}

