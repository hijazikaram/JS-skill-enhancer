import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true
    };
  }

  handleNumClicked = (num) => {
    console.log(num)
  }

  handleActionClicked = action => {
    console.log(action)
  }
  render() {
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const actions = ['-', '+', '*', '/', '='];
    const num = numbers.map((num, i) => <button key={i} onClick={() => this.handleNumClicked(num)}>{ num } </button>);
    const action = actions.map((action,i) => <button key={i} onClick={() => this.handleActionClicked(action)}>{action}</button>);

    return (
      <div className="App">
        <h1>Calculator</h1>
        <div className="calc">
          <div>
            <input type="text" readOnly></input>
          </div>
          <div>
            { num }
          </div>
          <div>
            { action }
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
