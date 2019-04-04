function calcOnesPlace(onesPlace){
  output = [];
  one = 'I';
  five = 'V';
  ten = 'X';
  for (var i = 1; i<=onesPlace; i++) {
    if (i === 4) {
      output.splice(1);
      output.push(five);
    } else if (i === 5){
      output.shift();
    } else if ( i=== 9) {
      output.splice(0,3);
      output.push(ten);
    } else {
      output.push(one);
    }
  }
  return output.join('');
}
function calcTensPlace(tensPlace) {
  output = [];
  ten = 'X';
  fifty = 'L';
  oneHundred = 'C';
  for (var i = 1; i<=tensPlace; i++) {
    if (i === 4) {
      output.splice(1);
      output.push(fifty);
    } else if (i === 5){
      output.shift();
    } else if ( i=== 9) {
      output.splice(0,3);
      output.push(oneHundred);
    } else {
      output.push(ten);
    }
  }
    return output.join('');
}


$(document).ready(function() {
  $("#numberForm").submit(function(event) {
    event.preventDefault();

    var input = $("#input").val();
    if ($('input').val() === "") {
      alert ("Please enter your number");
    } else {
      var splitNumber = input.split("");
      var onesPlace = splitNumber[splitNumber.length - 1];
      if (splitNumber.length > 1) {
        var tensPlace = splitNumber[splitNumber.length - 2];
      }
      if (splitNumber.length > 2) {
        var hundredsPlace = splitNumber[splitNumber.length - 3];
      }
      if (splitNumber.length > 3) {
        var thousandsPlace = splitNumber[splitNumber.length - 4];
      }
      var output = calcTensPlace(tensPlace);
      console.log(output);
      // console.log(onesPlace);
      // console.log(tensPlace);
      // console.log(hundredsPlace);
      // console.log(thousandsPlace);

      $("#numberForm").hide();

      $("#result").show();
    }
  });
});
