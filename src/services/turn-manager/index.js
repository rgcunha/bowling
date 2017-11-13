const LAST_FRAME       = 10;
const LAST_FRAME_ROLLS = 3;
const DEFAULT_ROLLS    = 2;

export const nextTurn = (turn) => {
  return {
    ...turn,
    roll: updateRoll(turn),
    frame: updateFrame(turn),
    pinsLeft: updatePinsLeft(turn),
    inProgress: false
  }
}

const updateFrame = (turn) => {
  if (canMoveToNextFrame(turn)) { return turn.frame + 1; };
  return turn.frame;
}

const updateRoll = (turn) => {
  if (canMoveToNextFrame(turn)) { return 1; };
  return turn.roll + 1;
}

const updatePinsLeft = (turn) => {
  if (canMoveToNextFrame(turn)) { return allPins(); }
  return turn.pinsLeft;
}

const allPins = () => Array(10).fill().map((pin,index) => index + 1);

const canMoveToNextFrame = ({ frame, roll, pinsLeft }) => isLastRoll(frame, roll) || pinsLeft.length === 0;

const isLastRoll = (frame, roll) => roll === rollsPerFrame(frame);

const rollsPerFrame = frame => frame === LAST_FRAME ? LAST_FRAME_ROLLS : DEFAULT_ROLLS;
