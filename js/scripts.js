

$(document).ready(function() {
  $("form#pigLatin").submit(function(event) {
    event.preventDefault();

    var input = $("#input").val();
    if ($('input').val() === "") {
      alert ("Please enter your number");
    } else {
      var splitNumber = input.split("");

      console.log(splitNumber);
      $("#numberForm").hide();

      $("#result").show();
    }
  });
});
