var cel;
var far;
var icon;
var icon_code;
var t_toggle = 0;

$('#temp').textfill({
   innerTag: 'p'
});

$('#location').textfill({
   innerTag: 'p'
});

$('#weather').textfill({
   innerTag: 'p'
});


if ("geolocation" in navigator) {
	$("#weather-data").show();
	/*	navigator.geolocation.getCurrentPosition(function(position) {
		load_weather(position.coords.latitude+','+position.coords.longitude);}); */
		
	//	load_weather("30.2676,-97.74298");
		load_weather("74.4021654064362, -49.765663146972656");
		
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
		icon_code = parseInt(w.code);
		icon = w_code_icon(icon_code);
		set_background(w.currently, icon_code);
		$("#weather-sym").html("<i class='wi " + icon + "'></i>"); 
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

function set_background(read, count){
	reading = read.toLowerCase();
	console.log(count);
	if (reading.match("cold")) { 
		$("html").addClass("cold"); 
	}
	else if (reading.match("sleet")) { 
		$("html").addClass("sleet");
	}	
	else if (count == 30){		// partly cloudy
		$("html").addClass("clear-day");
	}
	else if (reading.match("hot")){
		$("html").addClass("hot");
	}
	else if (reading.match("smokey")){
		$("html").addClass("smokey");
	}
	else if (reading.match("foggy") || reading.match("haze")){
		$("html").addClass("foggy");
	}
	else if (count == 33){
		$("html").addClass("fair-night");
	}
	else if (count == 34 ){
		$("html").addClass("fair-day");
	}
	else if (reading.match("thunderstrom")){
		$("html").addClass("thunderstroms");
	}
	else if (reading.match("hail")){
		$("html").addClass("hail");
	}
	else if (reading.match("smokey")){
		$("html").addClass("smokey");
	}
	else if (reading.match("drizzle")){
		$("html").addClass("drizzle");
	}
	else if (reading.match("rain")){
		$("html").addClass("rain");
	}
	else if (reading.match("windy")){
		$("html").addClass("windy");
	}
	else if (reading.match("dust")){
		$("html").addClass("dust");
	}
	else if (reading.match("thundershower")){
		$("html").addClass("thundershowers");
	}
	else if (reading.match("snow")){
		$("html").addClass("snow");
	}
	else if (count == 31){
		$("html").addClass("clear-night");
	}
	else if (reading.match("sunny")){
		$("html").addClass("sunny");
	}
	else if (count == 28 ){
		$("html").addClass("cloudy-day");
	}
	else if (count == 27 || count == 29){
		$("html").addClass("cloudy-night");
	}
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

function w_code_icon(w_code){
	switch(w_code){
		case 0: return "wi-tornado";
		case 1: return "wi-storm-warning";
		case 2: return "wi-hurricane";
		case 3: return "wi-thunderstorm";
		case 4: return "wi-storm-showers";
		case 5: return "wi-rain-mix";
		case 6: return "wi-rain-mix";
		case 7: return "wi-sleet";
		case 8: 
		case 9: return "wi-sprinkle";
		case 10: 
		case 11:
		case 12: return "wi-showers";
		case 13: 
		case 14: return "wi-snow";
		case 15: return "wi-snow-wind";
		case 16: return "wi-snow";
		case 17: return "wi-hail";
		case 18: return "wi-sleet";
		case 19: return "wi-dust";
		case 20: return "wi-fog";
		case 21: return "wi-day-haze";
		case 22: return "wi-smoke";
		case 23: return "wi-cloudy-gusts";
		case 24: return "wi-cloudy-windy";
		case 25: return "wi-snowflake-cold";
		case 26: return "wi-cloudy";
		case 27: return "wi-night-alt-cloudy";
		case 28: return "wi-day-cloudy";
		case 29: return "wi-night-partly-cloudy";
		case 30: return "wi-day-cloudy-high";
		case 31: return "wi-night-clear";
		case 32: return "wi-day-sunny";
		case 33: return "wi-stars";
		case 34: return "wi-day-sunny";
		case 35: return "wi-rain-mix";
		case 36: return "wi-hot";
		case 37: return "wi-thunderstorm";
		case 38: return 
		case 39: return "wi-storm-showers";
		case 40: return "wi-showers";
		case 41: return "wi-snow-wind";
		case 42: return "wi-rain-mix";
		case 43: return "wi-snow-wind";
		case 44: return "wi-cloud";
		case 46: return "wi-rain-mix";
		case 47: return "wi-thunderstorm";
		case 3200: return "wi-na";
	}
}
