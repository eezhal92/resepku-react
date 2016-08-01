export const ADD_RECIPES = 'ADD_RECIPES'
export const INCREMENT_LOVE = 'INCREMENT_LOVE'
export const DECREMENT_LOVE = 'DECREMENT_LOVE'
export const UPDATE_RECIPES_PAGE = 'UPDATE_RECIPES_PAGE'
export const RESET_AND_ADD_RECIPES = 'RESET_AND_ADD_RECIPES'

export const recipesInitialState = {
  items: [],
  currentPage: 1,
  lastPage: 1,
  fetching: false,
  fetched: false,
  error: false,
  selectedRecipe: {}
}

function recipes(state = recipesInitialState, action) {
  switch (action.type) {
    case 'RECIPES_FETCHING_START':
      return { ...state, fetching: true, error: false }
    case 'RECIPES_FETCHING_FULFILLED':
      return { ...state, fetched: true, fetching: false, error: false }
    case 'RECIPES_FETCHING_REJECTED':
      return { ...state, error: true }
    case 'SELECT_RECIPE':
      return { ...state, selectedRecipe: action.recipe }
    case ADD_RECIPES:
      let items = state.items.concat(action.recipes)
      return { ...state, items: items }
    case RESET_AND_ADD_RECIPES:
      return { ...state, items: action.recipes }
    case INCREMENT_LOVE:
    case DECREMENT_LOVE:
      let recipe = {...state.items[action.index]}

      recipe.love = action.type === INCREMENT_LOVE ? recipe.love + 1 : recipe.love - 1
      recipe.loved = action.type === INCREMENT_LOVE ? true : false

      var items = [
        ...state.items.slice(0, action.index),
        recipe,
        ...state.items.slice(action.index + 1)
      ]

      return {...state, items}
    case UPDATE_RECIPES_PAGE:
      return  {...state, currentPage: action.currentPage, lastPage: action.lastPage}
    default:
      return state
  }
}

export default recipes

/* selector */

export const getRecipes = state => state.recipes.items

export const getRecipe = (state, index) => state.recipes.items.filter(recipe, i => i == index)[0]

export const getPage = state => state.recipes.page
