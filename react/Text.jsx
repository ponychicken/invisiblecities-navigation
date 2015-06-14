import React from 'react'
import projects from '../strings/projects'
import {ProjectLink} from './ProjectLink'
import {Link} from 'react-router'

let chloe = require(`../markdown/chloe`)
let irene = require(`../markdown/irene`)
let procopia = require(`../markdown/procopia`)
let sophronia = require(`../markdown/sophronia`)
let valdrada = require(`../markdown/valdrada`)
let perinthia = require(`../markdown/perinthia`)

export default class Text extends React.Component {
  
  render() {
    let routes = this.context.router.getCurrentRoutes()
    let cityid = routes[routes.length - 1].name
    let text = require(`../markdown/${cityid}`)
    let props = projects.filter(function (item) {
      return (item.city.toLowerCase() === cityid)
    })
    
    // Filter returns an array
    props = props[0]

    return (<div>
      <ProjectLink className='button' path={props.path} landscape={props.landscape} specialRotate={specialRotate}>Projekt öffnen</ProjectLink>
      <Link to={cityid} className='button'>Kapitel lesen</Link>
      <div dangerouslySetInnerHTML={{__html: text}} className="text"/>
    </div>)
  }
}

Text.contextTypes = {
  router: React.PropTypes.func.isRequired
};
