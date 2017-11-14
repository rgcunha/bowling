const PINS_TOTAL = 10;

export const scorer = (scoring, turn) => {
  const revertedScoring = [...scoring].reverse();
  const scoringWithCurrentScore = scoreCurrentFrame(revertedScoring, turn);
  const scoringWithWaitingScores = scoreWaitingFrames(scoringWithCurrentScore, turn);
  return [...scoringWithWaitingScores].reverse();
}

const scoreCurrentFrame = (scoring, turn) => {
  return [...scoring].map((frameScoring) => {
    return isActiveFrame(frameScoring.id, turn) ? updateCurrentFrameScoring(frameScoring, turn) : frameScoring;
  })
}

const scoreWaitingFrames = (scoring, turn) => {
  return [...scoring].map((frameScoring) => {
    if (!isActiveFrame(frameScoring.id, turn) && isWaitingScores(frameScoring)) {
      return updateWaitingFrameScoring(frameScoring, scoring, turn);
    }
    return frameScoring;
  })
}

const isActiveFrame = (id, turn) => id === turn.frame;

const isWaitingScores = frameScoring => ["SPARE", "STRIKE"].includes(frameScoring.total);

const updateCurrentFrameScoring = (frameScoring, turn) => {
  const { total, rolls } = frameScoring;
  const newScore = currentRollScore(rolls, turn);
  return {
    ...frameScoring,
    rolls: updateRollsScoring([...rolls], turn, newScore),
    total: updateTotal(total, newScore)
  }
}

const updateRollsScoring = (rolls, turn, newScore) => (
  rolls.map((oldScore, index) => index + 1 === turn.roll ? newScore : oldScore)
)

const updateTotal = (currentTotal, newScore) => {
  if (isStrike(newScore)) { return "STRIKE"; }
  if (isSpare(currentTotal, newScore)) { return "SPARE"; }
  return currentTotal + newScore;
}

const updateWaitingFrameScoring = (frameScoring, scoring, turn) => {
  return {
    ...frameScoring,
    total: updateWaitingFrameTotal(frameScoring, scoring, turn)
  }
}

const updateWaitingFrameTotal = (frameScoring, scoring, turn) => {
  const { total, id } = frameScoring;
  const nextFrameScoring = scoring.find((frameScoring) => frameScoring.id === id + 1);

  if (isWaitingScores(nextFrameScoring)) { return total; }
  if (total === "STRIKE" && turn.roll === 1) { return total; }
  return 10 + nextFrameScoring.total;
}

const isStrike = (newScore) => newScore === 10;

const isSpare = (currentTotal, newScore) => currentTotal + newScore === 10;

const currentRollScore = (rolls, turn) => {
  const { roll, pinsLeft } = turn;
  const pinsKnocked = PINS_TOTAL - pinsLeft.length;

  if (isFirstRoll(roll)) { return pinsKnocked }
  return pinsKnocked - previousRollScore(rolls, roll);
}

const previousRollScore = (rolls, roll) => {
  if (isFirstRoll(roll)) { return 0; }
  return rolls[roll - 2];
}

const isFirstRoll = (roll) => roll === 1;
