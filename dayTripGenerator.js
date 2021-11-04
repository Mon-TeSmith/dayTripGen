"use strict"

let city = ["Seattle, WA", "Atlanta, GA", "Miami, Fl", "San Diego, CA"];
let randomTown = Math.floor(Math.random() * city.length); 
    
let randomCity = city[randomTown];
    console.log(randomCity);

let restaurant = ["Starbucks", "Copelands", "Hunter Steakhouse", "J Alexanders"]; 
let randomRestaurant = Math.floor(Math.random() * restaurant.length); 
    
let randomEats = restaurant[randomRestaurant];
    console.log(randomEats);

let transportation = ["Uber", "Lyft", "Taxi", "Limo"]; 
let randomTransportation = Math.floor(Math.random() * transportation.length); 
        
let transport = transportation[randomTransportation];
    console.log(transport);

let recreationEvent = ["Concert", "Movie", "Play", "Casino"];
let randomEvent = Math.floor(Math.random() * recreationEvent.length); 
                
let recEvent = recreationEvent[randomEvent];
    console.log(recEvent);

    let userInput = prompt(`Are you satisfied? \n Yes  \n No`) 
    if (userInput === "yes") {
        // what happens if they choose yes?
        // make new selections! 
    let nextCity = Math.floor(Math.random() * city.length);

        nextCity = city[randomTown];
            console.log(nextCity);
        
    let randomRest = Math.floor(Math.random() * restaurant.length); 
    
        randomRest = restaurant[randomEats];
            console.log(randomRest);
        
    let randomTrans = Math.floor(Math.random() * transportation.length); 
            
        randomTrans = transportation[transport];
            console.log(randomTrans);
        
    let randomRec = Math.floor(Math.random() * recreationEvent.length);   
    
        randomRec = recreationEvent[recEvent];
            console.log(randomRec);
    
    }         
     
        let userInputTwo = prompt("Are you in love with these choices?");

            console.log("***CONGRATULATIONS***");
            console.log("Your Day Trip Itinerary is Complete!");

            let finalAnswers = randomCity + ", " + randomRestaurant + ", " + randomTrans + ", " + randomEvent
            console.log(finalAnswers) 