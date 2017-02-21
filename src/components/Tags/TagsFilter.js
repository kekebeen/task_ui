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

  componentDidMount: function () {

  },

  toggleActiveTag: function (i) {
    let targetElement = document.getElementById('tag-'+i)
    targetElement.classList.toggle('tag--active')
  },

  render() {
    return (
      <div className='collapsible__item collapsible__item--tags'>
        <h1 className='tags__title'>{this.props.title}:</h1>
        <ul className='tags__list'>
          {
            this.state.tags.map((item, i) => {
              return (
                <li key={i} className={`tag tag--${item.active === true ? 'active': ''}`} id={`tag-${i}`} >
                  <span className='tag__title' onClick={this.toggleActiveTag.bind(this,i)}>{item.title}</span>
                  <span className='tag__icon' onClick={this.toggleActiveTag.bind(this,i)}><img src={iconDelete} alt="icon-delete" /></span>
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
