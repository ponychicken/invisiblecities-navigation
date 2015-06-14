var React = require('react');
var strings = require('../strings/strings')
var Swipeable = require('react-swipeable');
var Router = require('react-router');
var Link = Router.Link;
var Navigation = Router.Navigation;
var ImageLoader = require('react-imageloader');

var projects = require('../strings/projects');


class ImagePreloader extends React.Component {
  render() {
    var images = projects.map(function(item, i) {
      return (
        <ImageLoader key={i} src={item.image}  />
      );
    });
    
    return (
      <div hidden>
        {images}
      </div>
    );
  }
}


class Cover extends React.Component {

  render() {
    return (
       <Swipeable className="fullscreenPage" onSwiped={this.go} ref="cover">
          <div className='cover' onClick={this.go}>
            <Link to='projects'><h1>{strings.App.title}</h1></Link>
            <h4>{strings.App.subtitle}</h4>
            <ImagePreloader/>
          </div>
      </Swipeable>
    );
  }
  
  go(e, x, y, flick) {
    if (e.type == 'click' || (flick && y > 0 && Math.abs(y) > Math.abs(x))) {
      this.context.router.transitionTo('projects');
    }
  }
}


Cover.contextTypes = {
  router: React.PropTypes.func.isRequired,
};

module.exports = Cover;
