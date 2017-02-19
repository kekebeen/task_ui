import React from 'react'

let CollapsibleHeader = React.createClass({
  render() {
    return (
      <div className='collapsible__header'>
        <h1 className='header__main'>{this.props.title}</h1>
      </div>
    );
  }
})

export default CollapsibleHeader
