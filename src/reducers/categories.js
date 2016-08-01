import _ from 'lodash'

export const categoriesInitialState = {
  items: [
    { id: 6, name: 'Cake', icon: 'nav-icon-cake', selected: false },
    { id: 7, name: 'Burger', icon: 'nav-icon-burger', selected: false },
    { id: 8, name: 'Fish', icon: 'nav-icon-fish', selected: false },
    { id: 9, name: 'Hot Drink', icon: 'nav-icon-hot-drink', selected: false },
    { id: 10, name: 'Cold Drink', icon: 'nav-icon-cold-drink', selected: false},
    { id: 11, name: 'Steak', icon: 'nav-icon-meat', selected: false },
    { id: 12, name: 'Coffee', icon: 'nav-icon-cofee', selected: false },
  ],
  filters: []
}

function categories(state = categoriesInitialState, action) {
  switch(action.type) {
    case 'TOGGLE_CATEGORY_FILTER':
      let categoryIndex = _.findIndex(state.items, { id: action.id })
      let toggledCategory = { ...state.items[categoryIndex], selected: !state.items[categoryIndex].selected }

      let items = [
        ...state.items.slice(0, categoryIndex),
        toggledCategory,
        ...state.items.slice(categoryIndex + 1)
      ]

      let filters = _.reject(items, { selected: false })

      return {...state, items, filters}
    default:
      return state
  }
}

export default categories
