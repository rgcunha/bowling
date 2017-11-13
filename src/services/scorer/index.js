const PINS_TOTAL = 10;

export const scorer = (scoring, turn) => {
  const { frame, roll, pinsLeft } = turn;
  return scoring.map((frameScoring, index) => {
    return index + 1 === frame ? updateFrameScoring(frameScoring, roll, pinsLeft) : frameScoring;
  })
}

const updateFrameScoring = (frameScoring, roll, pinsLeft) => {
  const { total, rolls } = frameScoring;
  const newScore = currentRollScore(rolls, roll, pinsLeft);
  return {
    ...frameScoring,
    rolls: updateRollsScoring([...rolls], roll, newScore),
    total: total + newScore
  }
}

const updateRollsScoring = (rolls, roll, newScore) => (
  rolls.map((oldScore, index) => index + 1 === roll ? newScore : oldScore)
)

const currentRollScore = (rolls, roll, pinsLeft) => {
  const pinsKnocked = PINS_TOTAL - pinsLeft.length;
  if (isFirstRoll(roll)) { return pinsKnocked }
  return pinsKnocked - previousRollScore(rolls, roll);
}

const previousRollScore = (rolls, roll) => {
  if (isFirstRoll(roll)) { return 0; }
  return rolls[roll - 2];
}

const isFirstRoll = (roll) => roll === 1;
