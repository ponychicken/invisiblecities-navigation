var React = require('react')
var Swipeable = require('react-swipeable')
var Router = require('react-router')
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

var routes = (
    <Route name="content" handler={Content}>
      <Route name="projects" path="/" handler={Projects}/>
      <Route name="preface" handler={Text}/>
      <Route name="credits" handler={Text}/>
      <Route name="impressum" handler={Text}/>
      <Route name="irene" handler={Text}/>
      <Route name="chloe" handler={Text}/>
      <Route name="procopia" handler={Text}/>
      <Route name="sophronia" handler={Text}/>
      <Route name="perinthia" handler={Text}/>
      <Route name="valdrada" handler={Text}/>
      <Route name="zirma" handler={Text}/>
      <Route name="theodora" handler={Text}/>
      <Route name="zaira" handler={Text}/>
      <Route name="fedora" handler={Text}/>
    </Route>
)

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body)
})
