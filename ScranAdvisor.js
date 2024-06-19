const ScranAdvisor = function(restaurants){
    this.restaurants = restaurants;
}


ScranAdvisor.prototype.numberOfRestaurants = function(){
    return this.restaurants.length;
}

module.exports = ScranAdvisor;