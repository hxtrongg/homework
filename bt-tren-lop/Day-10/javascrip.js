
$(document).ready(function() {

    $("#toggleBtn").click(function() {
        $("#navigation").toggleClass("show");
      });
    
      // Sử dụng show với speed để hiển thị navigation mềm mại (slide down) khi nhấp vào button
      $("#toggleBtn").click(function() {
        $("#navigation").show(300);
      });
    
      // Sử dụng fadeIn với speed để hiển thị navigation mờ dần khi nhấp vào button
      $("#toggleBtn").click(function() {
        $("#navigation").fadeIn(300);
      });
    
      // Sử dụng slideDown với speed để hiển thị navigation trượt xuống khi nhấp vào button
      $("#toggleBtn").click(function() {
        $("#navigation").slideDown(300);
      });

  $("#calculateBtn").click(function() {
    
    let num1 = parseFloat($("#a").val());
    let num2 = parseFloat($("#b").val());
    let operator = $("#op").val();
    let result = 0;

    
    switch (operator) {
      case "add":
        result = num1 + num2;
        break;
      case "subtract":
        result = num1 - num2;
        break;
      case "multiply":
        result = num1 * num2;
        break;
      case "divide":
        result = num1 / num2;
        break;
      case "modulus":
        result = num1 % num2;
        break;
      default:
        result = "Invalid operator";
    }

    
    $("#result").text("Result: " + result);
  });
});

// $(document).ready(function() {
//     // Sử dụng toogleClass để hiển thị/ẩn navigation khi nhấp vào button
//     $("#toggleBtn").click(function() {
//       $("#navigation").toggleClass("show");
//     });
  
//     // Sử dụng show với speed để hiển thị navigation mềm mại (slide down) khi nhấp vào button
//     $("#toggleBtn").click(function() {
//       $("#navigation").show(300);
//     });
  
//     // Sử dụng fadeIn với speed để hiển thị navigation mờ dần khi nhấp vào button
//     $("#toggleBtn").click(function() {
//       $("#navigation").fadeIn(300);
//     });
  
//     // Sử dụng slideDown với speed để hiển thị navigation trượt xuống khi nhấp vào button
//     $("#toggleBtn").click(function() {
//       $("#navigation").slideDown(300);
//     });
//   });