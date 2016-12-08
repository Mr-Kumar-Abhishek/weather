var cel;
var far;
var t_toggle = 0;

if ("geolocation" in navigator) {
	$("#weather-data").show();
		navigator.geolocation.getCurrentPosition(function(position) {
		load_weather(position.coords.latitude+','+position.coords.longitude);});
	//	load_weather("30.2676,-97.74298");
		$("#temp").click(toggle_temp);
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
		cel = w.temp;
		far = w.alt.temp; 
		$("#temp").html("<p>" + w.temp + " &deg; C </p>");
		$("#location").html("<p>" + w.city +  " / " + w.region + "</p>" ); 
		$("#weather").html("<p>" + w.currently + "</p>");
    },
    error: function(error) {
		$("#weather-data").hide();
		console.log(error);
		$("#aww-snap").show();
    }
  });
}

function toggle_temp() {
		console.log("toggle_temp");
		if(t_toggle == 1) {
			console.log("temprature to cel");
			t_toggle = 0;
			$("#temp").html("<p>" + cel + " &deg; C </p>");
		}else { 
			console.log("temprature to far");
			t_toggle = 1;
			$("#temp").html("<p>" + far + " &deg; F </p>");
		}
}
