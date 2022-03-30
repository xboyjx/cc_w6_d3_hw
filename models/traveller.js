const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const startLocations = this.journeys.map((journey) => journey.startLocation)
  return startLocations
};

Traveller.prototype.getJourneyEndLocations = function () {
  const endLocations = this.journeys.map((journey) => journey.endLocation)
  return endLocations
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const journeysByTransport = this.journeys.filter(journey => journey.transport === transport)
  return journeysByTransport
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const journeysByMinDistance = this.journeys.filter(journey => journey.distance > minDistance)
  return journeysByMinDistance
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const total = this.journeys.reduce((distanceTotal, journey) => distanceTotal + journey.distance, 0)
  return total
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const allJourneysByTransport = this.journeys.map(journey => journey.transport)
  const uniqueTransportList = [... new Set(allJourneysByTransport)]
  return uniqueTransportList
};


module.exports = Traveller;
