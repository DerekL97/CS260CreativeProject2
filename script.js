document.getElementById("pic_request").addEventListener("click", function(event) {
	event.preventDefault();
	// const value = document.getElementById("weatherInput").value;
	// if (value === "")
	//   return;
	// console.log(value);

	const url = "https://api.catboys.com/img";
	fetch(url)    /*global fetch*/
	  .then(function(response) {
		return response.json();
	  }).then(function(json) {
		  console.log(json);
		  let results = "";
		  results += '<img src="' + json.url + '">';

		  results += '<h2>Artist: <a href="' + json.artist_url + '">' + json.artist + '</a></h2>'
		//   results += "<p>"
		//   for (let i=0; i < json.weather.length; i++) {
		// 	  results += json.weather[i].description
		//   if (i !== json.weather.length - 1)
		// 	  results += ", "
		//   }
		//   results += "</p>";
		  document.getElementById("picture_result").innerHTML = results;
	  });


	// 	const url2 = "https://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=17f2eeb7ca808eb94add9e8587263b01";
	//   fetch(url2)
	//   .then(function(response) {
	// 	return response.json();
	//   }).then(function(json) {
	// 	  console.log(json);
	// 	  let forecast = "";
	// 	  for (let i=0; i < json.list.length; i++) {
	// 		  forecast += "<h2>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h2>";
	// 		  forecast += "<p>Temperature: " + json.list[i].main.temp + " Feels like: " + json.list[i].main.feels_like + "</p>";
	// 		  forecast += '<img src="https://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>';
	// 	  }
	// 	  document.getElementById("forecastResults").innerHTML = forecast;
	//   });
  });