$(document).ready(function(){

	var boxers = ['Julio Cesar Chavez', 'Sugar Ray Leonard', 'Mike Tyson', 'Marvin Hagler', 'Floyd Mayweather Jr', 'Manny Paquiao', 'Miguel Cotto', 'Sugar Shane Mosley', 'Evander Holyfield', 'Lennox Lewis'];

	function alertBoxerName (){
	


	
		var boxer = $(this).data('boxer');
		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + boxer + "&api_key=dc6zaTOxFJmzC&limit=10";

	

		$.ajax({
			url: queryURL,
			method: 'GET'
		})

		.done(function(response) {

		console.log(queryURL);

		console.log(response)

		var results = response.data;

		for (var i = 0; i < results.length; i++) {
			var boxerDiv = $('<div class="item">');

			var p = $('<p>').text("Rating: " + results[i].rating);

			var boxerImage = $('<img>');
			boxerImage.attr('src', results[i].images.fixed_height.url);

			boxerDiv.append(p);
			boxerDiv.append(boxerImage);

			$('#gifsAppearHere').prepend(boxerDiv);

		}

		});

	}	


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

	$(document).on('click', '.boxer', alertBoxerName);
	
	renderButtons();

});