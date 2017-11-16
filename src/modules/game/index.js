import FrameScoring from '../../models/frame-scoring';

import { manualRoll, randomRoll } from '../../services/rolling';
import { score } from '../../services/scoring';
import { nextTurn } from '../../services/turn';
import { isGameOver } from '../../services/game-over';

export const RANDOM_ROLL    = 'bowling/RANDOM_ROLL';
export const MANUAL_ROLL    = 'bowling/MANUAL_ROLL';
export const SCORE          = 'bowling/SCORE';
export const NEXT_TURN      = 'bowling/NEXT_TURN';

// State
const initialState = {
  inProgress: true,
  turn: {
    player: null,
    frame: 1,
    roll: 1,
    pinsLeft: Array(10).fill().map((pin, index) => index + 1),
    inProgress: false
  },
  players: [],
  scoring: [
    new FrameScoring({ id: 1 }),
    new FrameScoring({ id: 2 }),
    new FrameScoring({ id: 3 }),
    new FrameScoring({ id: 4 }),
    new FrameScoring({ id: 5 }),
    new FrameScoring({ id: 6 }),
    new FrameScoring({ id: 7 }),
    new FrameScoring({ id: 8 }),
    new FrameScoring({ id: 9 }),
    new FrameScoring({ id: 10, lastFrame: true })
  ]
};

// Reducers
export default (state = initialState, action) => {
  switch (action.type) {
    case RANDOM_ROLL:
      return {
        ...state,
        turn: {
          ...state.turn,
          pinsLeft: randomRoll(state.turn.pinsLeft),
          inProgress: true
        }
      };

    case MANUAL_ROLL:
      return {
        ...state,
        turn: {
          ...state.turn,
          pinsLeft: manualRoll(state.turn.pinsLeft, action.payload),
          inProgress: true
        }
      };

    case SCORE:
      return {
        ...state,
        scoring: score(state.scoring, state.turn)
      };

    case NEXT_TURN:
      return {
        ...state,
        inProgress: !isGameOver(state.scoring, state.turn),
        turn: nextTurn(state.turn, state.scoring)
      };

    default:
      return state;
  }
};

// Actions
const randomRollAction = () => ({
  type: RANDOM_ROLL
});

const manualRollAction = pinsKnocked => ({
  type: MANUAL_ROLL,
  payload: pinsKnocked
});

const scoreAction = () => ({
  type: SCORE
});

const nextTurnAction = () => ({
  type: NEXT_TURN
});

// Action Creators
export const processRandomRoll = () => (dispatch) => {
  dispatch(randomRollAction());
  dispatch(scoreAction());
  const nextTurn = () => dispatch(nextTurnAction());
  setTimeout(nextTurn, 2000);
};

export const processManualRoll = pinsKnocked => (dispatch) => {
  dispatch(manualRollAction(pinsKnocked));
  dispatch(scoreAction());
  const nextTurn = () => dispatch(nextTurnAction());
  setTimeout(nextTurn, 2000);
};
