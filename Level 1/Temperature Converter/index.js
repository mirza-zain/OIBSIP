const Button = document.querySelector("#btn");
Button.addEventListener("click", function () {
    let tempUnit = document.getElementById("unit").value;
    let temp = document.getElementById("temp").value;
    let tempConvert = document.getElementById("convert").value;
    let result = document.getElementById("result");

    if (tempUnit == "celcius" && tempConvert =="farenheit") {
        result.innerHTML = ((temp * 9) / 5 + 32) + " Farenheit";
    } else if (tempUnit === "farenheit") {
        result.innerHTML = ((temp - 32) * 5) / 9 + " Celcius";
    } else if (tempUnit === "kelvin") {
        result.innerHTML = ((temp - 273.15) * 9) / 5 + 32 + " Farenheit";
    } else {
        result.innerHTML = "Please select a unit";
    }
    console.log(tempUnit);
    console.log(temp);
    console.log(result);
});