export const nextTurn = (turn) => {
  const { roll } = turn;
  return {...turn, roll: roll + 1}
}
