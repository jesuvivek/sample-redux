import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getName, getContexts, getItems } from './actions/name'
import { WidgetThis, IFA } from './components/WidgetThis'

class App extends Component {
  constructor (props) {
    super (props)
    this.state = {
      display: 'Alerts'
    }
  }
  componentDidMount () {
    const { getName, getContexts, getItems, context } = this.props
    getName()
    getContexts()
    getItems(context)
  }

  render() {
    const { name, ifa, context } = this.props
    const myObj = { name: 'Jesu', age: 30 }
    return (
      <div className="App">
        <header className="App-header">
          <p>
            {name.data} learns React
          </p>
          <WidgetThis
            person={myObj}
            view={this.state.display}
          />
          <IFA
            ifa={ifa}
          />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
function mapDispatchToProps (dispatch) {
  return bindActionCreators(
    { getName, getContexts, getItems },
    dispatch)
}
function mapStateToProps (state) {
  return {
    name: state.name,
    ifa: state.itemsForAttention,
    context: state.context
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
