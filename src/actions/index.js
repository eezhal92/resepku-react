import axios from 'axios'
import { ADD_RECIPES, INCREMENT_LOVE, DECREMENT_LOVE, UPDATE_RECIPES_PAGE, RESET_AND_ADD_RECIPES } from './../reducers/recipes'
import { ADD_COMMENTS, ADD_COMMENT } from './../reducers/comments'
import { SET_LOGGED_IN_USER, LOG_OUT } from './../reducers/accounts'
import { goBack } from 'react-router-redux'

const req = axios.create({
  baseURL: 'http://resepku.eezhal92.com/api'
});

export function addRecipes(recipes) {
  return {
    type: ADD_RECIPES,
    recipes
  }
}

export function loveRecipe(index) {
  return {
    type: INCREMENT_LOVE,
    index
  }
}

export function unloveRecipe(index) {
  return {
    type: DECREMENT_LOVE,
    index
  }
}

export function updateRecipePage(currentPage, lastPage) {
  return {
    type: UPDATE_RECIPES_PAGE,
    currentPage,
    lastPage
  }
}

export function resetAndAddRecipes(recipes) {
  return {
    type: RESET_AND_ADD_RECIPES,
    recipes
  }
}

export function selectRecipe(recipe) {
  return {
    type: 'SELECT_RECIPE',
    recipe
  }
}

export function fetchRecipe(id) {
  return dispatch => {
    return req.get(`/v1/recipes/${id}`).then(response => {
      dispatch(selectRecipe(response.data))
    })
  }
}

export function fetchRecipes(params) {
  return dispatch => {
    dispatch({ type: 'RECIPES_FETCHING_START' })

    return req.get('/v1/recipes', {
      params: params
    }).then(response => {
      dispatch({ type: 'RECIPES_FETCHING_FULFILLED' })
      let data = response.data.data
      if (params.categories) {
        dispatch(resetAndAddRecipes(data))
      } else {
        dispatch(addRecipes(data))
      }

      dispatch(updateRecipePage(response.data.current_page, response.data.last_page))
    }).catch(err => {
      console.info('error cathed', ''+err)
      dispatch({ type: 'RECIPES_FETCHING_REJECTED', error: err})
    })
  }
}

export function toggleCategory(id) {
  return {
    type: 'TOGGLE_CATEGORY_FILTER',
    id
  }
}

export function addComments(recipeId, comments) {
  return {
    type: ADD_COMMENTS,
    recipeId,
    comments
  }
}

export function addComment(recipeId, comment) {
  return {
    type: ADD_COMMENT,
    recipeId,
    comment
  }
}

export function fetchComments(recipeId) {
  return dispatch => {
    return req.get(`/v1/recipes/${recipeId}/comments`).then(response => {
      dispatch(addComments(recipeId, response.data.data))
    })
  }
}

export function registerUser(params) {
  return dispatch => {
    return req.post('/v1/accounts', params).then(response => {
      console.log(response.data)
    })
  }
}

export function setLoggedInUser(user, token) {
  return {
    type: SET_LOGGED_IN_USER,
    user,
    token
  }
}

export function loginUser(params) {
  return dispatch => {
    return req.post('/v1/auth', params).then(response => {
      let token = response.data.token

      return req.get('/v1/accounts/me', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then(response => {
        let user = response.data
        localStorage.setItem('auth_token', token)
        dispatch(setLoggedInUser(user, token))
        dispatch(goBack())
      })
    }).catch(e => {
      alert('error')
    })
  }
}

export function logoutUser() {
  localStorage.removeItem('auth_token')
  return {
    type: LOG_OUT
  }
}

export function redirect(path) {
  return dispatch => {
    dispatch(push(path))
  }
}

export function checkTokenInStorage() {
  alert('cheking token...')
}

export function toggleLove(recipeId) {
  let token = localStorage.getItem('auth_token')
  req.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  return () => {
    return req.post(`/v1/recipes/${recipeId}/love`).then(response => {
      console.log(response, 'love success')
    })
  }
}

export function postComment(recipeId, title, body) {
  let token = localStorage.getItem('auth_token')
  req.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  return dispatch => {
    return req.post(`/v1/recipes/${recipeId}/comments`, {
      title,
      body
    }).then(response => {
      console.log(response.data, 'post comment')
      dispatch(addComment(recipeId, response.data))
    })
  }
}
