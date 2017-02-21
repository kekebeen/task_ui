import React from 'react'

let Filters = React.createClass({
  getInitialState: function (){
    return {
      active: 0
    }
  },

  render () {
    return (
      <div className='subheader__filters'>
        <div className={`filter__btn ${this.state.active === 0?'filter__btn filter__btn--active':'filter__btn'}`}
              onClick={this.handleClick.bind(this, 0)}>Yearly</div>
        <div className={`filter__btn ${this.state.active === 1?'filter__btn filter__btn--active':'filter__btn'}`} 
              onClick={this.handleClick.bind(this, 1)}>Monthly</div>
        <div className={`filter__btn ${this.state.active === 2?'filter__btn filter__btn--active':'filter__btn'}`} 
              onClick={this.handleClick.bind(this, 2)}>Daily</div>
      </div>
    )
  },

  handleClick: function (id, e) {
    this.setState({
      active: id
    })

    this.props.onHandleFilter(id)
  }

    
})

export default Filters
