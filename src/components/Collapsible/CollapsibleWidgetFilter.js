import React from 'react'
import Collapsible from './Collapsible'
import iconBin from '../../images/icon-bin.png'

var CollapsibleWidgetFilter = React.createClass({
  getInitialState: function (){
    return {
      title: 'Filters',
      actionText: 'Clear all',
      section1: {
        title: 'Brand',
        brands: ['Sony', 'Apple', 'Bose', 'Dell', 'LG', 'Samsung', 'Huawei', 'HP']
      },
      section2: {
        title: 'Price range'
      },
      section3: {
        title: 'Another option',
        content: 'Nothing here currently'
      },
      section4: {
        title: 'Pricing option',
        content: 'Nothing here currently'
      }
    }
  },

  render() {

    return (
     <div className='col-1-4 filters'>
        <div className='collapsible__header'>
        <h1 className='header__title'>{this.state.title}</h1>
        <span className='header__action'>
          <span className='action__text'>{this.state.actionText}</span>
          <span className='action__icon'>
            <img src={iconBin} alt="icon-bin" />
          </span>
        </span>
      </div>
      
      <Collapsible trigger={this.state.section3.title}>
        heees
      </Collapsible>
      <Collapsible trigger={this.state.section4.title}>
        heeedas
      </Collapsible>
     </div>
    )
  }

})

export default CollapsibleWidgetFilter
