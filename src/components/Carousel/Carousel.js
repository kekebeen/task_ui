import React, {Component, Children} from 'react';
import iconPrev from '../../images/icon-prev.png'
import iconNext from '../../images/icon-next.png'

export default class Carousel extends Component {
  // using es6 becaouse of event binding syntax
  constructor(props) {
    super(props);
    this.state = {slide: 1, dragging: null, sliding: false, offset: 0}; // slide index start from 1
    this.setTimer = this.setTimer.bind(this);
    this.events = {
      onTouchStart: this.onDraggingStart.bind(this),
      onTouchMove: this.onDraggingMove.bind(this),
      onTouchEnd: this.onDraggingEnd.bind(this),
      onTouchCancel: this.onDraggingEnd.bind(this),
      onClick: this.onClick.bind(this),
      onTransitionEnd: this.onTransitionEnd.bind(this)
    };
  }
  // set timer on initial component load
  componentDidMount() {
    this.setTimer();
  }
  // clear interval before destroying component
  componentWillUnmount() {
    window.clearInterval(this.timer);
  }
  onTransitionEnd() { // this will not be triggered when document.hidden
    let {slide} = this.state;
    const count = Children.count(this.props.children);
    if (slide == count + 1) slide = 1;
    if (slide == 0) slide = count;
    this.setState({slide, sliding: false}, this.setTimer);
  }
  setTimer() {
    const interval = this.props.autoplayInteval;
    if (Children.count(this.props.children) > 1 && interval && interval > 0) {
      window.clearInterval(this.timer);
      this.timer = window.setInterval(this.changeSlide.bind(this, this.state.slide + 1), interval);
    }
  }
  // move slides
  changeSlide(slide) {
    if (document.hidden) return; // run only when page is visible
    if (slide && slide >= 0 && slide <= React.Children.count(this.props.children) + 1)
      this.setState({slide, sliding: true, dragging: null}, this.setTimer);
  }
  // dragg events ( I dont event know :/ )
  onDraggingStart(event) {
    if (event.touches)
      this.setState({dragging: {
        x: event.touches[0].pageX,
        y: event.touches[0].pageY
      }, offset: 0});
  }
  onDraggingMove(event) {
    const {sliding, dragging} = this.state;
    if (sliding || !dragging || !event.touches) return;
    const x = event.touches[0].pageX;
    const y = event.touches[0].pageY;
    const offset = x - dragging.x;
    if (Math.abs(y - dragging.y) < Math.abs(offset)) event.preventDefault();
    this.setState({offset});
  }
  onDraggingEnd(event) {
    const {slide, offset, dragging} = this.state;
    if (!dragging) return;
    const target = Math.abs(offset) > this.refs.slider.clientWidth / 5 ? (offset > 0 ? slide - 1 : slide + 1) : slide;
    this.setState({dragging: null}, this.changeSlide.bind(this, target));
  }
  onClick(event) {
    if (Math.abs(this.state.offset) < 25) return; // trigger click in a small distance
    event.preventDefault();
    event.stopPropagation();
    event.nativeEvent.stopPropagation();
  }
  render() {
    const {children, className, switcher, indicator} = this.props;
    const {slide, sliding, dragging, offset} = this.state;
    const slides = Children.map(children, (child) => React.cloneElement(child, {key: child.key + '_clone'}));
    const enabled = Children.count(children) > 1;
    const prevSlide = this.changeSlide.bind(this, slide - 1);
    const nextSlide = this.changeSlide.bind(this, slide + 1);
    return (
      <div className={['slider', className || ''].join(' ')} style={{
        position: 'relative',
        overflowX: 'hidden',
        willChange: 'transform'
      }}>
        <ul ref="slider" style={{
          display: 'flex',
          transform: enabled ? (dragging && offset !== 0 ? 'translateX(calc(' + (offset * 1) + 'px - ' + slide * 100 + '%))' : 'translateX(-' + slide * 100 + '%)') : null,
          transition: sliding ? 'transform .8s ease-in-out' : 'none'
        }} {...this.events}>
          {enabled && Children.map(slides.slice(-1).concat(children, slides.slice(0, 1)),
            (item, index) => <li className={slide == index ? 'active' : null} style={{
              flexBasis: '100%',
              flexShrink: 0
            }}>{item}</li>) || <li>{children}</li>
          }
        </ul>
        <footer className='carousel__footer'>
          {enabled && switcher && <div className='footer__block footer__block__prev' onClick={prevSlide}>
            <div className="dot dot__prev">
              <img src={iconPrev} alt="icon-prev" />
            </div>
            </div>
          }
          {enabled && indicator && <ol className='footer__block footer__block__indicators'>
            {Children.map(children, (item, index) => <li className={slide == index + 1 ? 'dot active' : 'dot'}>
              <div onClick={this.changeSlide.bind(this, index + 1)}>{index+1}</div>
            </li>)}
          </ol>}
          {enabled && switcher && <div className='footer__block footer__block__next' onClick={nextSlide}>
            <div className="dot dot__next">
              <img src={iconNext} alt="icon-next" />
            </div>
            </div>
          }
        </footer>
      </div>
    );
  }
}
