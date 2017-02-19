import React from 'react'
import Collapsible from './Collapsible'

var CollapsibleWidgetList = React.createClass({
  getInitialState: function (){
    return {
      categories: [
        {
          title: 'Computers',
          items: ['No items currently'],
          open: false
        },
        {
          title: 'Monitors',
          items: ['No items currently'],
          open: false
        },
        {
          title: 'Projectors',
          items: ['Internal','External','Led','Small'],
          open: true
        },
        {
          title: 'Lights',
          items: ['No items currently'],
          open: false
        },
        {
          title: 'Controllers',
          items: ['No items currently'],
          open: false
        },
        {
          title: 'Consols',
          items: ['No items currently'],
          open: false
        },
        {
          title: 'Extras',
          items: ['No items currently'],
          open: false
        }
      ],
      title: 'Categories'
    }
  },

  render() {

    return (
     <div className='col-1-4 collapsible'>
     <div className='collapsible__header'>
      <h1 className='header__title'>{this.state.title}</h1>
     </div>
      {
        this.state.categories.map((category,i) => {
          return(
            <Collapsible trigger={category.title} key={i} open={category.open}>
              <ul>
                {
                  category.items.map((item, i) => {
                    return(
                      <li key={i} className='list__item'>
                        {item}
                      </li>
                    )
                  })
                } 
              </ul>
            </Collapsible>
          )
        })
      }
     </div>
    )
  }

})

export default CollapsibleWidgetList
