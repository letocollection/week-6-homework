
$(document).ready(function(){

	var boxers = ['Julio Cesar Chavez', 'Sugar Ray Leonard', 'Mike Tyson', 'Marvin Hagler', 'Floyd Mayweather Jr', 'Manny Paquiao', 'Miguel Cotto', 'Sugar Shane Mosley', 'Evander Holyfield', 'Lennox Lewis'];

	function displayBoxerGif (){

		var boxer = $(this).attr('data-name');
		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + boxer + "&api_key=dc6zaTOxFJmzC&limit=10";

		$.ajax({url:queryURL, method: 'GET'}).done(function(response) {
			var results = response.data;
			console.log(response.data);

			for(var i=0; i < results.length; i++){

				if (results[i].rating == "r" || results[i].rating == "pg-13"){
				}

				else {
					var boxerDiv = $('<div class="item">')
					var rating = results[i].rating;
					var p = $('<p>').text("Rating: "+ rating);
					var personImage = $('<img>');
					personImage.attr('src',results[i].images.fixed_height.url);

					boxerDiv.append(p)
					boxerDiv.append(personImage)	

					$("#gifsAppearHere").prepend(boxerDiv);

				};
			};
			
		});
	};
	function renderButtons(){

		$('#boxerView').empty();

		for(var i = 0; i < boxers.length; i++) {

			var a = $('<button>');
			a.addClass('boxer');
			a.attr('data-name', boxers[i]);
			a.text(boxers[i]);
			$('#boxerView').append(a);
		}
	}	

	$('#addBoxer').on('click', function(){

		var boxer = $('#boxer-input').val().trim();

		boxers.push(boxer);

		renderButtons();

		return false;
	});	

	$(document).on('click', '.boxer', displayBoxerGif);

	renderButtons();

	
});	
	


