import React from 'react'
import ReactSlider from 'react-slider'

let PriceRange = React.createClass({
  getInitialState: function () {
    return {
      value: { min: 2, max: 10}
    }
  },
  change: function (e) {
    console.log("change",e)
  },
  render() {
    return (
      <div className='collapsible__item collapsible__item--range'>
        <h1 className='price__title'>{this.props.title}:</h1>
        <em>Min</em>
        <input type="number" />
        <em>Max</em>
        <input type="number" />

        <div className='range__slider'>
        <ReactSlider defaultValue={[20, 80]} withBars onChange={this.change} disabled>
          <div className="my-handle">1</div>
          <div className="my-handle">2</div>
        </ReactSlider>,
        </div>
      </div>
    );
  }
})

export default PriceRange
