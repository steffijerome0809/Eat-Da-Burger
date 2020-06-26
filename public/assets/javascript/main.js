// function to house both the on-click functions-dom must be loaded
$(function () {
  // on click function next to the burger names
  $(".changeDevoured").on("click", function (event) {
    var id = $(this).data("id");
    var devouredstate = $(this).data("devouredstate");

    var newDevouredState = {
      devoured: devouredstate,
    };
    //send the put request
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState,
    }).then(function () {
      //reload
      location.reload();
    });
  });
  //on click function that creates a burger

  $("#makeBurger").on("click", function (event) {
    event.preventDefault();

    var newBurger = {
      name: $("#newBurgerName").val().trim(),
      devoured: false,
    };
    //send the post req
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created new burger");
      //reload the page to get the updated list
      location.reload();
    });
  });
});
