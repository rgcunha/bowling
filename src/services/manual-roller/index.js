export const manualRoller = (pins, score) => {
  const totalPinsLeft = calculateTotalPinsLeft(pins, score);
  return pins.slice(0, totalPinsLeft);
}

const calculateTotalPinsLeft = (pins, score) => pins.length - score;
