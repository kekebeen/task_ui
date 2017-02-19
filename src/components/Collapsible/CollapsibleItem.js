import React from 'react'
import iconDown from '../../images/icon-down.png'

let CollapsibleItem = React.createClass({
  getInitialState: function () {
    return {
      isOpened: this.props.category.isOpened
    }
  },
  renderSubItems: function () {
    let category = this.props.category
    console.log(category.items)
    if (category.items.length <= 0){
      return <p>No subitems currently</p>
    } else {
      return (
        <ul className='list'>
        {category.items.map((item) => {
          return (
            <li className='list__item'>{item}</li>
          )
        })}
        </ul>
      )
    }
  },
  render() {
    const category = this.props.category
    return (
      <div className={`body__item body__item--${this.state.isOpened? 'opened' : 'hidden'}`}>
        <h2 className='item__header' onClick={this.toggleOpen}>
        <span className='header__text'>{category.name}</span> 
        <span className='header__icon'>
          <img src={iconDown} alt="icon-down" />
        </span>
        </h2>
        <div className={`item__body item__body--${this.state.isOpened? 'opened' : 'hidden'}`}>
          {this.renderSubItems()}
        </div>
      </div>
    );
  },

  toggleOpen: function (e) {
    e.stopPropagation()
    let isOpened = this.state.isOpened
    this.setState({
      isOpened: !isOpened
    })
  }
})

export default CollapsibleItem
