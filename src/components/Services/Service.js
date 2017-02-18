import React from 'react'

let Service = React.createClass({
  render() {
    return (
      <div className='service col-1-4' style={{background: this.props.bg}}>
        <div className='service__avatar'>
          <div className='avatar__icon'></div>
        </div>
        <div className='service__stats'>
          <h1 className='stats__info'>{this.props.stat}</h1>
          <small className='stats__title'>{this.props.title}</small>
        </div>
      </div>
    );
  }
})

export default Service
