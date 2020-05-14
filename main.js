"use strict";

function renderCoffee(coffee) {
    var html = '<tr class="coffee">';
    html += '<td>' + coffee.id + '</td>';
    html += '<td>' + coffee.name + '</td>';
    html += '<td>' + coffee.roast + '</td>';
    html += '</tr>';

    return html;
}
//Search Bar attempt
// function renderCoffees() {
//     var html = '';
//     let input = document.getElementById('search').value;
//     input=input.toLowerCase();
//     let coffees = document.getElementsByClassName('coffee');
//
//     for (var j = 0; j < coffees.length; j++) {
//         html += renderCoffee(coffees[j]);
//         if (!coffees[j].innerHTML.toLowerCase().includes(input)) {
//             coffees[j].style.display="none";
//         }
//
//          else {
//             coffees[j].style.display="list-item";
//         }
//     }
// }

//changed loop to be in ascending order
function renderCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}



function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var roastAll = allRoast.value;
    var filteredCoffees = [];
    var selectedCoffees = coffeeSelection.value;
    // var roastAdditon = document.forms.myFormTwo.add;
    coffees.forEach(function(coffee) {
        var search = document.querySelector("#search").value.toLowerCase();
        if (coffee.roast === selectedRoast || coffee.allRoast === roastAll &&  coffee.name.toLowerCase().includes(search)=== true ) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}


// document.getElementById('search').addEventListener("keyup", function updateCoffees(){

// console.log()
// can you console log whats in text input
// can you loop through coffees for each coffee does the name match whats been typed
// });

// function autoComplete() {
//     var x = document.getElementById("search").value;
//     document.getElementById('myForm').innerHTML
//         = x;
//
// }

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light', allRoast:'all'},
    {id: 2, name: 'Half City', roast: 'light', allRoast:'all'},
    {id: 3, name: 'Cinnamon', roast: 'light',  allRoast:'all'},
    {id: 4, name: 'City', roast: 'medium',  allRoast:'all'},
    {id: 5, name: 'American', roast: 'medium',  allRoast:'all'},
    {id: 6, name: 'Breakfast', roast: 'medium',  allRoast:'all'},
    {id: 7, name: 'High', roast: 'dark',  allRoast:'all'},
    {id: 8, name: 'Continental', roast: 'dark',  allRoast:'all'},
    {id: 9, name: 'New Orleans', roast: 'dark',  allRoast:'all'},
    {id: 10, name: 'European', roast: 'dark',  allRoast:'all'},
    {id: 11, name: 'Espresso', roast: 'dark',  allRoast:'all'},
    {id: 12, name: 'Viennese', roast: 'dark',  allRoast:'all'},
    {id: 13, name: 'Italian', roast: 'dark',  allRoast:'all'},
    {id: 14, name: 'French', roast: 'dark',  allRoast:'all'},
];
// coffees.push.toString('#addCoffee');
// function pushData(){ 
//     var text = new Object (document.getElementById("addCoffee").value);  
//     coffees.push(typeof text);   
//     console.log(coffees.toString()); 
// }
function coffeeAddition() {
    var x = document.getElementById('#addCoffee').value;
    coffees.push(x);
    console.log(coffees);
    return renderCoffee();
}


var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var coffeeSelection = document.querySelector("#search");
var search = document.querySelector("#search");
var allRoast = document.querySelector('#roast-selection');
var addButton = document.querySelector('#adding');
var addCoffee = document.querySelector('#addCoffee');
//adding var for adding roast
// var roastAddition = document.querySelector('#roast-addition');


tbody.innerHTML = renderCoffees(coffees);
addButton.addEventListener('click', coffeeAddition);

submitButton.addEventListener('click', updateCoffees);
search.addEventListener('keyup', updateCoffees);

