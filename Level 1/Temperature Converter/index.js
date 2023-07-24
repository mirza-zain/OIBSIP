const Button = document.querySelector("#btn");
Button.addEventListener("click", function() {
    
    let temp = document.getElementById("temp").value;
    let tempUnit = document.getElementById("unit").value;
    let tempConvert = document.getElementById("convert").value;
    let result = document.getElementById("result");
 
    if(tempUnit == "celsius" && tempConvert == "fahrenheit"){
        result.value = (temp * 9) / 5 + 32;
    }
    if(tempUnit == "celsius" && tempConvert == "kelvin"){
        result.value = temp + 273.15;
    }
    if(tempUnit == "fahrenheit" && tempConvert == "celsius"){
        result.value = (temp - 32) * 5 / 9;
    }
    if(tempUnit == "fahrenheit" && tempConvert == "kelvin"){
        result.value = (temp - 32) * 5 / 9 + 273.15;
    }
    if(tempUnit == "kelvin" && tempConvert == "celsius"){
        result.value = temp - 273.15;
    }
    if(tempUnit == "kelvin" && tempConvert == "fahrenheit"){
        result.value = (temp - 273.15) * 9 / 5 + 32;
    }
});