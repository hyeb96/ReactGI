import { Component } from 'react';

export default class BasicInfo extends Component {
    //easy
    constructor(props) {
        super(props);
        this.state = {
            person: {
                name: this.props.person.name,
                phone: this.props.person.phone,
                age: this.props.person.age
            }
        }
    }
    render() {
        return (
            //very easy
            <div>
                <p>Name: {this.state.person.name}</p>
                <p>Phone: {this.state.person.phone}</p>
                <p>Age: {this.state.person.age}</p>
            </div>
        )
    }
}