import React from 'react'
import iconBag from '../../images/icon-bag.png' 
import iconChart from '../../images/icon-chart.png'
import iconHeart from '../../images/icon-heart.png' 
import iconUser from '../../images/icon-user.png'

let Service = React.createClass({
  iconRender: function (icon){
    let renderIcon = null;
    switch(icon){
      case 'iconBag':
        return renderIcon = iconBag
      case 'iconChart':
        return renderIcon = iconChart
      case 'iconHeart':
        return renderIcon = iconHeart;
      case 'iconUser':
        return renderIcon = iconUser
      default:
        return renderIcon = iconBag
    }
  },
  render() {
    let icon = this.props.icon
    return (
      <div className='service col-1-4' style={{background: this.props.bg}}>
        <div className='service__avatar' style={{background: this.props.avatarBg}}>
          <div className='avatar__icon'>
              <img src={this.iconRender(icon)} />
          </div>
        </div>
        <div className='service__stats'>
          <h1 className={`stats__info stats__info--${this.props.colorClass}`}>{this.props.stat}</h1>
          <small className={`stats__title stats__title--${this.props.colorClass}`}>{this.props.title}</small>
        </div>
      </div>
    );
  }
})

export default Service
