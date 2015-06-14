var React = require('react');
var Menu = require('./Menu.jsx');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var strings = require('../strings/strings')

// TODO put in json, use in MENU
var menuItems = [
  'Vorwort',
  'Interaktive Projekte',
  'Animation',
  'Nachwort'
];

export default class Content extends React.Component {  
  render() {
    return (
      <div>
        <Menu list={menuItems} title={strings.App.title} />
        <RouteHandler/>
      </div>
    );
  }
}
