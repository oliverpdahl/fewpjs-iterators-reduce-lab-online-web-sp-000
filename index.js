const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBatteries = function() {
  batteryBatches.reduce((total, element) => total + element)
}
