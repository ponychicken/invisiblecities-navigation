var React = require('react');

export function getProjectHref(props) {
  return `thepony://o/${props.path}?landscape=${props.landscape}&specialRotate=${props.specialRotate}`;
}

export default class ProjectLink extends React.Component {
  render() {
    let href = getProjectLink(props)
    return (<a {...this.props} href={href}>{this.props.children}</a>)
  }
}
