$(document).ready(function(){
	// List of cities
	var cities = ["NYC", "SF", "LA", "ATX", "SYD"];
	// Populates dropdown menu with list of cities
	var index;
	for (index= 0; index < cities.length; ++index){
		console.log(cities[index]);
		$("#city-type").append("<option value = '" + cities[index] + "'>" + cities[index] + "</option>");
	}

	//When city is selected from dropdown, the getCityImage function will run to switch to the corresponding background image
	$("#city-type").change(getCityImage);


	// Run function that compares dropdown menu value to background image values to find match
	function getCityImage(){
		
		event.preventDefault();
		var cityName = $(this).val();

		// Remove any existing classes from the body element generated from previous user input
		$("body").removeClass();
		
		//Loop that compares user input to corresponding background images; displays the matching image

		if (cityName == "NYC"){
			$("body").addClass("nyc");
		}

		else if (cityName == "SF"){
			$("body").addClass("sf");	
		}

		else if (cityName == "LA"){
			$("body").addClass("la");
		}

		else if (cityName == "ATX"){
			$("body").addClass("austin");
		}

		else if (cityName == "SYD"){
			$("body").addClass("sydney");
		}

	}

}); //end of document.ready