$(document).ready(function() {

    var number = "";
  var displayDiv = $("#entry");
  displayDiv.text("0");
   var history = $("#history");
  history.text("0");
  var operators = ['+', '-', '*', '/'];
  var expr="";
  //for numbers
  $(".number").click(function() {
    number += $(this).text();
    expr += $(this).text();
    displayDiv.text(number);
    history.text(expr);
  });

  //for operators
  //
  $('.operator').click(function() {
    number += $(this).val();
    expr +=$(this).val();
    displayDiv.text(number);
    history.text(expr);
  });
  
  //for all clear
  $('.red').click(function() {
    displayDiv.text("0");
    history.text("0");
    number="";
    expr="";
  })

  //perform operation
  $('#equalButton').click(function() {
    number = eval(number);
    
    displayDiv.text(number);
    history.text(expr);
  });
  
});