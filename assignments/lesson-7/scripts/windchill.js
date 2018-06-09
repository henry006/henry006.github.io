function computeNum() {
    // Input - get input and validate if correct length and if a number
    var windSpeed = get("ws").value;
    var temperature = get("t").value;
  //  if (windSpeed.length < 3 || isNaN(windSpeed)) return; // Validation return nothing

    // Processing - multiply by the a random number taken to the 3rd power
    var theNumberS = parseInt(windSpeed);
    var theNumberT = parseInt(temperature);// OK - parse string to number
  //  var theValue = theNumber * Math.pow(Math.random(), 3);
   // var theValue = theNumberS + theNumberT ;
    //var theValue = 35.74 + 0.6215;
    //var theValue = 36.3615 * theNumberT;

   var theValue = 35.74 + 0.6215 * theNumberT + (0.4275 * theNumberT - 35.75) * (Math.pow(theNumberS, 0.16));

    // Output - output to the div and round the number value to two decimal places
    get("output").innerHTML = "The temperature will feel like <strong>" + theValue.toFixed(2) + "</strong>&deg;F";
}

function get(e) { return document.getElementById(e); }
