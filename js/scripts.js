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

function calcHundredsPlace(hundredsPlace) {
  output = [];
  hundred = 'C';
  fiveHundred = 'D';
  oneThousand = 'M';
  for (var i = 1; i<=hundredsPlace; i++) {
    if (i === 4) {
      output.splice(1);
      output.push(fiveHundred);
    } else if (i === 5){
      output.shift();
    } else if ( i=== 9) {
      output.splice(0,3);
      output.push(oneThousand);
    } else {
      output.push(hundred);
    }
  }
    return output.join('');
}

function calcThousandsPlace(thousandsPlace) {
  output = [];
  thousand = 'M';
for (var i = 1; i<=thousandsPlace; i++) {
  output.push(thousand);
  }
  return output.join('');
}

$(document).ready(function() {
  $("#numberForm").submit(function(event) {
    event.preventDefault();

    var input = $("#input").val();

    if ($('input').val() === "" || parseInt($('input').val()) > 3999 || parseInt($('input').val()) < 1 || isNaN(parseInt($('input').val()))) {
      alert ("Please enter a number between 1 and 3999.");
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
      var output = calcThousandsPlace(thousandsPlace) + calcHundredsPlace(hundredsPlace) + calcTensPlace(tensPlace) + calcOnesPlace(onesPlace);


      $("#numberForm").hide();

      $(".input").text(input);
      $(".output").text(output);
      $("#result").show();
    }
  });
});
