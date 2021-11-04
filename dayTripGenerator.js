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
    console.log(recEvent); {

    let userInput = prompt(`Are you satisfied? \n Yes  \n No`) 

    let newCity = Math.floor(Math.random() * city.length);
        
        newCity = city[randomTown];
        console.log(newCity);
        
    let newRestaurant = Math.floor(Math.random() * restaurant.length); 
        
        newRestaurant = restaurant[randomRestaurant];
        console.log(newRestaurant);
        
    let newTransportation = Math.floor(Math.random() * transportation.length);    
    
        newTransportation = transportation[randomTransportation];
        console.log(newTransportation);
        
    let newRecreation = Math.floor(Math.random() * recreationEvent.length + 1);   
        
        newRecreation = recreationEvent[randomEvent];
        console.log(newRecreation);
     
        let userInputTwo = prompt(`Do you accept these choices? \n yes \n no`) 
     }  /* if (condition) {
            
        } else {
            
        }

            console.log("***CONGRATULATIONS***");
            console.log("Your Day Trip Itinerary is Complete!");

            let finalAnswers = nextCity + ", " + randomRest + ", " + randomTrans + ", " + randomRec
            console.log(finalAnswers)
            */