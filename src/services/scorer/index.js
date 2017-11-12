const NUMBER_PINS = 10;

export const scorer = (scoring, turn) => {
  const { frame, roll, pinsLeft } = turn;
  return scoring.map((frameScoring, index) => {
    return index + 1 === frame ? updateFrameScoring(frameScoring, roll, pinsLeft) : frameScoring;
  })
}

const updateTotal = (total, pinsLeft) => total + (NUMBER_PINS - pinsLeft.length)

const updateRollsScoring = (scoring, roll, pinsLeft) => (
  scoring.map((total, index) => index + 1 === roll ? updateTotal(total, pinsLeft) : total)
)

const updateFrameScoring = (frameScoring, roll, pinsLeft) => {
  const { total, rolls } = frameScoring;
  debugger
  return {
    ...frameScoring,
    rolls: updateRollsScoring([...rolls], roll, pinsLeft),
    total: updateTotal(total, pinsLeft)
  }
}
