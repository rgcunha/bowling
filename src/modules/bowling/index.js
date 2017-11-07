export const ROLL = 'bowling/ROLL';

// State
const initialState = {
  turn: {
    player: null,
    frame: 1,
    roll: 1,
    pins: Array(10).fill(false)
  },
  players: [],
  score: {}
};

// Reducers
export default (state = initialState, action) => {
  switch (action.type) {
    case ROLL:
      return {
        ...state
      };

    default:
      return state;
  }
};

// Actions
const rollAction = () => ({
  type: ROLL
});

// Action Creators
export const roll = () => (
  (dispatch) => {
    dispatch(rollAction());
  }
);
