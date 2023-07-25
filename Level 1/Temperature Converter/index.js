const Button = document.querySelector("#btn");
Button.addEventListener("click", function() {
    
    let temp = document.getElementById("temp").value;
    let tempUnit = document.getElementById("unit").value;
    let tempConvert = document.getElementById("convert").value;
    let result = document.getElementById("result");

    if (temp == "") {
        alert("I'm sorry, but you must enter a temperature to convert.");
    }
    else if(temp < -273.15){
        alert("I'm sorry, but you must enter a temperature above absolute zero.");
    }
    else if(tempUnit == "select" || tempConvert == "select"){
        alert("Are you kidding me ? Please select a unit");
    }
    else if(tempUnit == tempConvert){
        alert("Are you kidding me ? Please select a different unit");
    }
    else if(tempUnit == "celsius" && tempConvert == "fahrenheit"){
        result.value = (temp * 9) / 5 + 32;
    }
    else if(tempUnit == "celsius" && tempConvert == "kelvin"){
        result.value = temp + 273.15;
    }
    else if(tempUnit == "fahrenheit" && tempConvert == "celsius"){
        result.value = (temp - 32) * 5 / 9;
    }
    else if(tempUnit == "fahrenheit" && tempConvert == "kelvin"){
        result.value = (temp - 32) * 5 / 9 + 273.15;
    }
    else if(tempUnit == "kelvin" && tempConvert == "celsius"){
        result.value = temp - 273.15;
    }
    else if(tempUnit == "kelvin" && tempConvert == "fahrenheit"){
        result.value = (temp - 273.15) * 9 / 5 + 32;
    }
    else{
        result.value = "Invalid";
    }
});