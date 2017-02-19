import React from 'react'

let RoundButton = React.createClass({
  render() {
    const strokeColor = this.props.strokeColor === 'dark' ? '#bec0c3' : '#FFFFFF'
    return (
      <div className={`btn btn--round btn--${this.props.type}`}>
        <a href="javascript:void(0)" className='btn__link'>
          {this.props.text}
          <span>
            <svg width="6px" height="12px" viewBox="0 0 50 80">
              <polyline fill="none" stroke={strokeColor} strokeWidth="12px" strokeLinecap="round" strokeLinejoin="round" points="
            0.375,0.375 45.63,38.087 0.375,75.8 "/>
            </svg>
          </span>
        </a>
      </div>
    );
  }
})

export default RoundButton
