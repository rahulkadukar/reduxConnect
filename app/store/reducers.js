const initState = {
  list: ['Page 1', 'Page 2', 'Page 3', 'Page 4']
}

export default function userReducer (state = initState, action) {
  switch (action.type) {
    case 'SOME_ADD':
      return state;
      break;
    case 'INIT_LOAD':
      return Object.assign({}, state, {
        list: state.list.concat('Page 5')
      })
      break;
    case 'CLICK_ACT':
      return Object.assign({}, state, {
        list: state.list.concat(`Page ${Math.ceil(Math.random() * 100)}`)
      })
      break;
    default:
      break;
  }

  return state;
}