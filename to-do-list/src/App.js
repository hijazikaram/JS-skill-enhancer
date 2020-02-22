import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    toDos: [],
    toDo: ''
  }

  handleOnChange = (event) => {
    this.setState({ toDo: event.target.value });
  }

  addToDo = () => {
    const toDos = [...this.state.toDos, this.state.toDo];
    this.setState({
      toDos,
      toDo: '',
      isDone: false
    })
  }

  deleteToDo = (toDo) => {
    // find the index
    const index = this.state.toDos.indexOf(toDo);
    // if found, remove from the array
    if (index > -1) {
      this.state.toDos.splice(index, 1);
    }
    // update the state with the new array
    this.setState({
      toDos: this.state.toDos
    })
  }

  handleCheckChange = (event) => {
    const name = event.target.name;
    this.setState({
      [name]: event.target.checked
    });
  }

  render() {
    // console.log(this.state);
    // add the way to edit toDo
    // checked not working when there is more than one toDO
    const toDos = this.state.toDos.map((toDo, i) => {
      return (
        <div key={i}>
          <input name="isDone" type="checkbox" checked={this.state.isDone} onChange={this.handleCheckChange}></input>
          <span style={{ textDecoration: this.state.isDone ? 'line-through' : 'none'}}>{toDo}</span>
          <button onClick={() => this.deleteToDo(toDo)}>Delete</button>
          <button>Edit</button>
          <input value={toDo} hidden></input>
        </div>
      )
    })
    return (
      <div className="App">
        <input type="text" value={this.state.toDo} onChange={this.handleOnChange}></input>
        <button onClick={this.addToDo}>Add To Do</button>
        {toDos}
      </div>
    );
  }
}

export default App;
