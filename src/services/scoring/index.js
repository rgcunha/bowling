import FrameScoring from '../../models/frame-scoring';

const PINS_TOTAL = 10;

export const score = (scoring, turn) => {
  const scoringWithActiveFrame = scoreActiveFrame(scoring, turn);
  const scoringWithWaitingFrames = scoreWaitingFrames(scoringWithActiveFrame, turn);
  return scoringWithWaitingFrames;
}

const scoreActiveFrame = (scoring, turn) => {
  return [...scoring].map((frameScoring) => {
    if (isActiveFrame(frameScoring.id, turn)) {
      return newActiveFrameScoring(frameScoring, turn);
    }
    return frameScoring;
  })
}

const scoreWaitingFrames = (scoring, turn) => {
  return [...scoring]
    .reverse()
    .map((frameScoring) => {
      if (!isActiveFrame(frameScoring.id, turn) && frameScoring.isWaitingForFrameScores()) {
        return newWaitingFrameScoring(frameScoring, scoring, turn);
      }
      return frameScoring;
    })
    .reverse()
}

const isActiveFrame = (id, turn) => id === turn.frame;

const newActiveFrameScoring = (frameScoring, turn) => {
  const { total, rolls } = frameScoring;
  const newScore = currentRollScore(frameScoring, turn);
  return new FrameScoring({
    id: frameScoring.id,
    rolls: newRollsScoring([...rolls], turn, newScore)
  });
}

const newRollsScoring = (rolls, turn, newScore) => (
  rolls.map((oldScore, index) => index + 1 === turn.roll ? newScore : oldScore)
)

const newWaitingFrameScoring = (frameScoring, scoring, turn) => {
  return new FrameScoring({
    id: frameScoring.id,
    rolls: frameScoring.rolls,
    total: newWaitingFrameTotal(frameScoring, scoring, turn)
  });
}

const newWaitingFrameTotal = (frameScoring, scoring, turn) => {
  const { total, id } = frameScoring;
  const numberOfExtraRolls = frameScoring.isStrike() ? 2 : 1;
  const extraRolls = nextRollScores(frameScoring, scoring, numberOfExtraRolls);
  if (extraRolls) {
    return PINS_TOTAL + extraRolls.reduce((total, score) => total + score);
  }
  return null;
}

const nextRollScores = (currentFrame, scoring, numberOfRolls) => {
  const remainingScoring = scoring.slice(currentFrame.id, scoring.length);
  const rollsScores = remainingScoring
    .map((frameScoring) => frameScoring.rolls)
    .reduce((acumulator, rolls) => acumulator.concat(rolls))
    .filter((rollScore) => rollScore !== null)

  if (rollsScores.length < numberOfRolls) { return null; }
  return rollsScores.slice(0, numberOfRolls)
}

export const currentRollScore = (frameScoring, turn) => {
 const { roll, pinsLeft } = turn;
 const pinsKnocked = PINS_TOTAL - pinsLeft.length;
 if (isFirstRoll(roll)) { return pinsKnocked; }
 const previousScore = previousRollScore(frameScoring, roll);
 if ([10, 20].includes(frameScoring.score())) { return pinsKnocked; }
 return pinsKnocked - previousScore;
}

const previousRollScore = (frameScoring, roll) => {
  const { rolls } = frameScoring;
  if (isFirstRoll(roll)) { return 0; }
  return rolls[roll - 2];
}

const isFirstRoll = (roll) => roll === 1;
