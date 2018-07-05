var React = require('react')
var ReactDOM = require('react-dom')

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import userReducer from './store/reducers'
import Navbar from './components/Navbar'
require('./index.css')

console.log(userReducer)
const store = createStore(userReducer)

class App extends React.Component {
  render() {
    console.log(store.getState())

    return (
      <Provider store={store}>
        <div>
          <Navbar list={store.getState().list} color="#ff0" />
        </div>
      </Provider>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)