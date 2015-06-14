var React = require('react')
var Swipeable = require('react-swipeable')
var Router = require('react-router')
var Cover = require('./Cover.jsx')
var Menu = require('./Menu.jsx')
var Content = require('./Content.jsx')
var Projects = require('./Projects.jsx')
var Preface = require('./Preface.jsx')
var TransitionGroup = require('react/lib/ReactCSSTransitionGroup')
var Text = require('./Text.jsx')

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;


var App = React.createClass({
    mixins: [ Router.State ],

  render: function () {
    return (
      <TransitionGroup component="div" transitionName="horizontal">
          <RouteHandler key={this.getTopHandlerKey()} />
      </TransitionGroup>
    );
  },
  getTopHandlerKey: function () {
    var childDepth = 1;
    var childName = this.context.router.getCurrentRoutes()[childDepth].name;
    return childName;
  },
});


var routes = (
  <Route handler={App} path="/">
    <DefaultRoute name="cover" handler={Cover}/>
    <Route name="content" handler={Content}>
      <Route name="projects" handler={Projects}/>
      <Route name="preface" handler={Preface}/>
      <Route name="irene" handler={Text}/>
      <Route name="chloe" handler={Text}/>
      <Route name="procopia" handler={Text}/>
      <Route name="sophronia" handler={Text}/>
      <Route name="perinthia" handler={Text}/>
      <Route name="valdrada" handler={Text}/>
    </Route>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body)
});
