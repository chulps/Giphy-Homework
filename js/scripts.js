$("button").on("click", function() {
      var food = $(this).attr("data-food");
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + food + "&api_key=dc6zaTOxFJmzC&limit=20";
      $.ajax({
          url: queryURL,
          method: "GET"
        })
        .then(function(response) {
          var results = response.data;
          for (var i = 0; i < results.length; i++) {
            if (results[i].title !== "r" && results[i].title !== "pg-13") {
              var gifDiv = $("<div class='item'>");
              var title = results[i].title;
              var p = $("<p>").text("title: " + title);
              var foodImage = $("<img>");
              foodImage.attr("src", results[i].images.fixed_height.url);
              gifDiv.append(p);
              gifDiv.append(foodImage);
              $("#photos").prepend(gifDiv);
            }
          }
        });
    });

function getRandomSize(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}



for (var i = 0; i < 25; i++) {
  var width = getRandomSize(200, 400);
  var height =  getRandomSize(200, 400);
  
}

$('#photos').prepend(foodImages);