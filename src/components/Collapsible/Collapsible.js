import React from 'react'
import CollapsibleHeader from './CollapsibleHeader'
import CollapsibleBody from './CollapsibleBody'

let Collapsible = React.createClass({
  getInitialState: function () {
    return {
      categories: [
        {
          name: 'Computers',
          items: []
        },
        {
          name: 'Monitors',
          items: []
        },
        {
          name: 'Projectors',
          items: ['Internal', 'External', 'Led', 'Small']
        },
        {
          name: 'Lights',
          items: []
        },
        {
          name: 'Controllers',
          items: []
        },
        {
          name: 'Consols',
          items: []
        },
        {
          name: 'Extrass',
          items: []
        }
      ],
      headerTitle: 'Categories'
    }
  },
  render() {
    return (
      <div className='col-1-4 collapsible'>
        <CollapsibleHeader title={this.state.headerTitle} />
        <CollapsibleBody categories={this.state.categories} />
      </div>
    );
  }
})

export default Collapsible
