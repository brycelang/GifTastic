$(document).ready(function () {
    var movies = [""];

    $("button").on("click", function () {
		var movie = $(this).attr("movie-data");
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
			movie + "&api_key=9gRukuG1HPRSVI0E9uYkfj586taDoLDY";

		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function (response) {
                  
        });       
    }); 
});