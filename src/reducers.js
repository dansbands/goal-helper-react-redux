import { combineReducers } from 'redux';
import {
  CREATE_GOAL,
  FETCH_GOALS,
  UPDATE_GOAL,
  DELETE_GOAL,
  SELECT_GOAL
} from './actions/types'

const goalsReducer = (state = { goals: [] }, action) => {
  switch (action.type) {
    case CREATE_GOAL:
      return {
        ...state,
        goals: [
          ...state.goals,
            action.goal
        ]
      };
    case SELECT_GOAL:
      return {
        ...state,
        selectedGoalId: action.id
      };
    case FETCH_GOALS:
      return [...action.payload];
    case UPDATE_GOAL:
      return [...action.payload];
    case DELETE_GOAL:
      return [...action.payload];
    default:
      return state;
  }
}

// const linksReducer = (state = [], action) => {
//   switch (action.type) {
//     case CREATE_GOAL:
//       return {
//         ...state,
//         goals: [
//           action.goal, ...state.goals
//         ]
//       };
//     case SELECT_GOAL:
//       return {
//         ...state,
//         selectedGoalId: action.id
//       };
//     case FETCH_GOALS:
//       return [...action.payload];
//     case UPDATE_GOAL:
//       return [...action.payload];
//     case DELETE_GOAL:
//       return [...action.payload];
//     default:
//       return state;
//   }
// }

const rootReducer = combineReducers({
  goals: goalsReducer,
})

export default rootReducer;
