import { combineReducers } from 'redux';
import cuid from 'cuid';
import {
  CREATE_GOAL,
  FETCH_GOALS,
  UPDATE_GOAL,
  DELETE_GOAL,
  SELECT_GOAL
} from './actions/types'


const initialGoalState = {
  all: [],
  selectedGoalId: ""
}

const goalsReducer = (state = initialGoalState, action) => {
  switch (action.type) {
    case CREATE_GOAL:
      action.goal.id = cuid()
      return {
        ...state,
        all: [
          action.goal,
          ...state.all
        ]
      };
    case SELECT_GOAL:
      return {
        ...state,
        selectedGoalId: action.id
      };
    case FETCH_GOALS:
    console.log('fetching goals', action);
      return {
        ...state,
        all: [...action.payload]
      }
    case UPDATE_GOAL:
      console.log("updateGoal", action);
      let goal = state.all.find(g => g.id === action.data.id)
      goal.title = action.data.title
      goal.body = action.data.body
      goal.id = action.data.id
      state.selectedGoalId = ""
      console.log("updating Goal", state);
      return {
        ...state,
        all: [
          ...state.all
        ]
      };
    case DELETE_GOAL:
    console.log('deleting Goal', action);
    let goals = state.all.filter(g => g.id !== action.id)
    console.log('goals', goals);
      return {
        ...state,
        all: goals
      }
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
