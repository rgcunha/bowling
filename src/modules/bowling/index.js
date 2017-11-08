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
  scoring: {
    1: { rolls: Array(2).fill(0), total: 0 },
    2: { rolls: Array(2).fill(0), total: 0 },
    3: { rolls: Array(2).fill(0), total: 0 },
    4: { rolls: Array(2).fill(0), total: 0 },
    5: { rolls: Array(2).fill(0), total: 0 },
    6: { rolls: Array(2).fill(0), total: 0 },
    7: { rolls: Array(2).fill(0), total: 0 },
    8: { rolls: Array(2).fill(0), total: 0 },
    9: { rolls: Array(2).fill(0), total: 0 },
    10: { rolls: Array(3).fill(0), total: 0 }
  }
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
