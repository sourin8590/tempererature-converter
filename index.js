

const select1 = document.getElementById('input-unit');

var x = "celcius";

select1.addEventListener('change', function handleChange(event) {
    x = event.target.value;
    var input_change = document.getElementById('input-temp');
    input_change.value = '';
    var output_change = document.getElementById('output').firstElementChild;
    output_change.innerHTML = '';
});

const select2 = document.getElementById('output-unit');

var y = "fahrenheit";

select2.addEventListener('change', function handleChange(event) {
    y = event.target.value;
    var inputElement = document.getElementById('input-temp').value;
    var input_change = document.getElementById('input-temp');
    input_change.value = '';
    var output_change = document.getElementById('output').firstElementChild;
    output_change.innerHTML = '';
});

var k = document.getElementById('button')
k.addEventListener('click', ()=>{
    var inputElement = document.getElementById('input-temp').value;
    if(x == y){
        var change = document.getElementById('output').firstElementChild;
        change.innerHTML = inputElement;
        // console.log(inputElement);
    }
    else if(x === "celcius" && y === "fahrenheit"){
        var ans = (9*inputElement + 160)/5;
        ans = ans.toFixed(3);
        var change = document.getElementById('output').firstElementChild;
        change.innerHTML = ans;
    }
    else if(x === "celcius" && y === "kelvin"){
        var ans = +inputElement + 273.15;
        var change = document.getElementById('output').firstElementChild;
        change.innerHTML = ans;
    }
    else if(x === "fahrenheit" && y === "celcius"){
        var ans = 5*(inputElement - 32)/9;
        ans = ans.toFixed(3);
        var change = document.getElementById('output').firstElementChild;
        change.innerHTML = ans;
    }

    else if(x === "fahrenheit" && y === "kelvin"){
        var ans = (5*inputElement + 2298.35)/9;
        ans = ans.toFixed(3);
        var change = document.getElementById('output').firstElementChild;
        change.innerHTML = ans;
    }
    else if(x === "kelvin" && y === "celcius"){
        var ans = +inputElement - 273.15;
        ans = ans.toFixed(3);
        var change = document.getElementById('output').firstElementChild;
        change.innerHTML = ans;
    }
    else if(x === "kelvin" && y === "fahrenheit"){
        var ans = (9*inputElement - 2298.35)/5;
        ans = ans.toFixed(3);
        var change = document.getElementById('output').firstElementChild;
        change.innerHTML = ans;
    }
})

var reset_btn = document.getElementById('reset');
reset_btn.addEventListener('click', function(){
    var input_change = document.getElementById('input-temp');
    input_change.value = '';
    var output_change = document.getElementById('output').firstElementChild;
    output_change.innerHTML = '';
})


