const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  let result = this.journeys.map((journey) => {
     return journey.startLocation})
  return result
};

Traveller.prototype.getJourneyEndLocations = function () {
  let result = this.journeys.map((journey) => {
    return journey.endLocation})
 return result
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  let result = this.journeys.filter ((journey) =>{
    return (journey.transport === transport)
  })
  return result
};

Traveller.prototype.getJourneysByMinDistance = function (distance) {
  let result = this.journeys.filter ((journey) =>{
    return (journey.distance >= distance)
  })
  return result
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let distanceTravelled = this.journeys.map((journey) =>{
    return journey.distance
  })
  let result = distanceTravelled.reduce((runningTotal, journey) =>{
    return runningTotal + journey
  }, 0)
  return result
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  let methodsTravelled = this.journeys.map ((journey) =>{
    return (journey.transport)
  })
 return result =  ([...new Set(methodsTravelled)])
}; 



module.exports = Traveller;
