export const isGameOver = (scoring, turn) => {
  const { frame, roll } = turn;
  if (frame < 10) { return false; }
  if (roll === 3) { return true; }
  const lastFrameScoring = scoring[9];
  if (roll === 2 && lastFrameScoring.score() < 10) { return true; }
  return false
}
