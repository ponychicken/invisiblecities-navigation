var React = require('react');
var Text = require('./Text.jsx');
var CardView = require('./CardView.jsx');

var fillText = 'Vergeblich, großherziger Kublai, werde ich versuchen, dir die Stadt Zaira mit ihren hohen Bastionen zu beschreiben. Ich könnte dir sagen, wie viele Stufen die treppenförmigen Straßen haben, welche Wölbung die Bögen der Arkaden, mit was für';

var projects = [

  {
    author: 'Dom Okah',
    city: 'Perinthia',
    text: fillText,
    image: './IMG_0012.PNG',
    landscape: true,
    path: 'dom'
  },
  {
    author: 'Lorenz Fidel Huchthausen',
    city: 'Unknown',
    text: fillText,
    image: './IMG_0013.PNG',
    path: 'lorenz',
    specialRotate: false
  },
  {
    author: 'Wiebke Helmchen',
    city: 'Chloe',
    text: fillText,
    image: './IMG_0011.PNG',
    landscape: true,
    path: 'wiebke'
  },
  {
    author: 'Ilya Barret',
    city: 'Perinthia',
    text: fillText,
    image: './IMG_0016.PNG',
    landscape: false,
    path: 'ilya'
  },
  {
    author: 'Eric Reh',
    city: 'Perinthia',
    text: fillText,
    image: './eric.png',
    landscape: true,
    specialRotate: true,
    path: 'eric'
  },
  {
    author: 'Gabriela Kapfert',
    city: 'Procopia',
    text: fillText,
    image: './eric.png',
    landscape: true,
    specialRotate: true,
    path: 'gabi'
  },
  {
    author: 'Leo Koppelkamm',
    city: 'Irene',
    text: fillText,
    image: './eric.png',
    landscape: true,
    specialRotate: true,
    path: 'leo'
  }
];

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
