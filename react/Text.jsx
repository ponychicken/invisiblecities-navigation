import React from 'react'
import projects from '../utils/projects'
import {ProjectLink} from './ProjectLink'
import {Link} from 'react-router'

let chloe = require(`../markdown/chloe`)
let irene = require(`../markdown/irene`)
let procopia = require(`../markdown/procopia`)
let sophronia = require(`../markdown/sophronia`)
let valdrada = require(`../markdown/valdrada`)
let perinthia = require(`../markdown/perinthia`)
let zirma = require(`../markdown/zirma`)
let theodora = require(`../markdown/theodora`)
let fedora = require(`../markdown/fedora`)
let zaira = require(`../markdown/zaira`)
let preface = require(`../markdown/preface`)
let credits = require(`../markdown/credits`)




export default class Text extends React.Component {
  
  render() {
    let routes = this.context.router.getCurrentRoutes()
    let textid = routes[routes.length - 1].name
    let text = require(`../markdown/${textid}`)
    let props = projects.filter(function (item) {
      return (item.city.toLowerCase() === textid)
    })
    
    // Filter returns an array
    
    props = props.length ? props[0] : false
    
    let links = props ? (<div className='links'>
            <ProjectLink className='button' path={props.path} landscape={props.landscape} specialRotate={props.specialRotate}>→ Projekt öffnen</ProjectLink>
            <Link to='projects' className='button'>← Zurück zur Übersicht</Link>
          </div>) : ''
    
    return (<div className='chapterView'>
      <div dangerouslySetInnerHTML={{__html: text}} className="text"/>
      {links}
    </div>)
  }
}

Text.contextTypes = {
  router: React.PropTypes.func.isRequired
}
