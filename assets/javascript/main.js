$(document).ready(function () {
    var gif = ["test", "test1", "test2", "test3"];
    var sport = $(this).attr("gifInput");
    $("button").on("click", function () {
        event.preventDefault();
        var gif = $(this).attr("#addGif");
        displayGifs();
	
    
              
    }); 
    function displayGifs(){
        var show = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        gif + "&api_key=9gRukuG1HPRSVI0E9uYkfj586taDoLDY";
            // creates ajax call
            $.ajax({url: queryURL, method: "GET"}).done(function (response) {
                console.log(response.data);
                // save results as a variable
                var results = response.data;
                // for loop goes through each gif and adds these variables
                for (var i = 0; i < results.length; i++) {
                    // creates a generic div to hold the results
                    var gifDiv = $('<div class=gifs>');
                    var showGif = $('<img>');
                        showGif.attr('src', results[i].images.fixed_height_still.url);
                        // shows the rating on hover
                        showGif.attr('title', "Rating: " + results[i].rating);
                        showGif.attr('data-still', results[i].images.fixed_height_still.url);
                        showGif.attr('data-state', 'still');
                        showGif.addClass('gif');
                        showGif.attr('data-animate', results[i].images.fixed_height.url);
                    // var rating = results[i].rating;
                    // var p = $('<p>').text('Rating: ' + rating);
                    gifDiv.append(showGif)
                    // gifDiv.append(p)
    
                    $("#gifs").prepend(gifDiv);
                }
                
            });
    }

    function renderButtons() {

        // Deletes the gifs prior to adding new gifs
        // (this is necessary otherwise you will have repeat buttons)
        $("#gif-buttons").empty();
        // Loops through the array of gifs
        for (var i = 0; i < gif.length; i++) {

          // Then dynamicaly generates buttons for each gif in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button class='btn-secondary' id='btn-space'>");
          // Adds a class of gif to our button
          a.addClass("gif");
          // Added a data-attribute
          a.attr("gif-data", gif[i]);
          // Provided the initial button text
          a.text(gif[i]);
          // Added the button to the buttons-view div
          $("#gif-buttons").append(a);
        }
      }
    $("#addGif").on("click", function(event) {
        event.preventDefault();
        // This line of code will grab the input from the textbox
        var gifs = $("#gifInput").val().trim();

        // The movie from the textbox is then added to our array
        gif.push(gifs);
  
        // Calling renderButtons which handles the processing of our movie array
        renderButtons();
      });

      // Adding click event listeners to all elements with a class of "movie"
  //    $(document).on("click", ".movie", displayMovieInfo);

      // Calling the renderButtons function to display the intial buttons
      renderButtons();
      

 
});