import React from 'react'

export class WidgetThis extends React.PureComponent {
    render () {
      const { person, view } = this.props
      return (
        <div>
          <p>This is child {person.name}, {person.age} display is {view} </p>
        </div>
      )
    }
}

export class IFA extends React.PureComponent {
  render () {
    const { ifa } = this.props
    const listDom = ifa.data.map(item => <li>{item.name}</li>)
    return (
      <div>
        <h1>Items for attention</h1>
        <ul>
          {listDom}
        </ul>
      </div>
    )
  }
}
