import {
  CREATE_GOAL,
  FETCH_GOALS,
  UPDATE_GOAL,
  DELETE_GOAL,
  SELECT_GOAL
} from './types';

const API_URL = "http://localhost:3000/api/v1"

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

export function createGoal(info) {
  return dispatch => {
    fetch(`${API_URL}/notes/`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(info)
    })
    .then(resp => resp.json())
    .then(data => {
      dispatch({ type: CREATE_GOAL, goal: data })
    })
  }
}

export function selectGoal(id) {
  return { type: SELECT_GOAL, id: id }
}

export function fetchGoals() {
  return dispatch => {
    fetch(`http://localhost:3000/api/v1/users/1`)
    .then(resp => resp.json())
    .then(data => {
      dispatch ({ type: FETCH_GOALS, payload: data.notes.reverse() });
    })
  }
}

export function updateGoal(info) {
  return dispatch => {
    fetch(`${API_URL}/notes/${info.id}`, {
      method: 'PATCH',
      headers: headers,
      body: JSON.stringify(info)
    })
    .then(resp => resp.json())
    .then(data => {
      dispatch({ type: UPDATE_GOAL, data})
    })
  }
}

export function deleteGoal(id) {
  return dispatch => {
    fetch(`${API_URL}/notes/${id}`, {
      method: 'DELETE'
    })
    .then(resp => {
      dispatch({ type: DELETE_GOAL, id: id })
    })
  }
}
