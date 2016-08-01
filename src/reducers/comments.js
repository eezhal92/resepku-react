export const ADD_COMMENTS = 'ADD_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'

export const commentsInitialState = {
  recipeId: 0,
  items: []
}

function comments(state = commentsInitialState, action) {
  switch(action.type) {
    case ADD_COMMENTS:
      return { ...state, items: action.comments, recipeId: action.recipeId }
    case ADD_COMMENT:
      let items = [...state.items, action.comment]
      return { ...state, items, recipeId: action.recipeId }
    default:
      return state
  }
}

export default comments
