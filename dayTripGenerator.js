"use strict"

const destination = ["Seattle, WA", "Atlanta, GA", "Miami, Fl", "San Diego, CA", "Houston, TX"];

const restaurant = ["Starbucks", "Copelands", "Hunter Steakhouse", "J Alexanders", "China Buffet"]; 

const transportation = ["Uber", "Lyft", "Taxi", "Limo", "Walk"]; 

const entertainment = ["Concert", "Movie", "Play", "Casino", "Ballet"];

function tripGenerator(randomChoices) {
    // randomChoices is the array
    return randomChoices[Math.floor(Math.random() * randomChoices.length)];   
}

let randomDestination = tripGenerator(destination);
console.log(randomDestination);

let randomRestaurant = tripGenerator(restaurant);
console.log(randomRestaurant);

let randomTransportation = tripGenerator(transportation);
console.log(randomTransportation);

let randomEntertainment = tripGenerator(entertainment);
console.log(randomEntertainment);

let randomTrip = ['randomDestination', 'randomRestaurant', 'randomTransportation', 'randomEntertainment'];


/*function displayRandomTrip(randomTrip) {
    let finalTrip = "";
    for (let i = 0; i < randomTrip; i++){
        finalTrip += randomTrip[i] + "\n"; 
    }
    alert(finalTrip);

function app() {
    let userSatisfied = false;
    while (userSatisfied === false) {
        displayFinalTrip();

        let userInput = prompt("Do you like your trip, Yes or No");
        if (userInput === "Yes") {
            userSatisfied = true;
            displayFinalTrip(randomTrip);

        } else {
            function reselectTripChoices() {    
            }
        }
        alert("Trip complete, enjoy!");
    }
}



    function newTripSelections() {
        displayFinalTrip(randomTrip);
        let userChoice = prompt("Which one do you wish to change? 1 for Destination \n 2 for Restaurant \n 3 for Transportation \n 4 for Event");

        switch (userChoice) {
            case "1":
                trip[0] = tripGenerator(destination);
                break;

            case "2":
                trip[1] = tripGenerator(restaurant);
                break;

            case "3":
                trip[2] = tripGenerator(transportation);
                break;

            case "4":
                trip[3] = tripGenerator(entertainment);
                break;
        
            default:
                alert("Option selected unavailable. Please try again! Please select 1-4.");
                newTripSelections();
        }
    }
}
*/