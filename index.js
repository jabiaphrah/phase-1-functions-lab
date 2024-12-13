// index.js

function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(pickupLocation - 42); // HQ is on 42nd street
  }
  
  function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    return blocks * 264; // Each block is 264 feet
  }
  
  function distanceTravelledInFeet(start, destination) {
    const blocks = Math.abs(destination - start);
    return blocks * 264;
  }
  
  function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
  
    if (distanceInFeet <= 400) {
      return 0; // Free for distances up to 400 feet
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25; // Flat fee for distances between 2000 and 2500 feet
    } else {
      return 'cannot travel that far'; // No trips over 2500 feet
    }
  }
  
  // Export all functions for testing
  module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice
  };
  