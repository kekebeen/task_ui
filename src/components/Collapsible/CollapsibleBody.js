import React from 'react'
import CollapsibleItem from './CollapsibleItem'

let CollapsibleBody = React.createClass({
  render() {
    const categories = this.props.categories
    return (
      <div className='collapsible__body'>
        {
          categories.map((category, index) => {
            return <CollapsibleItem key={index} category={category} />
          })
        }
      </div>
    );
  }
})

export default CollapsibleBody
