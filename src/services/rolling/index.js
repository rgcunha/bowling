// Takes the current pins configuration and simulates a roll returning an updated configuration
export const randomRoll = (pins) => {
  if (pins.length === 0) { return pins; }
  const randomResult = () => Math.random() >= 0.5;
  return pins.filter((pin) => randomResult());
}

export const manualRoll = (pins, score) => {
  const totalPinsLeft = calculateTotalPinsLeft(pins, score);
  return pins.slice(0, totalPinsLeft);
}

const calculateTotalPinsLeft = (pins, score) => pins.length - score;
