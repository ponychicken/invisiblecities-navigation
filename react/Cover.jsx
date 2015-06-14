import React from 'react'
import strings from '../data/strings'
import Swipeable from 'react-swipeable'
import {Link} from 'react-router'
import ImageLoader from 'react-imageloader'
import projects from '../utils/projects'


class ImagePreloader extends React.Component {
  render() {
    var images = projects.map(function(item, i) {
      return (
        <ImageLoader key={i} src={item.image}  />
      )
    })
    
    return (
      <div hidden>
        {images}
      </div>
    )
  }
}


export default class Cover extends React.Component {
  render() {
    return (
       <Swipeable className="fullscreenPage" onSwiped={this.go} ref="cover">
          <div className='cover' onClick={this.go.bind(this)}>
            <Link to='projects'><h1>{strings.App.title}</h1></Link>
            <h4>{strings.App.subtitle}</h4>
            <ImagePreloader/>
          </div>
      </Swipeable>
    )
  }
  
  go(e, x, y, flick) {
    if (e.type == 'click' || (flick && y > 0 && Math.abs(y) > Math.abs(x))) {
      this.context.router.transitionTo('projects');
    }
  }
}


Cover.contextTypes = {
  router: React.PropTypes.func.isRequired
}
