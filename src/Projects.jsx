var React = require('react');
var Text = require('./Text.jsx');
var CardView = require('./CardView.jsx');
var projects = require('../strings/projects');

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: this.props.page
    };
  }

  render() {
    return <CardView projects={projects} ref="cardView"/>
  }
  
  changeTo(i) {
    this.setState({
      page: i
    })
  }
}
