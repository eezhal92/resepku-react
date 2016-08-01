export const ADD_COMMENTS = 'ADD_COMMENTS'

export const commentsInitialState = {
  recipeId: 0,
  items: []
}

function comments(state = commentsInitialState, action) {
  switch(action.type) {
    case ADD_COMMENTS:
      return { ...state, items: action.comments, recipeId: action.recipeId }
    default:
      return state
  }
}

export default comments
