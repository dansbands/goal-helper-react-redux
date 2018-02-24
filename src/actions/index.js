import {
  CREATE_GOAL,
  FETCH_GOALS,
  UPDATE_GOAL,
  DELETE_GOAL,
  SELECT_GOAL
} from './types';

export function createGoal(data) {
  return { type: CREATE_GOAL, goal: data }
}

export function selectGoal(id) {
  return { type: SELECT_GOAL, id: id }
}

export function fetchGoals() {
  return { type: FETCH_GOALS, }
}

export function updateGoal(data) {
  return { type: UPDATE_GOAL, data}
}

export function deleteGoal(id) {
  return { type: DELETE_GOAL, id: id }
}
