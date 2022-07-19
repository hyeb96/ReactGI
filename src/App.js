import { Component } from 'react';
import BasicInfo from './components/BasicInfo';
import './App.css';

let people = [
  {
    name: 'Hdit',
    phone: '8482838909',
    age: 62,
  },
  {
    name: 'Bob',
    phone: '758274998',
    age: 12,
  },
  {
    name: 'Mickey',
    phone: '3656286790',
    age: 53,
  }
]

function iteratePeople(arr) {
  return arr.map((person) => {
    return <BasicInfo person={person} />
  }
  )
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
      }
    }
  }
  render() {
    return (iteratePeople(people))
  }
}
