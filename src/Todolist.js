import React from 'react';
//import './App.css';
//import List from './List';

const List = (props) => {
    return <ul>{props.items.map((item, index) => <li key={index}>{item}</li>)}</ul>
}
class Todolist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            items: []
        };
    }

    onChange = (event) => {
        this.setState({ term: event.target.value });
    }
    onSubmit = (event) => {
        event.preventDefault();
        var inputValue = document.getElementById("myInput").value;
        if (inputValue !== '') {
            this.setState({
                term: '',
                items: [...this.state.items, this.state.term]
            });
        } else {
            alert("write Something");
        }
    }
    render() {
        return (
            <div className="tc">
                <form className="form" onSubmit={this.onSubmit}>
                    <input refs="itemName" id="myInput" placeholder="Add Todo" onChange={this.onChange} value={this.state.term} />
                    <button>Submit</button>
                </form>
                <List items={this.state.items} />
            </div>
        )
    }

}
export default Todolist;