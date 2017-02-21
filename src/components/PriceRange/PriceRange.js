import React from 'react'
import ReactSlider from 'react-slider'

let PriceRange = React.createClass({
  getInitialState: function () {
    return {
      value: { min: 2, max: 10}
    }
  },
  change: function (e) {
    this.setState({
      value: {
        min: e[0],
        max: e[1]
      }
    })
  },
  render() {
    return (
      <div className='collapsible__item collapsible__item--range'>
        <h1 className='price__title'>{this.props.title}:</h1>
        <div className="input__group">
          <div className="input__control">
            <div className="label">From</div>
            <input type="text" ref="numberMin" name="numberMin" id="numberMin" value={this.state.value.min}/>
          </div>
          <div className="input__control">
            <div className="label">To</div>
            <input type="text" ref="numberMax" name="numberMax" id="numberMax" value={this.state.value.max}/>
          </div>
        </div>

        <div className='range__slider'>
        <ReactSlider defaultValue={[20, 80]} withBars onChange={this.change} pearling={true} snapDragDisabled={true}>
          <div className="my-handle">1</div>
          <div className="my-handle">2</div>
        </ReactSlider>,
        </div>
      </div>
    );
  }
})

export default PriceRange
