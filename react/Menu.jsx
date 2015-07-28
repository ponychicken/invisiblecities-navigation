import React from 'react'
import Swipeable from 'react-swipeable'
import {Link} from 'react-router'
import strings from '../data/strings'
import classnames from 'classnames'
import TransitionGroup from 'react/lib/ReactCSSTransitionGroup'

class MenuIcon extends React.Component {
  render() {
    return (
      <div className='menuIcon'>
        <div className='icon'></div>
      </div>
    );
  }
}

class CloseIcon extends React.Component {
  render() {
    return (
      <div className='closeIcon'>
      </div>
    );
  }
}

class MenuList extends React.Component {
  render() {
    var listNodes = strings.Menu.map(function(item, i) {
      return (
        <li key={i}><Link to={item.destination}>{item.name}</Link></li>
      )
    })
    
    return (
      <ul>
        {listNodes}
      </ul>
    )
  }
}

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  render() {
    var classes = classnames({
      'menu': true,
      'expanded': this.state.expanded,
      'collapsed': !this.state.expanded
    });
    
    return (
      <Swipeable onSwiped={this.handleSwipe.bind(this)}>
        <div className={classes} onClick={this.toggle.bind(this)} >
          <MenuIcon />
          <CloseIcon />
          <MenuList/>
        </div>
      </Swipeable>
    );
  }
  
  handleSwipe (e, x, y, flick) {
    if (flick && Math.abs(y) < Math.abs(x)) {
      this.setState({
        expanded: (x < 0)
      })
      e.stopPropagation()
    }
  }
  
  toggle() {
    this.setState({
      expanded: !this.state.expanded
    })
  }
}
