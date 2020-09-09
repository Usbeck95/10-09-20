function fizzBuzz(number) {
    for(var i = 0; i < number; i++) {
        if(i % 3 === 0 && i % 5 === 0) { 
//hvis numret kan divideres med 5 og 3
            console.log("FizzBuzz");
        }
        else if (i % 3 === 0) { 
// hvis numret kan divideres med kun 3
            console.log("Fizz");
        }
        else if (i % 5 === 0) { 
//hvis numret kan divideres med kun 5
            console.log("Buzz");
        }
        else { 
// hvis ingen af delene er tilfældet printer den en default med det gældende nummer
            console.log("value of i is" + " " + i);
        }
    }
}
var n = Number(prompt('skriv et nummer'));

fizzBuzz(n);