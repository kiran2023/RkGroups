const TemperatureCalculate = () =>{
    const numberVal = document.getElementById("number").value;
    console.log(numberVal);
    const degree = document.getElementById("typeSelected");
    const tempSelected = typeSelected.options[degree.selectedIndex].value;
    console.log(tempSelected);
    const display =  document.getElementById("resultDisplay");
    
    function celToFah(cel){
        const celsius = Math.round((cel*9/5)+32);
        return celsius;
    }
     
    function FahToCel(fah){
        const Fahrenheit =  Math.round((fah-32)*5/9);
        return Fahrenheit;
    }

    let result;

    if(tempSelected=='cel'){
        resultValue = celToFah(numberVal);
        alert(`Fahernheit for the Given ${numberVal}° Celsius is ${resultValue}°`);
        display.innerHTML= `=${resultValue}°Fahernheit`;
    }else{
        resultValue = FahToCel(numberVal);
        alert(`Celsius for the Given ${numberVal}° Fahernheit is ${resultValue}°`);
        display.innerHTML= `=${resultValue}°Celsius `;
        
    }
}