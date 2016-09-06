$(document).ready(function(){
	// Get user input when update button is clicked
	$("#submit-btn").click(getCityImage);

	// Run function that compares user input values to background image values to find match
	function getCityImage(){
		
		event.preventDefault();

		// Store user input in a variable
		var cityName;
		cityName = $("#city-type").val();
		// Transform user input to lowercase
		cityName = cityName.toLowerCase();

		// Remove any existing classes from the body element so user can continue to input values
		var cityClass = $("body").attr("class");
		$("body").removeClass();
		$(".error-message").empty();
		
		//Loop that compares user input to values for corresponding background images; displays the matching image

		if (cityName == "new york city" || cityName == "new york" || cityName == "nyc"){
			$("body").addClass("nyc");
		}

		else if (cityName == "san francisco" || cityName == "bay area" || cityName == "sf"){
			$("body").addClass("sf");
		}

		else if (cityName == "los angeles" || cityName == "la" || cityName == "lax"){
			$("body").addClass("la");
		}

		else if (cityName == "austin" || cityName == "atx"){
			$("body").addClass("austin");
		}

		else if (cityName == "sydney" || cityName == "syd"){
			$("body").addClass("sydney");
		}

		else {
			$("body").addClass("citypix_skyline");
			$(".error-message").append("We currently don't have images of this city. Check back later!");
		}

		//clears the field so user can input another value
		$("#city-type").val("");

	}

}); //end of document.ready