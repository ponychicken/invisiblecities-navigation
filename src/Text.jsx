import React from 'react'

let chloe = require(`../markdown/chloe`)
let irene = require(`../markdown/irene`)
let procopia = require(`../markdown/procopia`)
let sophronia = require(`../markdown/sophronia`)
let valdrada = require(`../markdown/valdrada`)

export default class Text extends React.Component {
  
  render() {
    let routes = this.context.router.getCurrentRoutes();
    let name = routes[routes.length - 1].name;
    let text = require(`../markdown/${name}`)
    return (<div dangerouslySetInnerHTML={{__html: text}} className="text"/>)
  }
}

Text.contextTypes = {
  router: React.PropTypes.func.isRequired
};
