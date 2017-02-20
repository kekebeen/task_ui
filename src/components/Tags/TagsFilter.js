import React from 'react'
import iconDelete from '../../images/icon-delete.png'

let TagsFilter = React.createClass({
  getInitialState: function() {
    return {
      tags: [
        {title: 'Sony', active: true},
        {title: 'Apple', active: false},
        {title: 'Bose', active: true},
        {title: 'Dell', active: true},
        {title: 'LG', active:true},
        {title: 'Samsung', active: false},
        {title: 'Huawei', active: false},
        {title: 'HP', active: false}
      ]
    }
  },

  getDefaultProps: function() {
  return {
    title: 'Brand',
    tags: [
    {title: 'Sony', active: true},
    {title: 'Apple', active: false},
    {title: 'Bose', active: true},
    {title: 'Dell', active: true},
    {title: 'LG', active:true},
    {title: 'Samsung', active: false},
    {title: 'Huawei', active: false},
    {title: 'HP', active: false}
    ]
  }
  },

  render() {
    return (
      <div className='collapsible__item collapsible__item--tags'>
        <h1 className='tags__title'>{this.props.title}:</h1>
        <ul className='tags__list'>
          {
            this.state.tags.map((item, i) => {
              console.log("Item, active", i, item.active)
              return (
                <li key={i} className={`tag tag--${item.active === true ? 'active': 'inactive'}`}>
                  <span className='tag__title'>{item.title}</span>
                  <span className='tag__icon'><img src={iconDelete} alt="icon-delete" /></span>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
})

export default TagsFilter
