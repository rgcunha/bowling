import { roller } from '../../services/roller';
import { manualRoller } from '../../services/manual-roller';
import { scorer } from '../../services/scorer';
import { nextTurn } from '../../services/turn-manager';

export const ROLL         = 'bowling/ROLL';
export const MANUAL_ROLL  = 'bowling/MANUAL_ROLL'
export const SCORE        = 'bowling/SCORE';
export const NEXT_TURN    = 'bowling/NEXT_TURN';

// State
const initialState = {
  turn: {
    player: null,
    frame: 1,
    roll: 1,
    pinsLeft: Array(10).fill().map((pin,index) => index + 1),
    inProgress: false
  },
  players: [],
  scoring: [
    { rolls: Array(2).fill(0), total: 0 },
    { rolls: Array(2).fill(0), total: 0 },
    { rolls: Array(2).fill(0), total: 0 },
    { rolls: Array(2).fill(0), total: 0 },
    { rolls: Array(2).fill(0), total: 0 },
    { rolls: Array(2).fill(0), total: 0 },
    { rolls: Array(2).fill(0), total: 0 },
    { rolls: Array(2).fill(0), total: 0 },
    { rolls: Array(2).fill(0), total: 0 },
    { rolls: Array(3).fill(0), total: 0 }
  ]
};

// Reducers
export default (state = initialState, action) => {
  switch (action.type) {
    case ROLL:
      return {
        ...state,
        turn: {
          ...state.turn,
          pinsLeft: roller(state.turn.pinsLeft),
          inProgress: true
        }
      };

    case MANUAL_ROLL:
      return {
        ...state,
        turn: {
          ...state.turn,
          pinsLeft: manualRoller(state.turn.pinsLeft, action.payload),
          inProgress: true
        }
      }

    case SCORE:
      return {
        ...state,
        scoring: scorer(state.scoring, state.turn)
      };

    case NEXT_TURN:
      return {
        ...state,
        turn: nextTurn(state.turn)
      };

    default:
      return state;
  }
};

// Actions
const rollAction = () => ({
  type: ROLL
});

const manualRollAction = (pinsKnocked) => ({
  type: MANUAL_ROLL,
  payload: pinsKnocked
})

const scoreAction = () => ({
  type: SCORE
})

const nextTurnAction = () => ({
  type: NEXT_TURN
})

// Action Creators
export const roll = () => {
  return (dispatch) => {
    dispatch(rollAction());
    dispatch(scoreAction());
    const nextTurn = () => dispatch(nextTurnAction());
    setTimeout(nextTurn, 2000);
  }
};

// Action Creators
export const manualRoll = (pinsKnocked) => {
  return (dispatch) => {
    dispatch(manualRollAction(pinsKnocked));
    dispatch(scoreAction());
    const nextTurn = () => dispatch(nextTurnAction());
    setTimeout(nextTurn, 3000);
  }
};
