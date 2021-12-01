"use strict"

let destination = ["Seattle, WA", "Atlanta, GA", "Miami, Fl", "San Diego, CA"];

let restaurant = ["Starbucks", "Copelands", "Hunter Steakhouse", "J Alexanders"]; 

let transportation = ["Uber", "Lyft", "Taxi", "Limo"]; 

let recreationEvent = ["Concert", "Movie", "Play", "Casino"];

function randomTripGenerator(randomChoices) {
    
    return randomChoices[Math.floor(Math.random() * randomChoices.length)];   
}

let randomDestination = randomTripGenerator(destination);
console.log(randomDestination);

let randomRestaurant = randomTripGenerator(restaurant);
console.log(randomRestaurant);

let randomTransportation = randomTripGenerator(transportation);
console.log(randomTransportation);

let randomRecreationEvent = randomTripGenerator(recreationEvent);
console.log(randomRecreationEvent);

let randomTrip = [randomDestination, randomRestaurant, randomTransportation, randomRecreationEvent];
// randomTrip is the (arrayOfFeatures)

function displayRandomTrip(randomTrip) {
    let finalPreliminaryTrip = "";
    for (let i = 0; i < randomTrip; i++){
        finalPreliminaryTrip += randomTrip[i] + "\n"; 
    }
    alert(finalPreliminaryTrip);

function app() {
    let userSatisfied = false;
    while (userSatisfied === false) {
        displayFinalPreliminaryTrip();

        let userInput = prompt("Do you like your trip, Yes or No");
        if (userInput === "Yes") {
            userSatisfied = true;
            displayFinalPreliminaryTrip(randomTrip);

        } else {
            function reselectTripChoices() {    
            }
        }
        alert("Trip complete, enjoy!");
    }
}



    function newTripSelections() {
        displayFinalPreliminaryTrip(randomTrip);
        let userChoice = prompt("Which one do you wish to change? 1 for Destination \n 2 for Restaurant \n 3 for Transportation \n 4 for Event");

        switch (userChoice) {
            case "1":
                trip[0] = randomTripGenerator(destination);
                break;

            case "2":
                trip[1] = randomTripGenerator(restaurant);
                break;

            case "3":
                trip[2] = randomTripGenerator(transportation);
                break;

            case "4":
                trip[3] = randomTripGenerator(recreationEvent);
                break;
        
            default:
                alert("Option selected unavailable. Please tyr again! Please select 1-4.");
                newTripSelections();
        }
    }
}