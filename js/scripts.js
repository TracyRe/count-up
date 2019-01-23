$(document).ready(function(){
  $("form#countUp").submit(function(event){

    event.preventDefault();

    var countTo = parseInt($("#countTo").val());
    var countBy = parseInt($("#countBy").val());

    console.log(countTo);
    console.log(countBy);
    console.log(countTo + countBy);

    if (countTo < countBy) {
      alert("Enter a larger ending number");
    } else {

        var output = [];
        for ( var index = 0; index <= countTo; index += countBy ) {
          output.push(" " + index);
        }

        $(".well").show();
        $(".output").text(output);

        console.log(output);

    }
  });

  $("button#redo").click(function(){
    setTimeout(function () {
     location.reload()}, 100);
   });
});
