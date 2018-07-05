import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userAction from  '../actions/actions'
require('./Navbar.css')

console.log(userAction)

class Navbar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      'color': '#ffffff',
      'listArr': []
    }
  }

  componentDidMount() {
    this.props.initLoad()
  }

  componentWillReceiveProps(nextProps) {

  }

  _clickAction() {
    this.props.clickAction()
  }

  render() {
    let ctr = 0;

    return (
      <div>
        <ul>
          {this.props.list.map((e) => {
              return <li key={ctr++} onClick={() => this._clickAction()} style={{'color': this.props.color}}>{e}</li>
            }
          )}
        </ul>
      </div>
    )
  }
}

Navbar.propTypes = {
  list: PropTypes.array,
  initLoad: PropTypes.func
}

function mapStateToProps(state) {
  return {
    list: state.list
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(userAction, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)