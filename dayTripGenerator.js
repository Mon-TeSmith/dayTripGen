"use strict"

/*let city = ["Seattle, WA", "Atlanta, GA", "Miami, Fl", "San Diego, CA"];
let randomNumber = Math.floor(Math.random() * city.length); {
    
let randomCity = city[randomNumber];
    console.log(randomCity);
}
let restaurant = ["Starbucks", "Copelands", "Hunter Steakhouse", "J Alexanders"]; 
let randomNumberr = Math.floor(Math.random() * restaurant.length); {
    
 let randomRestaurant = restaurant[randomNumberr];
    console.log(randomRestaurant);
}
let transportation = ["Uber", "Lyft", "Taxi", "Limo"]; 
let randomTrans = Math.floor(Math.random() * transportation.length); {
        
let randomTransportation = transportation[randomTrans];
    console.log(randomTransportation);
}
let recreation = ["Concert", "Movie", "Play", "Casino"];
let randomEvent = Math.floor(Math.random() * recreation.length); {
                
let randomRecreation = recreation[randomEvent];
    console.log(randomRecreation);
} 
    let userInput = prompt("Would you like to make another selection?") 
    if (userInput === "yes"); {
    }  */        
    let nextCity = ["Seattle, WA", "Atlanta, GA", "Miami, Fl", "San Diego, CA"];
    let randomNnumber = Math.floor(Math.random() * nextCity.length); {

    let randomCcity = nextCity[randomNnumber];
        console.log(randomCcity);
    }
    let nextRestaurant = ["Starbucks", "Copelands", "Hunter Steakhouse", "J Alexanders"];
    let randomRest = Math.floor(Math.random() * nextRestaurant.length); {

    let randomRrestaurant = nextRestaurant[randomRest];
        console.log(randomRrestaurant);
    }
    let nextTransport = ["Uber", "Lyft", "Taxi", "Limo"];
    let randomTransport = Math.floor(Math.random() * nextTransport.length); {

    let randomTtrans = nextTransport[randomTransport];
        console.log(randomTtrans);
    }
    let nextRecreation = ["Concert", "Movie", "Play", "Casino"];
    let randomRec = Math.floor(Math.random() * nextRecreation.length); {

    let randomEventRec = nextRecreation[randomRec];
        console.log(randomEventRec);
    }
        let userInputTwo = prompt("Are these choices to your liking?");

            console.log("***CONGRATULATIONS***");
            console.log("Your Day Trip Itinerary is Complete!");

            let finalAnswers = nextCity[randomNnumber] + ", " + nextRestaurant[randomRest] + ", " + nextTransport[randomTransport] + " ," + nextRecreation[randomRec]
            console.log(finalAnswers)