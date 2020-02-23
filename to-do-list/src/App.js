import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    toDos: [],
    toDo: '',
    errorMsg: ''
  }

  handleOnChange = (event) => {
    this.setState({ toDo: event.target.value });
  }

  handleEditToDo = (event, toDo) => {
    const test = this.state.toDos.find(x => x.id === toDo.id);
    test.editValue = event.target.value;
    // update the state with the new array
    this.setState({
      toDos: this.state.toDos
    });
  }

  addToDo = () => {
    // add to do only if toDo equals some kind ov value
    if (this.state.toDo !== '') {
      // create a new ToDo
      const toDo = {
        value: this.state.toDo,
        checked: false,
        edit: false,
        editValue: null,
        id: Math.random().toString(36).substr(2, 9)
      };
      const toDos = [...this.state.toDos, toDo];
      this.setState({
        toDos,
        toDo: '',
        isDone: false,
        errorMsg: ''
      })
    } else {
      this.setState({
        errorMsg: 'Please a valid value.'
      });
    }
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
      toDos: this.state.toDos,
      errorMsg: ''
    });
  }

  handleCheckChange = (updateToDo) => {
    const toDo = this.state.toDos.find(x => x.id === updateToDo.id);
    toDo.checked = !toDo.checked;
    this.setState({
      toDos: this.state.toDos
    });
  }

  editToDo = (updatedToDo) => {
    const toDo = this.state.toDos.find(x => x.id === updatedToDo.id);
    toDo.edit = true;
    this.setState({
      toDos: this.state.toDos
    })
  }

  updateToDo = (toDo) => {
    const updateTodo = this.state.toDos.find(x => x.id === toDo.id);
    if (updateTodo.editValue && updateTodo.editValue !== '') {
      updateTodo.value = updateTodo.editValue;
      updateTodo.edit = false;
      this.setState({
        toDos: this.state.toDos,
        errorMsg: ''
      });
    } else {
      this.setState({
        errorMsg: 'Please a valid value.'
      });
    }
  }

  render() {
    const toDos = this.state.toDos.map((toDo, i) => {
      return (
        <div key={i}>
          <input name="isDone" type="checkbox" checked={toDo.checked} onChange={() => this.handleCheckChange(toDo)}></input>
          <span hidden={toDo.edit} style={{ textDecoration: toDo.checked ? 'line-through' : 'none'}}>{toDo.value}</span>
          <input value={toDo.editValue === null ? toDo.value : toDo.editValue} hidden={!toDo.edit}  onChange={(e) => this.handleEditToDo(e, toDo)}></input>
          <button onClick={() => this.deleteToDo(toDo)} hidden={toDo.edit}>Delete</button>
          <button onClick={() => !toDo.edit ? this.editToDo(toDo) : this.updateToDo(toDo)}>{!toDo.edit ? 'Edit': 'Save'}</button>
        </div>
      )
    })
    return (
      <div className="App">
        <input type="text" value={this.state.toDo} onChange={this.handleOnChange}></input>
        <button onClick={this.addToDo}>Add To Do</button>
        {toDos}
        {this.state.errorMsg}
      </div>
    );
  }
}

export default App;
