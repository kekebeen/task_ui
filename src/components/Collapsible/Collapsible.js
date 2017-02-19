import React from 'react'
import CollapsibleHeader from './CollapsibleHeader'
import CollapsibleBody from './CollapsibleBody'

let Collapsible = React.createClass({
  getInitialState: function () {
    return {
      categories: [
        {
          name: 'Computers',
          items: [],
          isOpened: false
        },
        {
          name: 'Monitors',
          items: [],
          isOpened: false
        },
        {
          name: 'Projectors',
          items: ['Internal', 'External', 'Led', 'Small'],
          isOpened: true
        },
        {
          name: 'Lights',
          items: [],
          isOpened: false
        },
        {
          name: 'Controllers',
          items: [],
          isOpened: false
        },
        {
          name: 'Consols',
          items: [],
          isOpened: false
        },
        {
          name: 'Extrass',
          items: [],
          isOpened: false
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
