const ScranAdvisor = function(restaurants){
    this.restaurants = restaurants;
}


ScranAdvisor.prototype.numberOfRestaurants = function(){
    return this.restaurants.length;
}

ScranAdvisor.prototype.findRestaurantByName = function(nameOfRestaurant){
    for(let restaurant of this.restaurants){
        if(restaurant.name === nameOfRestaurant){
            return restaurant;
        }
    
    }
    return undefined;
}

ScranAdvisor.prototype.findAllRestaurantNames = function(){
    restaurantNames = [];
    this.restaurants.forEach(element => {
        restaurantNames.push(element.name)
        
    });

    return restaurantNames;
}


ScranAdvisor.prototype.findRestaurantByCity = function(cityName){
    restaurantInCity = [];
    this.restaurants.forEach(element => {
        if(element.location.town === cityName){
            restaurantInCity.push(element);
        }
    });

    return restaurantInCity;
}


ScranAdvisor.prototype.findCommonCuisine = function(){
    cusineList = [];
    cuisineCounter = {}
    this.restaurants.forEach(element => {
        cusineList+element.cuisines;
    })
    
    for(cuisine of cusineList){
        if(cuisineCounter[cuisine]==0){
            cuisineCounter.cuisine = 1;
        }
        else{
            cuisineCounter.cuisine = cuisineCounter[cuisine] +1;
        }
    }
    
    console.log(cusineList);
    console.log(cuisineCounter);





}





module.exports = ScranAdvisor;