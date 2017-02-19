import React from 'react'

let CollapsibleItem = React.createClass({
  render() {
    const category = this.props.category
    return (
      <div className='collapsible__item'>
        {category.name}
      </div>
    );
  }
})

export default CollapsibleItem
