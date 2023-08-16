
const celsius = document.getElementById('Celsius');
const fahren= document.getElementById('Fahrenheit');
const kelvin = document.getElementById('Kelvin');

function temperature(event){
    const currentValue = event.target.value;
    switch(event.target.name)
    {
        case "celsius":
           fahren.value=(currentValue * 9/5) + 32 ;
           kelvin.value=parseFloat(currentValue ) + 273.15 ;
           break;

        case "fahrenheit":
           celsius.value=(currentValue  - 32) * 5/9 ;
           kelvin.value=(currentValue  - 32) * 5/9 + 273.15 ;
           break;

        case "kelvin":
           celsius.value= (currentValue - 273.15);
           fahren.value=(currentValue - 273.15) * 9/5 + 32;
           break;

        default:
            break;
    }
}

