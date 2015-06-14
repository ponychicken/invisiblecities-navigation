import React from 'react'
import Menu from './Menu'
import {RouteHandler} from 'react-router'
import strings from '../data/strings'

export default class Content extends React.Component {  
  render() {
    return (
      <div>
        <Menu title={strings.App.title} />
        <RouteHandler/>
      </div>
    )
  }
}
