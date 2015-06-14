var React = require('react');

export function getProjectHref(props) {
  return `thepony://o/${props.path}?landscape=${props.landscape}&specialRotate=${props.specialRotate}`;
}

export class ProjectLink extends React.Component {
  render() {
    let href = getProjectHref(this.props)
    return (<a {...this.props} href={href}>{this.props.children}</a>)
  }
}
