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



module.exports = ScranAdvisor;