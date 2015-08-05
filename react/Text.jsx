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
let impressum = require(`../markdown/impressum`)



export default class Text extends React.Component {

  render() {
    let routes = this.context.router.getCurrentRoutes()
    let textid = routes[routes.length - 1].name
    let text = require(`../markdown/${textid}`)
    
    // Strip out headlines
    let headlines = text.match(/^<h1.*?\/h1>\s*(<h2.*?\/h2>)*/g)
    console.log(headlines);
    text = text.replace(/^<h1.*?\/h1>\s*(<h2.*?\/h2>)*/g, "")
    
    let props = projects.filter(function (item) {
      return (item.city.toLowerCase() === textid)
    })
    
    // Filter returns an array
    
    props = props.length ? props[0] : false
    
    let links = props ? (<div className='links'>
          <Link to='projects' className='button'>Alle Projekte</Link>
          <ProjectLink className='button' path={props.path} landscape={props.landscape} specialRotate={props.specialRotate}>Projekt öffnen</ProjectLink>

          </div>) : ''
    
    let className = 'chapterView'
    className += (props) ? '' : ' noButtons'
    
    return (<div className={className}>
      <div className="text">
        <div dangerouslySetInnerHTML={{__html: headlines}} className="headlines"/>
        <div dangerouslySetInnerHTML={{__html: text}} className="paragraphs"/>
      </div>
      {links}
    </div>)
  }
}

Text.contextTypes = {
  router: React.PropTypes.func.isRequired
}
