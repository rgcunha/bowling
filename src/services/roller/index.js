export const roller = (pins) => {
  if (pins.length === 0) { return pins; }
  const randomResult = () => Math.random() >= 0.5;
  return pins.filter((pin) => randomResult());
}
