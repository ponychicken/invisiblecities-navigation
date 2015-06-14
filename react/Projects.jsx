import React from 'react'
import Text from './Text'
import CardView from './CardView'
import projects from '../utils/projects'

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: this.props.page
    };
  }

  render() {
    return <CardView projects={projects} ref='cardView'/>
  }
  
  changeTo(i) {
    this.setState({
      page: i
    })
  }
}
