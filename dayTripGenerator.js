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
     console.log(randomTrip);

}
 console.log("Are you satisfied with your itinerary? \n 'Yes'  \n 'No'") 
{
    
    let newCity = [city(randomTrip)]
            
    let newRestaurant = [restaurant(randomTrip)]
        
    let newTransportation = [transportation(randomTrip)]    
        
    let newRecreation = [recreationEvent(randomTrip)]

    function getRandomElementFromArray(array) {
        
    }
             
    let newRandomTrip = [newCity, newRestaurant, newTransportation, newRecreation]
        
    }   
    
    let userInput = prompt('Do you accept these choices? \n yes \n no') 
      
            console.log("**CONGRATULATIONS**");
            console.log("Your Day Trip Itinerary is Complete!");

            let finalAnswers = newCity + ", " + newRestaurant + ", " +  newTransportation + ", " + newRecreation
            console.log(finalAnswers)
    