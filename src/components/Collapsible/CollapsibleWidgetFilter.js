import React from 'react'
import Collapsible from './Collapsible'
import iconBin from '../../images/icon-bin.png'
import IndicatorButton from '../Button/IndicatorButton'
import PriceRange from '../PriceRange/PriceRange'
import TagsFilter from '../Tags/TagsFilter'

var CollapsibleWidgetFilter = React.createClass({
  getInitialState: function (){
    return {
      title: 'Filters',
      actionText: 'Clear all',
      section1: {
        title: 'Brand'
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
      <TagsFilter title={this.state.section1.title} />
      <PriceRange />
      <Collapsible trigger={this.state.section3.title}>
        heees
      </Collapsible>
      <Collapsible trigger={this.state.section4.title}>
        heeedas
      </Collapsible>
      <div className='collapsible__item--button'>
        <IndicatorButton type="success" strokeColor="white" text="Apply filters" message="Done" />
      </div>
     </div>
    )
  }

})

export default CollapsibleWidgetFilter
