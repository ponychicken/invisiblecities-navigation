var React = require('react/addons');
var Swipeable = require('react-swipeable');
var Link = require('react-router').Link;
var strings = require('./strings')

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

class MenuIcon extends React.Component {
  render() {
    return (
      <div className='menuIcon'>
        <div className='icon'></div>
        <span className='text'>Menu</span>
      </div>
    );
  }
}

class MenuList extends React.Component {
  render() {
    var listNodes = strings.Menu.map(function(item) {
      return (
        <li><Link to={item.destination}>{item.name}</Link></li>
      );
    });
    
    return (
      <ul>
        {listNodes}
      </ul>
    );
  }
};

export default class Menu extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  render() {
    var cx = React.addons.classSet;
    var classes = cx({
      'menu': true,
      'expanded': this.state.expanded,
      'collapsed': !this.state.expanded
    });
    
    return (
      <Swipeable onSwiped={this.handleSwipe}>
        <div className={classes} onClick={this.toggle} >
          <MenuIcon />
          <h1 className='appTitle'>{this.props.title}</h1>
          <MenuList list={this.props.list}/>
        </div>
      </Swipeable>
    );
  }
  
  handleSwipe (e, x, y, flick) {
    if (flick && Math.abs(y) < Math.abs(x)) {
      this.setState({
        expanded: (x < 0)
      });
      e.stopPropagation();
    }
  }
  
  toggle() {
    this.setState({
      expanded: !this.state.expanded
    });
  }
};
