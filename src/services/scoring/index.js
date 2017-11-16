import FrameScoring from '../../models/frame-scoring';

const PINS_TOTAL = 10;

export const score = (scoring, turn) => {
  const scoringWithActiveFrame = scoreActiveFrame(scoring, turn);
  const scoringWithOpenFrames = scoreOpenFrames(scoringWithActiveFrame, turn);
  return scoringWithOpenFrames;
}

const scoreActiveFrame = (scoring, turn) => {
  return [...scoring].map((frameScoring) => {
    if (isActiveFrame(frameScoring.id, turn)) {
      return newActiveFrameScoring(frameScoring, turn);
    }
    return frameScoring;
  })
}

const scoreOpenFrames = (scoring, turn) => {
  return [...scoring]
    .reverse()
    .map((frameScoring) => {
      if (!isActiveFrame(frameScoring.id, turn) && frameScoring.isWaitingForFrameScores()) {
        return newOpenFrameScoring(frameScoring, scoring, turn);
      }
      return frameScoring;
    })
    .reverse()
}

const isActiveFrame = (id, turn) => id === turn.frame;

const newActiveFrameScoring = (frameScoring, turn) => {
  const { total, rolls } = frameScoring;
  const newScore = currentRollScore(rolls, turn);
  return new FrameScoring({
    id: frameScoring.id,
    rolls: newRollsScoring([...rolls], turn, newScore)
  });
}

const newRollsScoring = (rolls, turn, newScore) => (
  rolls.map((oldScore, index) => index + 1 === turn.roll ? newScore : oldScore)
)

const newOpenFrameScoring = (frameScoring, scoring, turn) => {
  return new FrameScoring({
    id: frameScoring.id,
    rolls: frameScoring.rolls,
    total: newOpenFrameTotal(frameScoring, scoring, turn)
  });
}

const newOpenFrameTotal = (frameScoring, scoring, turn) => {
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
